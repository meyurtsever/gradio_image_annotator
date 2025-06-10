<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from "svelte";
	import { BoundingBox, Hand, Trash, Label, Freehand, Polygon } from "./icons/index";
	import ModalBox from "./ModalBox.svelte";
	import Box from "./Box";
	import FreehandPath from "./FreehandPath";
	import PolygonShape from "./Polygon";
	import { Colors } from './Colors.js';
	import AnnotatedImageData from "./AnnotatedImageData";
	import { Undo, Redo } from "@gradio/icons";
	import WindowViewer from "./WindowViewer";
	enum Mode {creation, drag, freehand, polygon}
	// Undo/Redo system
	interface UndoRedoAction {
		type: 'create_shape' | 'delete_shape' | 'edit_shape' | 'polygon_point' | 'move_shape' | 'resize_shape';
		shapeIndex?: number;
		shapeData?: any;
		oldShapeData?: any;
		pointIndex?: number;
		pointData?: any;
		timestamp?: number; // Optional since addUndoAction will add it
	}
	let undoStack: UndoRedoAction[] = [];
	let redoStack: UndoRedoAction[] = [];
	const MAX_UNDO_STEPS = 50;
	let isInitialState = true; // Flag to track if we're in initial state

    export let imageUrl: string | null = null;
	export let interactive: boolean;
	export let boxAlpha = 0.5;
	export let boxMinSize = 10;
	export let handleSize: number;
	export let boxThickness: number;
	export let boxSelectedThickness: number;
	export let value: null | AnnotatedImageData;
	export let choices = [];
    export let choicesColors = [];
	export let disableEditBoxes: boolean = false;
	export let height: number | string = "100%";
	export let width: number | string = "100%";
	export let singleBox: boolean = false;
	export let showRemoveButton: boolean = null;
	export let handlesCursor: boolean = true;
	export let useDefaultLabel: boolean = false;

	if (showRemoveButton === null) {
		showRemoveButton = (disableEditBoxes);
	}

    let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
    let image = null;
	let selectedBox = -1;
	let mode: Mode = Mode.drag;
	let canvasWindow: WindowViewer = new WindowViewer(draw);
	if (value !== null && value.boxes.length == 0) {
		mode = Mode.creation;
	}

	let canvasXmin = 0;
	let canvasYmin = 0;
	let canvasXmax = 0;
	let canvasYmax = 0;
	let scaleFactor = 1.0;

	let imageWidth = 0;
	let imageHeight = 0;
	let editModalVisible = false;
	let newModalVisible = false;
	let editDefaultLabelVisible = false;
	let currentPolygon: PolygonShape | null = null; // Track current polygon being created

	let labelDetailLock = useDefaultLabel;
	let defaultLabelCache = {
		label: "",
		color: ""
	};
	const dispatch = createEventDispatcher<{
		change: undefined;
		select: { coordinates: [number, number] };
	}>();

	function colorHexToRGB(hex: string) {
		var r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	function colorRGBAToHex(rgba: string) {
		const rgbaValues = rgba.match(/(\d+(\.\d+)?)/g);
		const r = parseInt(rgbaValues[0]);
		const g = parseInt(rgbaValues[1]);
		const b = parseInt(rgbaValues[2]);
		const hex = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
		return hex;
	}
	
    function draw() {
		if (ctx) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.save();
			ctx.translate(canvasWindow.offsetX, canvasWindow.offsetY);
			ctx.scale(canvasWindow.scale, canvasWindow.scale);
			if (image !== null){
				switch (value.orientation) {
					case 0:
						ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
						break;
					case 1:
						ctx.translate(imageWidth, 0);
						ctx.rotate(Math.PI / 2);
						ctx.drawImage(image, 0, 0, imageHeight, imageWidth);
						break;
					case 2:
						ctx.translate(imageWidth, imageHeight);
						ctx.rotate(Math.PI);
						ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
						break;
					case 3:
						ctx.translate(0, imageHeight);
						ctx.rotate(-Math.PI / 2);
						ctx.drawImage(image, 0, 0, imageHeight, imageWidth);
						break;
				}


				ctx.restore();
				// ctx.resetTransform();
			}
			
			for (const box of value.boxes.slice().reverse()) {
				box.render(ctx);
			}
		}
	}

    function selectBox(index: number) {
		selectedBox = index;
		value.boxes.forEach(box => {box.setSelected(false);});
		if (index >= 0 && index < value.boxes.length){
			value.boxes[index].setSelected(true);
		}		draw();
	}
		function handlePointerDown(event: PointerEvent) {
		if (!interactive) {
			return;
		}

		// Mark that this is not during initial state anymore after first interaction
		isInitialState = false;

		if (
			event.target instanceof Element &&
			event.target.hasPointerCapture(event.pointerId)
		) {
			event.target.releasePointerCapture(event.pointerId);
		}
		if (mode === Mode.creation) {
			createBox(event);
		} else if (mode === Mode.freehand) {
			createFreehandPath(event);
		} else if (mode === Mode.polygon) {
			handlePolygonClick(event);
		} else if (mode === Mode.drag) {
			clickBox(event);
		}
	}function clickBox(event: PointerEvent) {
		console.log("clickBox function called, mode:", mode === Mode.drag ? "drag" : "creation");
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;
		let selectedBoxFlag = false;
		// Check if the mouse is over any of the resizing handles
		for (const [i, box] of value.boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				selectedBoxFlag = true;
				selectBox(i);
						// Set up undo callbacks for resize
				let resizeStartState: any = null;
				box.onMoveStart = () => {
					resizeStartState = cloneShapeData(box);
					console.log("Resize started, captured state:", resizeStartState);
				};
				box.onMoveEnd = () => {
					if (resizeStartState) {
						const finalState = cloneShapeData(box);
						console.log("Resize ended, final state:", finalState);
						addUndoAction({
							type: 'edit_shape',
							shapeIndex: i,
							oldShapeData: resizeStartState,
							shapeData: finalState
						});
						resizeStartState = null;
					}
				};
				
				box.startResize(handleIndex, event);
				return;
			}
		}		// Check if the mouse is inside a box
		for (const [i, box] of value.boxes.entries()) {
			if (box.isPointInsideBox(mouseX, mouseY)) {
				selectedBoxFlag = true;
				selectBox(i);
				
				// Set up undo callbacks for drag
				let dragStartState: any = null;
				box.onMoveStart = () => {
					dragStartState = cloneShapeData(box);
				};
				box.onMoveEnd = () => {
					if (dragStartState) {
						addUndoAction({
							type: 'edit_shape',
							shapeIndex: i,
							oldShapeData: dragStartState,
							shapeData: cloneShapeData(box)
						});
						dragStartState = null;
					}
				};
				
				box.startDrag(event);
				return;
			}
		}
		if (!selectedBoxFlag) {
			if (!singleBox) {
				selectBox(-1);
			}
			
			// IMPORTANT: Select events are NEVER tracked in undo/redo - this is just coordinate dispatch
			console.log("No box selected, checking if we should dispatch select event");
			// Dispatch select event with coordinates when clicking on empty area in drag mode
			if (mode === Mode.drag) {
				console.log("Mode is drag, calculating coordinates");
				const imageX = (mouseX - canvasWindow.offsetX) / scaleFactor / canvasWindow.scale;
				const imageY = (mouseY - canvasWindow.offsetY) / scaleFactor / canvasWindow.scale;
				
				console.log("Click detected in drag mode:", { mouseX, mouseY, imageX, imageY, scaleFactor, "canvasWindow.scale": canvasWindow.scale, "canvasWindow.offsetX": canvasWindow.offsetX, "canvasWindow.offsetY": canvasWindow.offsetY });
				
				// Check if click is within the image bounds (using original image dimensions)
				if (image && imageX >= 0 && imageX <= image.naturalWidth && imageY >= 0 && imageY <= image.naturalHeight) {
					console.log("Dispatching select event with coordinates:", [Math.round(imageX), Math.round(imageY)]);
					// NO UNDO TRACKING FOR SELECT EVENTS - this is just for coordinate reporting
					dispatch("select", { coordinates: [Math.round(imageX), Math.round(imageY)] });
				} else {
					console.log("Click outside image bounds or no image loaded", { 
						hasImage: !!image, 
						imageX, imageY, 
						naturalWidth: image?.naturalWidth, 
						naturalHeight: image?.naturalHeight 
					});
				}
			} else {
				console.log("Mode is not drag, mode:", mode);
			}
			canvasWindow.startDrag(event);
		}
	}

	function handlePointerUp(event: PointerEvent) {
		dispatch("change");
	}

	function handlePointerMove(event: PointerEvent) {
		if (value === null) {
			return;
		}
		if (mode !== Mode.drag) {
			return;
		}

		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		for (const [_, box] of value.boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				canvas.style.cursor = box.resizeHandles[handleIndex].cursor;
				return;
			}
		}

		canvas.style.cursor = "default";
	}	function handleKeyPress(event: KeyboardEvent) {
		if (!interactive) {
			return;
		}

		// Handle CTRL+Z and CTRL+Y for undo/redo
		if (event.ctrlKey) {
			switch (event.key.toLowerCase()) {
				case "z":
					if (event.shiftKey) {
						// CTRL+SHIFT+Z is also redo in some systems
						performRedo();
					} else {
						performUndo();
					}
					event.preventDefault();
					break;
				case "y":
					performRedo();
					event.preventDefault();
					break;
			}
			return;
		}

		switch (event.key) {
			case "Delete":
				onDeleteBox();
				break;
			case " ": // Space key
				if (mode === Mode.polygon && currentPolygon && currentPolygon.isCreating) {
					event.preventDefault();
					if (currentPolygon._points.length >= currentPolygon.minPoints) {
						currentPolygon.finishCreating();
					}
				}
				break;
		}
	}

	function handleMouseWheel(event: WheelEvent) {
		event.preventDefault();
		const delta = 1 / (1 + (event.deltaY / 1000) * 0.5);

		const newScaleTmp = parseFloat((canvasWindow.scale * delta).toFixed(2));
		const newScale = newScaleTmp < 1 ? 1 : newScaleTmp;
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		const worldX = (mouseX - canvasWindow.offsetX) / canvasWindow.scale;
		const worldY = (mouseY - canvasWindow.offsetY) / canvasWindow.scale;

		canvasWindow.offsetX = mouseX - worldX * newScale;
		canvasWindow.offsetY = mouseY - worldY * newScale;

		canvasWindow.scale = newScale;
		draw();
	}
	function addUndoAction(action: UndoRedoAction) {
		// Don't add undo actions during initial state setup
		if (isInitialState) {
			console.log("Skipping undo action during initial state:", action);
			return;
		}
		
		// Clear redo stack when new action is added
		redoStack = [];
		
		// Add to undo stack
		undoStack.push({
			...action,
			timestamp: Date.now()
		});
		
		// Limit undo stack size
		if (undoStack.length > MAX_UNDO_STEPS) {
			undoStack.shift();
		}
		
		console.log("Added undo action:", action, "Stack size:", undoStack.length);
	}

	function performUndo() {
		if (undoStack.length === 0) {
			console.log("Cannot undo: stack is empty");
			return;
		}
		
		const action = undoStack.pop();
		if (!action) return;

		switch (action.type) {
			case 'create_shape':
				// Remove the created shape
				if (action.shapeIndex !== undefined && action.shapeIndex < value.boxes.length) {
					const removedShape = value.boxes.splice(action.shapeIndex, 1)[0];
					redoStack.push({
						type: 'delete_shape',
						shapeIndex: action.shapeIndex,
						shapeData: cloneShapeData(removedShape),
						timestamp: Date.now()
					});
				}
				break;
				
			case 'delete_shape':
				// Restore the deleted shape
				if (action.shapeData && action.shapeIndex !== undefined) {
					const restoredShape = restoreShapeFromData(action.shapeData);
					value.boxes.splice(action.shapeIndex, 0, restoredShape);
					redoStack.push({
						type: 'create_shape',
						shapeIndex: action.shapeIndex,
						timestamp: Date.now()
					});
				}
				break;
						case 'polygon_point':
				// Remove the last added polygon point
				if (currentPolygon && action.pointData) {
					currentPolygon._points.pop();
					
					// If polygon has no points left, remove it from the canvas and reset currentPolygon
					if (currentPolygon._points.length === 0) {
						// Find and remove the polygon from the boxes array
						const polygonIndex = value.boxes.indexOf(currentPolygon);
						if (polygonIndex >= 0) {
							value.boxes.splice(polygonIndex, 1);
						}
						currentPolygon = null; // Reset the current polygon
					} else {
						currentPolygon.updateBoundingBox();
					}
					
					redoStack.push({
						type: 'polygon_point',
						pointData: action.pointData,
						timestamp: Date.now()
					});
				}
				break;
				
			case 'edit_shape':
				// Restore previous shape state
				if (action.shapeIndex !== undefined && action.oldShapeData && action.shapeIndex < value.boxes.length) {
					const currentShapeData = cloneShapeData(value.boxes[action.shapeIndex]);
					restoreShapeFromData(action.oldShapeData, value.boxes[action.shapeIndex]);
					redoStack.push({
						type: 'edit_shape',
						shapeIndex: action.shapeIndex,
						oldShapeData: currentShapeData,
						shapeData: action.shapeData,
						timestamp: Date.now()
					});
				}
				break;
		}
		
		selectBox(-1);
		draw();
		dispatch("change");
	}

	function performRedo() {
		if (redoStack.length === 0) return;
		
		const action = redoStack.pop();
		if (!action) return;

		switch (action.type) {
			case 'create_shape':
				// Remove the shape again
				if (action.shapeIndex !== undefined && action.shapeIndex < value.boxes.length) {
					const removedShape = value.boxes.splice(action.shapeIndex, 1)[0];
					undoStack.push({
						type: 'delete_shape',
						shapeIndex: action.shapeIndex,
						shapeData: cloneShapeData(removedShape),
						timestamp: Date.now()
					});
				}
				break;
				
			case 'delete_shape':
				// Add the shape back
				if (action.shapeData && action.shapeIndex !== undefined) {
					const restoredShape = restoreShapeFromData(action.shapeData);
					value.boxes.splice(action.shapeIndex, 0, restoredShape);
					undoStack.push({
						type: 'create_shape',
						shapeIndex: action.shapeIndex,
						timestamp: Date.now()
					});
				}
				break;
						case 'polygon_point':
				// Add the polygon point back
				if (action.pointData) {
					// If currentPolygon is null, we need to find the polygon that was being created
					// or recreate it if it was removed
					if (!currentPolygon) {
						// Look for a polygon in the boxes that might be the one we're working with
						// For now, we'll assume we need to recreate the polygon
						// This is a complex case that should be rare in practice
						console.warn("Trying to redo polygon point but no current polygon exists");
					} else {
						currentPolygon._points.push(action.pointData);
						
						// If this was the first point after the polygon was removed, add it back to boxes
						if (currentPolygon._points.length === 1 && !value.boxes.includes(currentPolygon)) {
							if (singleBox) {
								value.boxes = [currentPolygon];
							} else {
								value.boxes = [currentPolygon, ...value.boxes];
							}
						}
						
						currentPolygon.updateBoundingBox();
					}
					
					undoStack.push({
						type: 'polygon_point',
						pointData: action.pointData,
						timestamp: Date.now()
					});
				}
				break;
				
			case 'edit_shape':
				// Restore the edited state
				if (action.shapeIndex !== undefined && action.shapeData && action.shapeIndex < value.boxes.length) {
					const currentShapeData = cloneShapeData(value.boxes[action.shapeIndex]);
					restoreShapeFromData(action.shapeData, value.boxes[action.shapeIndex]);
					undoStack.push({
						type: 'edit_shape',
						shapeIndex: action.shapeIndex,
						oldShapeData: currentShapeData,
						shapeData: action.oldShapeData,
						timestamp: Date.now()
					});
				}
				break;
		}
		
		selectBox(-1);
		draw();
		dispatch("change");
	}

	/**
	 * Auto-click at (0,0) to enable proper undo/redo functionality after labeling
	*/

	function cloneShapeData(shape: any): any {
		if (!shape) return null;
		
		if (shape instanceof FreehandPath) {
			return {
				type: 'freehand',
				points: [...shape._points],
				label: shape.label,
				color: shape.color,
				xmin: shape.xmin,
				ymin: shape.ymin,
				xmax: shape.xmax,
				ymax: shape.ymax
			};
		} else if (shape instanceof PolygonShape) {
			return {
				type: 'polygon',
				points: [...shape._points],
				label: shape.label,
				color: shape.color,
				xmin: shape.xmin,
				ymin: shape.ymin,
				xmax: shape.xmax,
				ymax: shape.ymax
			};		} else if (shape instanceof Box) {
			return {
				type: 'box',
				label: shape.label,
				color: shape.color,
				xmin: shape._xmin,
				ymin: shape._ymin,
				xmax: shape._xmax,
				ymax: shape._ymax
			};
		}
		return null;
	}

	function restoreShapeFromData(data: any, existingShape?: any): any {
		if (!data) return null;
				if (existingShape) {
			// Update existing shape
			existingShape.label = data.label;
			existingShape.color = data.color;
			
			if (existingShape instanceof Box) {
				// For Box objects, update the actual coordinates (_xmin, etc.)
				existingShape._xmin = data.xmin;
				existingShape._ymin = data.ymin;
				existingShape._xmax = data.xmax;
				existingShape._ymax = data.ymax;
				// Apply scaling to get the scaled coordinates
				existingShape.applyUserScale();
			} else {
				// For other shapes, update the regular coordinates
				existingShape.xmin = data.xmin;
				existingShape.ymin = data.ymin;
				existingShape.xmax = data.xmax;
				existingShape.ymax = data.ymax;
			}
			
			if ((existingShape instanceof FreehandPath || existingShape instanceof PolygonShape) && data.points) {
				existingShape._points = [...data.points];
				existingShape.updateBoundingBox();
			}
			
			return existingShape;
		} else {
			// Create new shape
			switch (data.type) {
				case 'freehand':
					const freehand = new FreehandPath(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						data.label,
						data.color,
						boxAlpha,
						boxMinSize,
						handleSize,
						boxThickness,
						boxSelectedThickness
					);
					freehand._points = [...data.points];
					freehand.updateBoundingBox();
					return freehand;
					
				case 'polygon':
					const polygon = new PolygonShape(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						data.label,
						data.color,
						boxAlpha,
						boxMinSize,
						handleSize,
						boxThickness,
						boxSelectedThickness
					);
					polygon._points = [...data.points];
					polygon.updateBoundingBox();
					return polygon;
					
				case 'box':
					return new Box(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						data.label,
						data.xmin,
						data.ymin,
						data.xmax,
						data.ymax,
						data.color,
						boxAlpha,
						boxMinSize,
						handleSize,
						boxThickness,
						boxSelectedThickness
					);
			}
		}
		return null;
	}
	function createFreehandPath(event: PointerEvent) {
		const rect = canvas.getBoundingClientRect();
		let color;
		if (choicesColors.length > 0) {
			color = colorHexToRGB(choicesColors[0]);
		} else if (singleBox) {
			if (value.boxes.length > 0) {
				color = value.boxes[0].color;
			} else {
				color = Colors[0];
			}
		} else {
			color = Colors[value.boxes.length % Colors.length];
		}
		
		let freehandPath = new FreehandPath(
			draw,
			onBoxFinishCreation,
			canvasWindow,
			canvasXmin,
			canvasYmin,
			canvasXmax,
			canvasYmax,
			"",
			color,
			boxAlpha,
			boxMinSize,
			handleSize,
			boxThickness,
			boxSelectedThickness
		);
		freehandPath.startCreating(event, rect.left, rect.top);
		if (singleBox) {
			value.boxes = [freehandPath];
		} else {
			value.boxes = [freehandPath, ...value.boxes];
		}
		
		// Add undo action for shape creation
		addUndoAction({
			type: 'create_shape',
			shapeIndex: 0
		});
		
		selectBox(0);
		draw();
		dispatch("change");
	}	function handlePolygonClick(event: PointerEvent) {
		// Check if currentPolygon is in an invalid state (no points or not in boxes array)
		if (currentPolygon && (!currentPolygon._points || currentPolygon._points.length === 0 || !value.boxes.includes(currentPolygon))) {
			console.log("Resetting invalid currentPolygon state");
			currentPolygon = null;
		}
		
		if (currentPolygon === null) {
			// Start creating a new polygon
			createPolygon(event);
		} else {
			// Add point to existing polygon or finish if conditions are met
			if (currentPolygon.isCreating) {
				const finished = currentPolygon.addPoint(event);
				if (!finished) {
					// Continue creating - just redraw
					draw();
					dispatch("change");
				}
				// If finished is true, the polygon's finishCreating method will handle completion
			}
		}
	}function createPolygon(event: PointerEvent) {
		const rect = canvas.getBoundingClientRect();
		let color;
		if (choicesColors.length > 0) {
			color = colorHexToRGB(choicesColors[0]);
		} else if (singleBox) {
			if (value.boxes.length > 0) {
				color = value.boxes[0].color;
			} else {
				color = Colors[0];
			}
		} else {
			color = Colors[value.boxes.length % Colors.length];
		}
		
		let polygon = new PolygonShape(
			draw,
			onPolygonFinishCreation,
			canvasWindow,
			canvasXmin,
			canvasYmin,
			canvasXmax,
			canvasYmax,
			"",
			color,
			boxAlpha,
			boxMinSize,
			handleSize,
			boxThickness,
			boxSelectedThickness
		);
		
		// Set up point addition callback for undo/redo
		polygon.onPointAdded = (point) => {
			addUndoAction({
				type: 'polygon_point',
				pointData: point
			});
		};
		
		currentPolygon = polygon; // Set the current polygon being created
		
		polygon.startCreating(event, rect.left, rect.top);
		if (singleBox) {
			value.boxes = [polygon];
		} else {
			value.boxes = [polygon, ...value.boxes];
		}
		
		// Add undo action for shape creation
		addUndoAction({
			type: 'create_shape',
			shapeIndex: 0
		});
		
		selectBox(0);
		draw();
		dispatch("change");
	}
	function createBox(event: PointerEvent) {
		const rect = canvas.getBoundingClientRect();
		const x = (event.clientX - rect.left - canvasWindow.offsetX) / scaleFactor / canvasWindow.scale;
		const y = (event.clientY - rect.top - canvasWindow.offsetY) / scaleFactor / canvasWindow.scale;
		let color;
		if (choicesColors.length > 0) {
			color = colorHexToRGB(choicesColors[0]);
		} else if (singleBox) {
			if (value.boxes.length > 0) {
				color = value.boxes[0].color;
			} else {
				color = Colors[0];
			}
		} else {
			color = Colors[value.boxes.length % Colors.length];
		}
		
		let box = new Box(
			draw,
			onBoxFinishCreation,
			canvasWindow,
			canvasXmin,
			canvasYmin,
			canvasXmax,
			canvasYmax,
			"",
			x,
			y,
			x,
			y,
			color,
			boxAlpha,
			boxMinSize,
			handleSize,
			boxThickness,
			boxSelectedThickness
		);
		box.startCreating(event, rect.left, rect.top);
		if (singleBox) {
			value.boxes = [box];
		} else {
			value.boxes = [box, ...value.boxes];
		}
		
		// Add undo action for shape creation
		addUndoAction({
			type: 'create_shape',
			shapeIndex: 0
		});
		
		selectBox(0);
		draw();
		dispatch("change");
	}	function setCreateMode() {
		mode = Mode.creation;
		canvas.style.cursor = "crosshair";
		// Reset polygon state when switching modes
		currentPolygon = null;
	}

	function setFreehandMode() {
		mode = Mode.freehand;
		canvas.style.cursor = "crosshair";
		// Reset polygon state when switching modes
		currentPolygon = null;
	}

	function setPolygonMode() {
		mode = Mode.polygon;
		canvas.style.cursor = "crosshair";
		// Don't reset currentPolygon when switching TO polygon mode
		// Only reset when switching away from it
	}

	function setDragMode() {
		mode = Mode.drag;
		canvas.style.cursor = "default";
		// Reset polygon state when switching modes
		currentPolygon = null;
	}

	function onBoxFinishCreation() {
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			if (value.boxes[selectedBox].getArea() < 1) {
				onDeleteBox();
			} else {
				if (!disableEditBoxes) {
					if (labelDetailLock) {
						onUseDefaultLabelModalNew();
					} else{
						newModalVisible = true;
					}
				}
				if (singleBox) {
					setDragMode();
				}
			}
		}
	}

	function onPolygonFinishCreation() {
		// Reset the current polygon since creation is finished
		currentPolygon = null;
		
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			if (value.boxes[selectedBox].getArea() < 1) {
				onDeleteBox();
			} else {
				if (!disableEditBoxes) {
					if (labelDetailLock) {
						onUseDefaultLabelModalNew();
					} else{
						newModalVisible = true;
					}
				}
				// Always switch to drag mode after polygon creation
				setDragMode();
			}
		}
	}

	function onEditBox() {
		if (selectedBox >= 0 && selectedBox < value.boxes.length && !disableEditBoxes) {
			editModalVisible = true;
		}
	}

	function handleDoubleClick(event: MouseEvent){
		if (!interactive) {
			return;
		}
		
		onEditBox();
	}
	function addCustomLabelToChoices(label: string, color: string) {
		// Check if the label already exists in choices
		const existingLabelIndex = choices.findIndex(choice => choice[0] === label);
		
		if (existingLabelIndex === -1) {
			// Label doesn't exist, add it to choices and choicesColors
			choices.push([label, choices.length]);
			choicesColors.push(color);
			
			// Trigger reactivity by reassigning the arrays
			choices = choices;
			choicesColors = choicesColors;
			
			console.log(`Added custom label "${label}" with color ${color} to choices`);
		} else {
			// Label exists, update its color if different
			if (choicesColors[existingLabelIndex] !== color) {
				choicesColors[existingLabelIndex] = color;
				choicesColors = choicesColors;
				console.log(`Updated color for existing label "${label}" to ${color}`);
			}
		}
	}
	function onModalEditChange(event) {
		editModalVisible = false;
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			let box = value.boxes[selectedBox];
			if (ret == 1) {
				// Store old state for undo
				const oldShapeData = cloneShapeData(box);
				
				// Add custom label to choices if it's new
				addCustomLabelToChoices(label, color);
				
				box.label = label;
				box.color = colorHexToRGB(color);
				
				// Store new state and add undo action
				const newShapeData = cloneShapeData(box);
				addUndoAction({
					type: 'edit_shape',
					shapeIndex: selectedBox,
					oldShapeData: oldShapeData,
					shapeData: newShapeData
				});				draw();
				dispatch("change");
			} else if (ret == -1) {
				onDeleteBox();
			}
		}
		
		// Focus canvas after modal closes to ensure keyboard events work
		setTimeout(() => {
			if (canvas) {
				canvas.focus();
				console.log("Canvas focused after modal edit change");
			}
		}, 100);
	}function onModalNewChange(event) {
		newModalVisible = false;
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		let lock = detail.lock;
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			let box = value.boxes[selectedBox];
			if (ret == 1) {
				// Add custom label to choices if it's new
				addCustomLabelToChoices(label, color);
				
				labelDetailLock = lock;
				defaultLabelCache.label = label;
				defaultLabelCache.color = color;
				box.label = label;
				box.color = colorHexToRGB(color);			draw();				dispatch("change");
				// Automatically switch to drag mode after labeling
				setDragMode();
			} else {
				onDeleteBox();
			}
		}
		
		// Focus canvas after modal closes to ensure keyboard events work
		setTimeout(() => {
			if (canvas) {
				canvas.focus();
				console.log("Canvas focused after modal new change");
			}
		}, 100);
	}

	function onDefaultLabelEditChange(event) {
		editDefaultLabelVisible = false;
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		let lock = detail.lock;		if (ret == 1) {
			labelDetailLock = lock;
			defaultLabelCache.label = label;
			defaultLabelCache.color = color;
		}
		
		// Focus canvas after modal closes to ensure keyboard events work
		setTimeout(() => {
			if (canvas) {
				canvas.focus();
				console.log("Canvas focused after default label edit change");
			}
		}, 100);
	}
	function onUseDefaultLabelModalNew(){
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			let box = value.boxes[selectedBox];
			box.label = defaultLabelCache.label;
			if (defaultLabelCache.color !== "") {
				box.color = colorHexToRGB(defaultLabelCache.color);
			}		draw();
			dispatch("change");
			// Automatically switch to drag mode after labeling
			setDragMode();
		}
		
		// Focus canvas after labeling to ensure keyboard events work
		setTimeout(() => {
			if (canvas) {
				canvas.focus();
				console.log("Canvas focused after default label use");
			}
		}, 100);
	}function onDeleteBox() {
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			// Store shape data for undo
			const deletedShape = value.boxes[selectedBox];
			const shapeData = cloneShapeData(deletedShape);
			
			addUndoAction({
				type: 'delete_shape',
				shapeIndex: selectedBox,
				shapeData: shapeData
			});
			
			value.boxes.splice(selectedBox, 1);
			selectBox(-1);
			if (singleBox) {
				setCreateMode();
			}
			dispatch("change");
		}
	}
	
	/**
	 * Rotate the image and all the boxes
	 * @param op 1: rotate clockwise, -1: rotate counterclockwise
	 */
	function onRotateImage(op: number) {
		value.orientation = (((value.orientation + op) % 4) + 4 ) % 4;
		canvasWindow.orientation = value.orientation;

		resize();
		for (const box of value.boxes) {
			box.onRotate(op);
		}
		draw();
	}

	function resize() {
		if (canvas) {
			scaleFactor = 1;
			canvas.width = canvas.clientWidth;

			canvasWindow.setRotatedImage(image);
			
			if (image !== null) {
				if (canvasWindow.imageRotatedWidth > canvas.width) {
					scaleFactor = canvas.width / canvasWindow.imageRotatedWidth;
					imageWidth = Math.round(canvasWindow.imageRotatedWidth * scaleFactor);
					imageHeight = Math.round(canvasWindow.imageRotatedHeight * scaleFactor);
					canvasXmin = 0;
					canvasYmin = 0;
					canvasXmax = imageWidth;
					canvasYmax = imageHeight;
					canvas.height = imageHeight;
				} else {
					imageWidth = canvasWindow.imageRotatedWidth;
					imageHeight = canvasWindow.imageRotatedHeight;
					var x = (canvas.width - imageWidth) / 2;
					canvasXmin = x;
					canvasYmin = 0;
					canvasXmax = x + imageWidth;
					canvasYmax = imageHeight;
					canvas.height = imageHeight;
				}

				canvasWindow.imageWidth = imageWidth;
				canvasWindow.imageHeight = imageHeight;

			} else {
				canvasXmin = 0;
				canvasYmin = 0;
				canvasXmax = canvas.width;
				canvasYmax = canvas.height;
				canvas.height = canvas.clientHeight;
			}
			
			canvasWindow.resize(canvas.width, canvas.height, canvasXmin, canvasYmin);

			if (canvasXmax > 0 && canvasYmax > 0){
				for (const box of value.boxes) {
					box.canvasXmin = canvasXmin;
					box.canvasYmin = canvasYmin;
					box.canvasXmax = canvasXmax;
					box.canvasYmax = canvasYmax;
					box.setScaleFactor(scaleFactor);
				}
			}
			draw();
			dispatch("change");
		}
	}
	const observer = new ResizeObserver(resize);	function parseInputBoxes() {
		for (let i = 0; i < value.boxes.length; i++) {
			let box = value.boxes[i];
			if (!(box instanceof Box) && !(box instanceof FreehandPath) && !(box instanceof PolygonShape)) {
				let color = "";
				let label = "";
				if (box.hasOwnProperty("color")) {
					color = box["color"];
					if (Array.isArray(color) && color.length === 3) {
            			color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        			}
				} else {
					color = Colors[i % Colors.length];
				}
				if (box.hasOwnProperty("label")) {
					label = box["label"];
				}
				
				// Check if it's a freehand path
				if (box.hasOwnProperty("type") && box["type"] === "freehand" && box.hasOwnProperty("points")) {
					let freehandPath = new FreehandPath(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						label,
						color,
						boxAlpha,
						boxMinSize,
						handleSize,
						boxThickness,
						boxSelectedThickness
					);
					freehandPath._points = box["points"];
					freehandPath.updateBoundingBox();
					box = freehandPath;
				} else if (box.hasOwnProperty("type") && box["type"] === "polygon" && box.hasOwnProperty("points")) {
					// Handle polygon shapes
					let polygon = new PolygonShape(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						label,
						color,
						boxAlpha,
						boxMinSize,
						handleSize,
						boxThickness,
						boxSelectedThickness
					);
					polygon._points = box["points"];
					polygon.updateBoundingBox();
					box = polygon;
				} else {
					// Regular box
					box = new Box(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						label,
						box["xmin"],
						box["ymin"],
						box["xmax"],
						box["ymax"],
						color,
						boxAlpha,
						boxMinSize,
						handleSize,
						boxThickness,
						boxSelectedThickness
					);
				}
				value.boxes[i] = box;
			}
		}
	}

	$: {
		value;
		canvasWindow.orientation = value.orientation;
		setImage();
		parseInputBoxes();
		resize();
		draw();
	}

	function setImage(){
		if (imageUrl !== null) {
			if (image === null || image.src != imageUrl) {
				image = new Image();
				image.src = imageUrl;
				image.onload = function(){
					resize();
					draw();
				}
			}
		}
	}
	onMount(() => {
		// Reset initial state flag
		isInitialState = true;
		
		if (Array.isArray(choices) && choices.length > 0) {
			if (!Array.isArray(choicesColors) || choicesColors.length == 0) {
				for (let i = 0; i < choices.length; i++) {
					let color = Colors[i % Colors.length];
					choicesColors.push(colorRGBAToHex(color));
				}
			}
			defaultLabelCache.label = choices[0][0];
			defaultLabelCache.color = choicesColors[0];
		}

		ctx = canvas.getContext("2d");
		observer.observe(canvas);

		if (selectedBox < 0 && value !== null && value.boxes.length > 0) {
			selectBox(0);
		}
		setImage();
		resize();
		draw();
		
		// After initial setup is complete, allow undo tracking
		setTimeout(() => {
			isInitialState = false;
			console.log("Initial state setup complete, undo tracking enabled");
		}, 100);
	});
	
	function handleCanvasFocus() {
		document.addEventListener("keydown", handleKeyPress);
	}
	
	function handleCanvasBlur() {
		document.removeEventListener("keydown", handleKeyPress);
	}

	onDestroy(() => {
		document.removeEventListener("keydown", handleKeyPress);
  	});

</script>

<div
	class="canvas-container"
	tabindex="-1"
	on:focusin={handleCanvasFocus}
	on:focusout={handleCanvasBlur}
>	<canvas
		bind:this={canvas}
		tabindex="0"
		on:pointerdown={handlePointerDown}
		on:pointerup={handlePointerUp}
		on:pointermove={handlesCursor ? handlePointerMove : null}
		on:dblclick={handleDoubleClick}
		on:wheel={handleMouseWheel}
		style="height: {height}; width: {width};"
		class="canvas-annotator"
	></canvas>
</div>

{#if interactive}	<span class="canvas-control">		<button
			class="icon"
			class:selected={mode === Mode.creation}
			aria-label="Create box"
			on:click={() => setCreateMode()}><BoundingBox/></button
		>
		<button
			class="icon"
			class:selected={mode === Mode.freehand}
			aria-label="Freehand drawing"
			on:click={() => setFreehandMode()}><Freehand/></button
		>
		<button
			class="icon"
			class:selected={mode === Mode.polygon}
			aria-label="Polygon drawing (click points, Space/start point to finish)"
			on:click={() => setPolygonMode()}><Polygon/></button
		>
		<button
			class="icon"
			class:selected={mode === Mode.drag}
			aria-label="Edit boxes"
			on:click={() => setDragMode()}><Hand/></button
		>
		{#if showRemoveButton}
			<button
				class="icon"
				aria-label="Remove boxes"
				on:click={() => onDeleteBox()}><Trash/></button
			>
		{/if}
		{#if !disableEditBoxes && labelDetailLock}
			<button
				class="icon"
				aria-label="Edit label"
				on:click={() => editDefaultLabelVisible = true}><Label/></button
			>
		{/if}
		<button
			class="icon"
			class:disabled={undoStack.length === 0}
			aria-label="Undo (Ctrl+Z)"
			on:click={() => performUndo()}><Undo/></button
		>
		<button
			class="icon"
			class:disabled={redoStack.length === 0}
			aria-label="Redo (Ctrl+Y)"
			on:click={() => performRedo()}><Redo/></button
		>
	</span>
{/if}

{#if editModalVisible}
	<ModalBox
		on:change={onModalEditChange}
		on:enter{onModalEditChange}
		choices={choices}
		choicesColors={choicesColors}
		label={selectedBox >= 0 && selectedBox < value.boxes.length ? value.boxes[selectedBox].label : ""}
		color={selectedBox >= 0 && selectedBox < value.boxes.length ? colorRGBAToHex(value.boxes[selectedBox].color) : ""}
	/>
{/if}

{#if newModalVisible}
	<ModalBox
		on:change={onModalNewChange}
		on:enter{onModalNewChange}
		choices={choices}
		showRemove={false}
		choicesColors={choicesColors}
		label={selectedBox >= 0 && selectedBox < value.boxes.length ? 
			(value.boxes[selectedBox].label || (choices.length > 0 ? choices[0][0] : "")) : 
			(choices.length > 0 ? choices[0][0] : "")}
		color={selectedBox >= 0 && selectedBox < value.boxes.length ? 
			colorRGBAToHex(value.boxes[selectedBox].color) : 
			(choicesColors.length > 0 ? choicesColors[0] : "")}
		labelDetailLock = {labelDetailLock}
	/>
{/if}

{#if editDefaultLabelVisible}
	<ModalBox
		on:change={onDefaultLabelEditChange}
		on:enter{onDefaultLabelEditChange}
		choices={choices}
		showRemove={false}
		choicesColors={choicesColors}
		label={selectedBox >= 0 && selectedBox < value.boxes.length ? value.boxes[selectedBox].label : ""}
		color={selectedBox >= 0 && selectedBox < value.boxes.length ? colorRGBAToHex(value.boxes[selectedBox].color) : ""}
		labelDetailLock = {labelDetailLock}
	/>
{/if}

<style>
	.canvas-annotator {
		border-color: var(--block-border-color);
		width: 100%;
		height: 100%;
		display: block;
		touch-action: none;
	}

	.canvas-control {
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--border-color-primary);
		width: 95%;
		bottom: 0;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--size-2);
	}

	.icon {
		width: 22px;
		height: 22px;
		margin: var(--spacing-lg) var(--spacing-xs);
		padding: var(--spacing-xs);
		color: var(--neutral-400);
		border-radius: var(--radius-md);
	}
	.icon:hover,
	.icon:focus {
		color: var(--color-accent);
	}
	
	.icon.disabled {
		color: var(--neutral-300);
		cursor: not-allowed;
	}
	
	.icon.disabled:hover,
	.icon.disabled:focus {
		color: var(--neutral-300);
	}
	
	.selected {
		color: var(--color-accent);
	}

	.canvas-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.canvas-container:focus {
    	outline: none;
	}
</style>
