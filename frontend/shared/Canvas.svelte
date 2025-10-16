<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from "svelte";	import { BoundingBox, Hand, Trash, Label, Freehand, Circle, Polygon, Erase, UndoIcon, RedoIcon, DropdownArrow, Bulb, ClearShapes } from "./icons/index";
	import ModalBox from "./ModalBox.svelte";
	import EraserSettingsModal from "./EraserSettingsModal.svelte";
	import ShapeSettingsModal from "./ShapeSettingsModal.svelte";
	import Box from "./Box";
	import CircleShape from "./Circle";
	import FreehandPath from "./FreehandPath";
	import PolygonShape from "./Polygon";
	import Eraser from "./Eraser";	import { Colors } from './Colors.js';
	import AnnotatedImageData from "./AnnotatedImageData";
	import WindowViewer from "./WindowViewer";
	enum Mode {creation, drag, freehand, circle, polygon, erase}	// Undo/Redo system
	interface UndoRedoAction {
		type: 'create_shape' | 'delete_shape' | 'edit_shape' | 'polygon_point' | 'move_shape' | 'resize_shape';
		shapeIndex?: number;
		shapeData?: any;
		oldShapeData?: any;
		pointIndex?: number;
		pointData?: any;
		timestamp?: number; // Optional since addUndoAction will add it
	}

	// Pre-clear history system for enhanced Clear Shapes recovery
	interface PreClearState {
		allShapes: any[]; // All shapes data at the time of clear
		recoveryCount: number; // Number of times this state has been recovered
		clearTimestamp: number; // When this clear operation happened
	}	let undoStack: UndoRedoAction[] = [];
	let redoStack: UndoRedoAction[] = [];
	let preClearHistory: PreClearState[] = []; // Dedicated history for clear operations
	
	const MAX_UNDO_STEPS = 50;
	const MAX_PRECLEAR_STATES = 3; // Store only last 3 cleared states
	const MAX_RECOVERY_COUNT = 3; // Allow up to 3 recoveries per clear state

	let isInitialState = true; // Flag to track if we're in initial state
	let showLabels = true; // Flag to control label visibility	// Reactive statement to ensure proper updates when showLabels changes
	$: labelVisibility = showLabels;

	let initialized = false;
	$: if ((value !== null && value.boxes && value.boxes.length === 0 && !initialized) || (!initialized && shapeCreationMode)) {
	    mode = getInitialMode(shapeCreationMode);
	    initialized = true;
	    if (canvas) {
	        canvas.style.cursor = (mode === Mode.drag) ? "default" : "crosshair";
	    }
	}

	// Reset initialized when a new image is loaded (or boxes are cleared)
	$: if (value !== null && value.boxes && value.boxes.length === 0) {
	    initialized = false;
	}

    export let imageUrl: string | null = null;
	export let interactive: boolean;
	export let boxMinSize = 10;
	export let handleSize: number;
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
	export let shapeCreationMode: string = "drag";
	
	// Scrollable functionality properties
	export let autoScroll: boolean = true;
	export let preserveResolution: boolean = true;

	if (showRemoveButton === null) {
		showRemoveButton = (disableEditBoxes);
	}

    let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
    let image = null;	let selectedBox = -1;
	let mode: Mode = Mode.drag;
	let canvasWindow: WindowViewer = new WindowViewer(draw);
	let eraser: Eraser;
	
	// Function to convert string mode to enum Mode
	function getInitialMode(modeString: string): Mode {
		switch (modeString) {
			case "box":
				return Mode.creation;
			case "freehand":
				return Mode.freehand;
			case "circle":
				return Mode.circle;
			case "polygon":
				return Mode.polygon;
			case "drag":
				return Mode.drag;
			default:
				return Mode.drag;
		}
	}		// Set initial mode based on shape_creation_mode parameter
	// When there are no existing shapes, use the specified creation mode
	// When there are existing shapes, default to drag mode unless explicitly set to a creation mode
	if (value !== null && value.boxes && value.boxes.length == 0) {
		mode = getInitialMode(shapeCreationMode);
	} else if (value !== null && value.boxes && value.boxes.length > 0) {
		// If there are existing shapes, use drag mode unless explicitly set to a creation mode
		mode = shapeCreationMode === "drag" ? Mode.drag : getInitialMode(shapeCreationMode);
	} else {
		mode = getInitialMode(shapeCreationMode);
	}

	let canvasXmin = 0;
	let canvasYmin = 0;
	let canvasXmax = 0;
	let canvasYmax = 0;
	let scaleFactor = 1.0;

	let imageWidth = 0;
	let imageHeight = 0;
	let originalImageWidth = 0;  // Store original image dimensions
	let originalImageHeight = 0;
	let isScrollableMode = false; // Track if we're in scrollable mode
	let editModalVisible = false;
	let newModalVisible = false;
	let editDefaultLabelVisible = false;
	let eraserSettingsVisible = false;
	let shapeSettingsVisible = false;
	let currentPolygon: PolygonShape | null = null; // Track current polygon being created
	let eraserSize = 10; // Default eraser size
	
	// Shape settings
	export let boxAlpha: number = 0.5;
	let shapeOpacity = boxAlpha;
	$: shapeOpacity = boxAlpha;
	let shapeStrokeWidth = 2;
	let shapeSelectedStrokeWidth = 4;

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
	}    function draw() {
		if (ctx) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.save();
			ctx.translate(canvasWindow.offsetX, canvasWindow.offsetY);
			ctx.scale(canvasWindow.scale, canvasWindow.scale);
			if (image !== null && value !== null){
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
			
			if (value !== null && value.boxes) {
				for (const box of value.boxes.slice().reverse()) {
					box.render(ctx, showLabels);
				}
			}
			
			// Render the erase path if erasing
			if (mode === Mode.erase && eraser) {
				eraser.renderErasePath(ctx);
			}
		}
	}    function selectBox(index: number) {
		selectedBox = index;
		if (value !== null && value.boxes) {
			value.boxes.forEach(box => {box.setSelected(false);});
			if (index >= 0 && index < value.boxes.length){
				value.boxes[index].setSelected(true);
			}
		}
		draw();
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
		}		if (mode === Mode.creation) {
			createBox(event);
		} else if (mode === Mode.freehand) {
			createFreehandPath(event);
		} else if (mode === Mode.circle) {
			createCircle(event);
		} else if (mode === Mode.polygon) {
			handlePolygonClick(event);
		} else if (mode === Mode.erase) {
			startErase(event);
		} else if (mode === Mode.drag) {
			clickBox(event);
		}
	}	function getActualCoordinates(event: PointerEvent, canvasElement: HTMLCanvasElement) {
		const rect = canvasElement.getBoundingClientRect();
		let mouseX = event.clientX - rect.left;
		let mouseY = event.clientY - rect.top;
		
		// In scrollable pan mode, coordinates are already relative to viewport
		// No additional adjustment needed since pan is handled by canvasWindow offset
		
		return { mouseX, mouseY };
	}

	function clickBox(event: PointerEvent) {
		console.log("clickBox function called, mode:", mode === Mode.drag ? "drag" : "creation");
		const coords = getActualCoordinates(event, canvas);
		const mouseX = coords.mouseX;
		const mouseY = coords.mouseY;
		let selectedBoxFlag = false;
		
		if (value === null || !value.boxes) {
			return;
		}
		
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
				let imageX, imageY;
				
				if (isScrollableMode) {
					// In scrollable mode, coordinates are direct since no scaling is applied
					imageX = (mouseX - canvasWindow.offsetX) / canvasWindow.scale;
					imageY = (mouseY - canvasWindow.offsetY) / canvasWindow.scale;
				} else {
					// Original coordinate calculation for non-scrollable mode
					imageX = (mouseX - canvasWindow.offsetX) / scaleFactor / canvasWindow.scale;
					imageY = (mouseY - canvasWindow.offsetY) / scaleFactor / canvasWindow.scale;
				}
				
				console.log("Click detected in drag mode:", { mouseX, mouseY, imageX, imageY, scaleFactor, "canvasWindow.scale": canvasWindow.scale, "canvasWindow.offsetX": canvasWindow.offsetX, "canvasWindow.offsetY": canvasWindow.offsetY, isScrollableMode });
				
				// Check if click is within the image bounds (using original image dimensions)
				const maxWidth = isScrollableMode ? originalImageWidth : (image?.naturalWidth || 0);
				const maxHeight = isScrollableMode ? originalImageHeight : (image?.naturalHeight || 0);
				
				if (image && imageX >= 0 && imageX <= maxWidth && imageY >= 0 && imageY <= maxHeight) {
					console.log("Dispatching select event with coordinates:", [Math.round(imageX), Math.round(imageY)]);
					// NO UNDO TRACKING FOR SELECT EVENTS - this is just for coordinate reporting
					dispatch("select", { coordinates: [Math.round(imageX), Math.round(imageY)] });
				} else {
					console.log("Click outside image bounds or no image loaded", { 
						hasImage: !!image, 
						imageX, imageY, 
						maxWidth, 
						maxHeight,
						isScrollableMode
					});
				}
			} else {
				console.log("Mode is not drag, mode:", mode);
			}
			
			// Only start canvas pan drag if we're in drag mode
			if (mode === Mode.drag) {
				canvasWindow.startDrag(event);
			}
		}
	}
	function handlePointerUp(event: PointerEvent) {
		if (mode === Mode.erase && eraser) {
			endErase();
		}
		dispatch("change");
	}
	function handlePointerMove(event: PointerEvent) {
		if (value === null) {
			return;
		}
		
		if (mode === Mode.erase && eraser) {
			continueErase(event);
			return;
		}
		
		if (mode !== Mode.drag) {
			return;
		}

		const coords = getActualCoordinates(event, canvas);
		const mouseX = coords.mouseX;
		const mouseY = coords.mouseY;

		for (const [_, box] of value.boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				canvas.style.cursor = box.resizeHandles[handleIndex].cursor;
				return;
			}
		}

		canvas.style.cursor = "default";
	}function handleKeyPress(event: KeyboardEvent) {
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
	function resetZoom() {
		// Reset scale to 1.0
		canvasWindow.scale = 1.0;
		
		// Center the image horizontally and vertically within the frame
		if (image !== null && canvas) {
			// Calculate centered position similar to resize function
			if (canvasWindow.imageRotatedWidth <= canvas.width) {
				// Center horizontally when image fits within canvas width
				const centerX = (canvas.width - imageWidth) / 2;
				canvasWindow.offsetX = centerX;
			} else {
				// For larger images, reset to left edge
				canvasWindow.offsetX = 0;
			}
			
			// Center vertically if there's extra space
			if (imageHeight < canvas.height) {
				const centerY = (canvas.height - imageHeight) / 2;
				canvasWindow.offsetY = centerY;
			} else {
				canvasWindow.offsetY = 0;
			}
		} else {
			// No image loaded, reset to origin
			canvasWindow.offsetX = 0;
			canvasWindow.offsetY = 0;
		}
		
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
			// Check pre-clear history when standard undo stack is empty
			if (preClearHistory.length === 0) {
				console.log("Cannot undo: both undo stack and pre-clear history are empty");
				return;
			}
			
			// Find the most recent pre-clear state that hasn't exceeded recovery limit
			for (let i = preClearHistory.length - 1; i >= 0; i--) {
				const preClearState = preClearHistory[i];
				if (preClearState.recoveryCount < MAX_RECOVERY_COUNT) {
					// Restore shapes from pre-clear history
					const currentShapes = value.boxes.map(shape => cloneShapeData(shape));
					value.boxes = [];
					
					for (const shapeData of preClearState.allShapes) {
						const restoredShape = restoreShapeFromData(shapeData);
						if (restoredShape) {
							value.boxes.push(restoredShape);
						}
					}
					
					// Increment recovery count
					preClearState.recoveryCount++;
					
					// If this state has reached max recoveries, remove it
					if (preClearState.recoveryCount >= MAX_RECOVERY_COUNT) {
						preClearHistory.splice(i, 1);
						console.log(`Pre-clear state exhausted and removed. Remaining states: ${preClearHistory.length}`);
					}
					
					console.log(`Restored ${value.boxes.length} shapes from pre-clear history. Recovery ${preClearState.recoveryCount}/${MAX_RECOVERY_COUNT}`);
					
					selectBox(-1);
					draw();
					dispatch("change");
					return;
				}
			}
			
			console.log("Cannot undo: no recoverable pre-clear states available");
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
					});				} else if (action.shapeIndex === -1 && action.oldShapeData) {
					// Handle multiple shapes case (like erase operations)
					console.log("Performing undo for multiple shapes operation", action);
					const currentShapeData = value.boxes.map(shape => cloneShapeData(shape));
					value.boxes = [];
					for (const shapeData of action.oldShapeData) {
						const restoredShape = restoreShapeFromData(shapeData);
						if (restoredShape) {
							value.boxes.push(restoredShape);
						}
					}
					console.log("Restored shapes:", value.boxes.length);
					redoStack.push({
						type: 'edit_shape',
						shapeIndex: -1,
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
				} else if (action.shapeIndex === -1 && action.shapeData) {
					// Handle multiple shapes case (like erase operations)
					const currentShapeData = value.boxes.map(shape => cloneShapeData(shape));
					value.boxes = [];
					for (const shapeData of action.shapeData) {
						const restoredShape = restoreShapeFromData(shapeData);
						if (restoredShape) {
							value.boxes.push(restoredShape);
						}
					}
					undoStack.push({
						type: 'edit_shape',
						shapeIndex: -1,
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
			};		} else if (shape instanceof CircleShape) {
			return {
				type: 'circle',
				label: shape.label,
				color: shape.color,
				centerX: shape._centerX,
				centerY: shape._centerY,
				radius: shape._radius
			};
		} else if (shape instanceof Box) {
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
				if (existingShape) {			// Update existing shape
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
			} else if (existingShape instanceof CircleShape) {
				// For Circle objects, update the center and radius
				existingShape._centerX = data.centerX;
				existingShape._centerY = data.centerY;
				existingShape._radius = data.radius;
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
			switch (data.type) {				case 'freehand':
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
						shapeOpacity,
						boxMinSize,
						handleSize,
						shapeStrokeWidth,
						shapeSelectedStrokeWidth,
						scaleFactor  // Pass the current scaleFactor
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
						shapeOpacity,
						boxMinSize,
						handleSize,
						shapeStrokeWidth,
						shapeSelectedStrokeWidth,
						scaleFactor  // Pass the current scaleFactor
					);					polygon._points = [...data.points];
					polygon.updateBoundingBox();
					return polygon;
							case 'circle':
					return new CircleShape(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						data.label,
						data.centerX,
						data.centerY,
						data.radius,
						data.color,
						shapeOpacity,
						boxMinSize,
						handleSize,
						shapeStrokeWidth,
						shapeSelectedStrokeWidth,
						scaleFactor  // Pass the current scaleFactor
					);
					
				case 'box':					return new Box(
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
						shapeOpacity,
						boxMinSize,
						handleSize,						shapeStrokeWidth,
						shapeSelectedStrokeWidth,
						scaleFactor  // Pass the current scaleFactor
					);
			}
		}
		return null;
	}
	function createFreehandPath(event: PointerEvent) {
		const coords = getActualCoordinates(event, canvas);
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
			shapeOpacity,
			boxMinSize,
			handleSize,
			shapeStrokeWidth,
			shapeSelectedStrokeWidth,
			scaleFactor  // Pass the current scaleFactor (1 in scrollable mode, calculated value in normal mode)
		);
		
		if (isScrollableMode) {
			// In pan-based scrollable mode, use actual coordinates without rect offsets
			freehandPath.startCreating(event, 0, 0);
		} else {
			// Original coordinate calculation for non-scrollable mode
			freehandPath.startCreating(event, rect.left, rect.top);
		}
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
		const coords = getActualCoordinates(event, canvas);
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
			shapeOpacity,
			boxMinSize,
			handleSize,
			shapeStrokeWidth,
			shapeSelectedStrokeWidth,
			scaleFactor  // Pass the current scaleFactor (1 in scrollable mode, calculated value in normal mode)
		);
		
		// Set up point addition callback for undo/redo
		polygon.onPointAdded = (point) => {
			addUndoAction({
				type: 'polygon_point',
				pointData: point
			});
		};
		
		currentPolygon = polygon; // Set the current polygon being created
		
		if (isScrollableMode) {
			// In pan-based scrollable mode, use actual coordinates without rect offsets
			polygon.startCreating(event, 0, 0);
		} else {
			// Original coordinate calculation for non-scrollable mode
			polygon.startCreating(event, rect.left, rect.top);
		}
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
		const coords = getActualCoordinates(event, canvas);
		const rect = canvas.getBoundingClientRect();
		let x, y;
		
		if (isScrollableMode) {
			// In pan-based scrollable mode, convert screen coordinates to image coordinates
			// Account for the current pan position
			x = (coords.mouseX - canvasWindow.offsetX) / canvasWindow.scale;
			y = (coords.mouseY - canvasWindow.offsetY) / canvasWindow.scale;
		} else {
			// Original coordinate calculation for non-scrollable mode
			x = (coords.mouseX - canvasWindow.offsetX) / scaleFactor / canvasWindow.scale;
			y = (coords.mouseY - canvasWindow.offsetY) / scaleFactor / canvasWindow.scale;
		}
		
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
			shapeOpacity,
			boxMinSize,
			handleSize,
			shapeStrokeWidth,
			shapeSelectedStrokeWidth,
			scaleFactor  // Pass the current scaleFactor (1 in scrollable mode, calculated value in normal mode)
		);
		// For pan-based scrollable mode, we need to pass the correct canvas coordinates
		if (isScrollableMode) {
			box.startCreating(event, coords.mouseX, coords.mouseY);
		} else {
			box.startCreating(event, rect.left, rect.top);
		}
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
	}
	function createCircle(event: PointerEvent) {
		const coords = getActualCoordinates(event, canvas);
		const rect = canvas.getBoundingClientRect();
		let x, y;
		
		if (isScrollableMode) {
			// In scrollable mode, coordinates are direct since no scaling is applied
			x = (coords.mouseX - canvasWindow.offsetX) / canvasWindow.scale;
			y = (coords.mouseY - canvasWindow.offsetY) / canvasWindow.scale;
		} else {
			// Original coordinate calculation for non-scrollable mode
			x = (coords.mouseX - canvasWindow.offsetX) / canvasWindow.scale;
			y = (coords.mouseY - canvasWindow.offsetY) / canvasWindow.scale;
		}
		
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
		
		let circle = new CircleShape(
			draw,
			onBoxFinishCreation,
			canvasWindow,
			canvasXmin,
			canvasYmin,
			canvasXmax,
			canvasYmax,
			"",
			x,
			y,			0, // Initial radius
			color,
			shapeOpacity,
			boxMinSize,
			handleSize,
			shapeStrokeWidth,
			shapeSelectedStrokeWidth,
			scaleFactor  // Pass the current scaleFactor (1 in scrollable mode, calculated value in normal mode)
		);
		circle.startCreating(event);
		if (singleBox) {
			value.boxes = [circle];
		} else {
			value.boxes = [circle, ...value.boxes];
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

	function startErase(event: PointerEvent) {
		if (!eraser) {
			eraser = new Eraser(canvasWindow, scaleFactor);
			eraser.setBrushSize(eraserSize);
		}
		eraser.setScaleFactor(scaleFactor);
		
		const rect = canvas.getBoundingClientRect();
		eraser.startErase(event, rect);
		draw(); // Redraw to show the erase path
	}

	function continueErase(event: PointerEvent) {
		if (!eraser) return;
		
		const rect = canvas.getBoundingClientRect();
		eraser.continueErase(event, rect);
		draw(); // Redraw to show the erase path
	}

	function endErase() {
		if (!eraser) return;
		
		const erasePath = eraser.endErase();
		if (erasePath.length === 0) {
			// Automatically switch back to drag mode after erase operation
			setDragMode();
			return;
		}
		
		// Store original shapes for undo
		const originalShapes = [...value.boxes];
		const shapesToRemove: number[] = [];
		const shapesToAdd: (Box | CircleShape | FreehandPath | PolygonShape)[] = [];
				// Apply erase to each shape
		for (let i = 0; i < value.boxes.length; i++) {
			const shape = value.boxes[i];
			const resultShapes = eraser.eraseFromShape(shape as (Box | CircleShape | FreehandPath | PolygonShape), erasePath);
			
			if (resultShapes.length === 0) {
				// Shape completely erased
				shapesToRemove.push(i);
			} else if (resultShapes.length === 1 && resultShapes[0] === shape) {
				// Shape unchanged
				continue;
			} else {
				// Shape modified or split
				shapesToRemove.push(i);
				shapesToAdd.push(...resultShapes);
			}
		}
				// Apply changes if any shapes were affected
		if (shapesToRemove.length > 0 || shapesToAdd.length > 0) {
			// Remove shapes in reverse order to maintain indices
			for (let i = shapesToRemove.length - 1; i >= 0; i--) {
				value.boxes.splice(shapesToRemove[i], 1);
			}
			
			// Add new shapes
			value.boxes.push(...shapesToAdd);
			
			// Add undo action for the erase operation with complete data
			addUndoAction({
				type: 'edit_shape',
				shapeIndex: -1, // Special case for multiple shapes
				oldShapeData: originalShapes.map(shape => cloneShapeData(shape)),
				shapeData: value.boxes.map(shape => cloneShapeData(shape))
			});
			
			selectBox(-1);
			dispatch("change");
		}
		
		draw();
				// Automatically switch back to drag mode after erase operation
		setDragMode();
	}

	function openEraserSettings() {
		eraserSettingsVisible = true;
	}

	function handleEraserSettingsChange(event: CustomEvent<{ size: number }>) {
		eraserSize = event.detail.size;
		if (eraser) {
			eraser.setBrushSize(eraserSize);
		}
	}
	function handleEraserSettingsClose() {
		eraserSettingsVisible = false;
	}
	
	function openShapeSettings() {
		shapeSettingsVisible = true;
	}

	function handleShapeSettingsChange(event: CustomEvent<{ opacity: number; strokeWidth: number; selectedStrokeWidth: number; }>) {
		shapeOpacity = event.detail.opacity;
		shapeStrokeWidth = event.detail.strokeWidth;
		shapeSelectedStrokeWidth = event.detail.selectedStrokeWidth;
		
		// Update all existing shapes with new settings
		updateAllShapesSettings();
		draw();
	}

	function handleShapeSettingsClose() {
		shapeSettingsVisible = false;
	}
	function updateAllShapesSettings() {
		// Update all shapes in the boxes array
		for (let shape of value.boxes) {
			// Cast to any to access shape-specific properties
			const s = shape as any;
			if (s.alpha !== undefined) s.alpha = shapeOpacity;
			if (s.thickness !== undefined) s.thickness = shapeStrokeWidth;
			if (s.selectedThickness !== undefined) s.selectedThickness = shapeSelectedStrokeWidth;
		}
	}
	function setCreateMode() {
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

	function setCircleMode() {
		mode = Mode.circle;
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

	function setEraseMode() {
		mode = Mode.erase;
		canvas.style.cursor = "crosshair";
		// Reset polygon state when switching modes
		currentPolygon = null;
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
		
		// Check if we clicked on a shape for editing
		const coords = getActualCoordinates(event as any, canvas);
		const mouseX = coords.mouseX;
		const mouseY = coords.mouseY;
		let clickedOnShape = false;
		
		// Check if click is on any shape
		for (const [i, box] of value.boxes.entries()) {
			if (box.isPointInsideBox(mouseX, mouseY)) {
				clickedOnShape = true;
				selectBox(i);
				onEditBox();
				break;
			}
		}
		
		// If no shape was clicked, reset zoom
		if (!clickedOnShape) {
			resetZoom();
		}
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
		editModalVisible = false;		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let opacity = detail.opacity;
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
				if (opacity !== undefined) {
					box.alpha = opacity;
				}
				
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
			dispatch("change");		}
	}
	function clearAllShapes() {
		if (value.boxes.length === 0) return;
		
		// Store all shapes in pre-clear history for enhanced recovery
		const allShapes = value.boxes.map(shape => cloneShapeData(shape));
		
		// Add to pre-clear history with FIFO eviction
		preClearHistory.push({
			allShapes: allShapes,
			recoveryCount: 0,
			clearTimestamp: Date.now()
		});
		
		// FIFO eviction: remove oldest states if we exceed the limit
		while (preClearHistory.length > MAX_PRECLEAR_STATES) {
			preClearHistory.shift();
		}
		
		// Clear all shapes
		value.boxes = [];
		selectBox(-1);
		currentPolygon = null; // Reset polygon state
		
		if (singleBox) {
			setCreateMode();
		}
		
		draw();
		dispatch("change");
		
		console.log(`Cleared ${allShapes.length} shapes. Pre-clear history size: ${preClearHistory.length}`);
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
				// Store original image dimensions
				originalImageWidth = canvasWindow.imageRotatedWidth;
				originalImageHeight = canvasWindow.imageRotatedHeight;
				
				// Check if we should use scrollable mode
				const shouldScroll = value?.scrollable_mode || (
					autoScroll && preserveResolution && (
						canvasWindow.imageRotatedWidth > canvas.clientWidth ||
						canvasWindow.imageRotatedHeight > (typeof height === 'number' ? height : 800)
					)
				);
				
				isScrollableMode = shouldScroll;
				
				if (isScrollableMode && preserveResolution) {
					// Scrollable mode: maintain original image resolution within fixed container
					imageWidth = canvasWindow.imageRotatedWidth;
					imageHeight = canvasWindow.imageRotatedHeight;
					
					// Keep container height fixed - don't expand canvas
					const containerHeight = typeof height === 'number' ? height : 800;
					canvas.height = containerHeight;
					
					// Set canvas bounds to container dimensions for clipping
					canvasXmin = 0;
					canvasYmin = 0;
					canvasXmax = canvas.width;
					canvasYmax = canvas.height;
					
					// No scaling in scrollable mode - full resolution
					scaleFactor = 1;
					
					// Only initialize pan offset if not already set (preserve current pan position)
					if (canvasWindow.offsetX === undefined || canvasWindow.offsetY === undefined) {
						// Initialize pan offset to center the image
						canvasWindow.offsetX = (canvas.width - imageWidth) / 2;
						canvasWindow.offsetY = (canvas.height - imageHeight) / 2;
						
						// Ensure we don't start with image positioned outside viewport
						if (imageWidth > canvas.width) {
							canvasWindow.offsetX = 0;
						}
						if (imageHeight > canvas.height) {
							canvasWindow.offsetY = 0;
						}
					}
				} else {
					// Original scaling behavior for non-scrollable mode
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
				}

				canvasWindow.imageWidth = imageWidth;
				canvasWindow.imageHeight = imageHeight;

			} else {
				canvasXmin = 0;
				canvasYmin = 0;
				canvasXmax = canvas.width;
				canvasYmax = canvas.height;
				canvas.height = canvas.clientHeight;
				isScrollableMode = false;
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
	const observer = new ResizeObserver(resize);
		function parseInputBoxes() {
		if (value === null || !value.boxes) {
			return;
		}
		for (let i = 0; i < value.boxes.length; i++) {
			let box = value.boxes[i];
			if (!(box instanceof Box) && !(box instanceof FreehandPath) && !(box instanceof PolygonShape) && !(box instanceof CircleShape)) {
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
						shapeOpacity,
						boxMinSize,
						handleSize,
						shapeStrokeWidth,
						shapeSelectedStrokeWidth,
						scaleFactor  // Pass the current scaleFactor
					);
					freehandPath._points = box["points"];
					freehandPath.updateBoundingBox();
					box = freehandPath;				} else if (box.hasOwnProperty("type") && box["type"] === "circle" && box.hasOwnProperty("centerX") && box.hasOwnProperty("centerY") && box.hasOwnProperty("radius")) {
					// Handle circle shapes
					let circle = new CircleShape(
						draw,
						onBoxFinishCreation,
						canvasWindow,
						canvasXmin,
						canvasYmin,
						canvasXmax,
						canvasYmax,
						label,
						box["centerX"],
						box["centerY"],
						box["radius"],
						color,
						shapeOpacity,
						boxMinSize,
						handleSize,
						shapeStrokeWidth,
						shapeSelectedStrokeWidth,
						scaleFactor  // Pass the current scaleFactor
					);
					box = circle;				} else if (box.hasOwnProperty("type") && box["type"] === "polygon" && box.hasOwnProperty("points")) {
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
						shapeOpacity,
						boxMinSize,
						handleSize,
						shapeStrokeWidth,
						shapeSelectedStrokeWidth,
						scaleFactor  // Pass the current scaleFactor
					);
					polygon._points = box["points"];
					polygon.updateBoundingBox();
					box = polygon;				} else {
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
						shapeOpacity,
						boxMinSize,
						handleSize,
						shapeStrokeWidth,
						shapeSelectedStrokeWidth
					);
				}
				value.boxes[i] = box;
			}
		}
	}
	$: {
		value;
		if (value !== null) {
			canvasWindow.orientation = value.orientation;
		}
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
		} else {
			// Clear the image when imageUrl is null
			image = null;
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
	class:scrollable={isScrollableMode}
	tabindex="-1"
	on:focusin={handleCanvasFocus}
	on:focusout={handleCanvasBlur}
	style="height: {height}; width: {width};"
>
	<canvas
		bind:this={canvas}
		tabindex="0"
		on:pointerdown={handlePointerDown}
		on:pointerup={handlePointerUp}
		on:pointermove={handlesCursor ? handlePointerMove : null}
		on:dblclick={handleDoubleClick}
		on:wheel={handleMouseWheel}
		class="canvas-annotator"
		class:scrollable-canvas={isScrollableMode}
	></canvas>
</div>

{#if interactive}
	<span class="canvas-control">
		<div class="tool-group">
			<button
				class="icon tool-button"
				class:selected={mode === Mode.creation}
				aria-label="Create box"
				on:click={() => setCreateMode()}
			>
				<BoundingBox/>
			</button>
			<span class="tool-label">Box</span>
		</div>
		<div class="tool-group">
			<button
				class="icon tool-button"
				class:selected={mode === Mode.freehand}
				aria-label="Freehand drawing"
				on:click={() => setFreehandMode()}
			>
				<Freehand/>
			</button>
			<span class="tool-label">Freehand</span>
		</div>

		<div class="tool-group">
			<button
				class="icon tool-button"
				class:selected={mode === Mode.circle}
				aria-label="Circle drawing"
				on:click={() => setCircleMode()}
			>
				<Circle/>
			</button>
			<span class="tool-label">Circle</span>
		</div>

		<div class="tool-group">
			<button
				class="icon tool-button"
				class:selected={mode === Mode.polygon}
				aria-label="Polygon drawing (click points, Space/start point to finish)"
				on:click={() => setPolygonMode()}
			>
				<Polygon/>
			</button>
			<span class="tool-label">Polygon</span>
		</div>
		<div class="tool-group eraser-group">
			<div class="eraser-buttons">
				<button
					class="icon tool-button"
					class:selected={mode === Mode.erase}
					aria-label="Erase areas from shapes"
					on:click={() => setEraseMode()}
				>
					<Erase/>
				</button>
				<button
					class="icon dropdown-button"
					aria-label="Eraser settings"
					on:click={openEraserSettings}
				>
					<DropdownArrow/>
				</button>
			</div>
			<span class="tool-label">Eraser</span>
		</div>

		<div class="tool-group">
			<button
				class="icon tool-button"
				class:selected={mode === Mode.drag}
				aria-label="Edit boxes"
				on:click={() => setDragMode()}
			>
				<Hand/>
			</button>
			<span class="tool-label">Move</span>
		</div>

		{#if showRemoveButton}
			<div class="tool-group">
				<button
					class="icon tool-button"
					aria-label="Remove boxes"
					on:click={() => onDeleteBox()}
				>
					<Trash/>
				</button>
				<span class="tool-label">Delete</span>
			</div>
		{/if}

		{#if !disableEditBoxes && labelDetailLock}
			<div class="tool-group">
				<button
					class="icon tool-button"
					aria-label="Edit label"
					on:click={() => editDefaultLabelVisible = true}
				>
					<Label/>
				</button>
				<span class="tool-label">Label</span>
			</div>
		{/if}

		<div class="tool-group">
			<button
				class="icon tool-button"
				class:disabled={undoStack.length === 0}
				aria-label="Undo (Ctrl+Z)"
				on:click={() => performUndo()}
			>
				<UndoIcon/>
			</button>
			<span class="tool-label">Undo</span>
		</div>
		<div class="tool-group">
			<button
				class="icon tool-button"
				class:disabled={redoStack.length === 0}
				aria-label="Redo (Ctrl+Y)"
				on:click={() => performRedo()}
			>
				<RedoIcon/>
			</button>
			<span class="tool-label">Redo</span>		</div>		<div class="tool-group">
			<div class="button-group">
				<button
					class="icon tool-button"
					class:selected={labelVisibility}
					aria-label="Show/Hide labels"
					on:click={() => { 
						showLabels = !showLabels; 
						draw(); 
					}}
				>
					<Bulb selected={labelVisibility} />
				</button>
				<button
					class="icon dropdown-button"
					aria-label="Shape settings"
					on:click={openShapeSettings}
				>
					<DropdownArrow/>
				</button>
			</div>
			<span class="tool-label">Labels</span>
		</div>
		<div class="tool-group">
			<button
				class="icon tool-button"
				aria-label="Clear Shapes"
				on:click={() => clearAllShapes()}
			>
				<ClearShapes/>
			</button>
			<span class="tool-label">Clear</span>
		</div>
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
		opacity={selectedBox >= 0 && selectedBox < value.boxes.length ? value.boxes[selectedBox].alpha : 0.5}
		showOpacity={true}
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

<EraserSettingsModal
	bind:visible={eraserSettingsVisible}
	bind:eraserSize={eraserSize}
	on:change={handleEraserSettingsChange}
	on:close={handleEraserSettingsClose}
/>

<ShapeSettingsModal
	bind:visible={shapeSettingsVisible}
	bind:opacity={shapeOpacity}
	bind:strokeWidth={shapeStrokeWidth}
	bind:selectedStrokeWidth={shapeSelectedStrokeWidth}
	on:change={handleShapeSettingsChange}
	on:close={handleShapeSettingsClose}
/>

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
		align-items: flex-start;
		justify-content: center;
		border-top: 1px solid var(--border-color-primary);
		width: 95%;
		bottom: 0;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--size-2);
		padding: var(--spacing-md) 0;
		gap: var(--spacing-lg);
	}

	.tool-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-xs);
		min-width: 50px;
	}
	.eraser-group {
		position: relative;
	}
	.eraser-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
	}

	.button-group {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
	}

	.eraser-group .tool-button,
	.eraser-group .dropdown-button,
	.button-group .tool-button,
	.button-group .dropdown-button {
		margin: 0;
	}

	.eraser-group .dropdown-button,
	.button-group .dropdown-button {
		width: 16px;
		height: 16px;
		padding: 2px;
	}

	.tool-button,
	.dropdown-button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: none;
		cursor: pointer;
		transition: all 0.15s ease;
	}	.icon.tool-button,
	.icon.dropdown-button {
		width: 22px;
		height: 22px;
		margin: 0;
		padding: var(--spacing-xs);
		color: var(--neutral-400);
		border-radius: var(--radius-md);
	}
		.icon.tool-button:not(.disabled):hover,
	.icon.tool-button:not(.disabled):focus,
	.icon.dropdown-button:hover,
	.icon.dropdown-button:focus {
		color: var(--color-accent);
		background-color: var(--background-fill-secondary);
	}
		.icon.tool-button.disabled {
		color: var(--neutral-300);
		cursor: default;
		opacity: 0.5;
	}
	
	.icon.tool-button.disabled:hover,
	.icon.tool-button.disabled:focus {
		color: var(--neutral-300);
		background-color: transparent;
		cursor: default;
		opacity: 0.5;
	}
	
	.tool-button.selected {
		color: var(--color-accent);
		background-color: var(--color-accent-soft);
	}	.tool-label {
		font-size: var(--text-xs);
		color: var(--body-text-color-subdued);
		font-weight: var(--weight-medium);
		text-align: center;
		line-height: 1;
		user-select: none;
		white-space: nowrap;
	}

	.canvas-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.canvas-container:focus {
    	outline: none;
	}
	
	/* Scrollable pan mode styles */
	.canvas-container.scrollable {
		justify-content: center;
		align-items: center;
		/* No overflow scrollbars - using pan navigation instead */
		overflow: hidden;
	}
	
	.canvas-annotator.scrollable-canvas {
		max-width: none !important;
		max-height: none !important;
	}
</style>
