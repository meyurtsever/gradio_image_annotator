<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let imageWidth: number;
	export let imageHeight: number;
	export let canvasWidth: number;
	export let canvasHeight: number;
	export let offsetX: number;
	export let offsetY: number;
	export let scale: number;
	export let image: HTMLImageElement | null = null;

	const dispatch = createEventDispatcher<{
		navigate: { x: number; y: number };
	}>();

	let navigatorCanvas: HTMLCanvasElement;
	let navigatorCtx: CanvasRenderingContext2D;
	let isDragging = false;

	// Dynamic navigator dimensions based on image aspect ratio
	const MAX_NAVIGATOR_SIZE = 180;
	const MIN_NAVIGATOR_SIZE = 80;
	const NAVIGATOR_PADDING = 5;
	
	let navigatorWidth = MAX_NAVIGATOR_SIZE;
	let navigatorHeight = MAX_NAVIGATOR_SIZE;
	
	// Calculate optimal navigator size based on image aspect ratio
	$: if (imageWidth && imageHeight) {
		const aspectRatio = imageWidth / imageHeight;
		
		if (aspectRatio > 1) {
			// Landscape image
			navigatorWidth = Math.min(MAX_NAVIGATOR_SIZE, Math.max(MIN_NAVIGATOR_SIZE, MAX_NAVIGATOR_SIZE));
			navigatorHeight = Math.min(MAX_NAVIGATOR_SIZE, Math.max(MIN_NAVIGATOR_SIZE, navigatorWidth / aspectRatio));
		} else {
			// Portrait or square image
			navigatorHeight = Math.min(MAX_NAVIGATOR_SIZE, Math.max(MIN_NAVIGATOR_SIZE, MAX_NAVIGATOR_SIZE));
			navigatorWidth = Math.min(MAX_NAVIGATOR_SIZE, Math.max(MIN_NAVIGATOR_SIZE, navigatorHeight * aspectRatio));
		}
		
		// Ensure minimum size
		navigatorWidth = Math.max(MIN_NAVIGATOR_SIZE, navigatorWidth);
		navigatorHeight = Math.max(MIN_NAVIGATOR_SIZE, navigatorHeight);
	}

	// Single reactive statement to redraw on ANY change - ensures real-time updates during pan/drag
	$: if (navigatorCanvas && navigatorCtx && imageWidth && imageHeight) {
		// List all dependencies to ensure reactivity triggers on any change
		// This ensures real-time updates during drag/pan operations
		const _ = [offsetX, offsetY, scale, canvasWidth, canvasHeight, image, navigatorWidth, navigatorHeight];
		drawNavigator();
	}

	function drawNavigator() {
		if (!navigatorCtx || !imageWidth || !imageHeight) return;

		const ctx = navigatorCtx;
		ctx.clearRect(0, 0, navigatorWidth, navigatorHeight);

		// Calculate scale to fit image in navigator
		const scaleX = (navigatorWidth - 2 * NAVIGATOR_PADDING) / imageWidth;
		const scaleY = (navigatorHeight - 2 * NAVIGATOR_PADDING) / imageHeight;
		const navScale = Math.min(scaleX, scaleY);

		const scaledWidth = imageWidth * navScale;
		const scaledHeight = imageHeight * navScale;
		const offsetNavX = (navigatorWidth - scaledWidth) / 2;
		const offsetNavY = (navigatorHeight - scaledHeight) / 2;

		// Draw the actual image if available - preserving aspect ratio
		if (image && image.complete) {
			ctx.save();
			// Draw image centered and scaled to fit while preserving aspect ratio
			ctx.drawImage(
				image, 
				offsetNavX, 
				offsetNavY, 
				scaledWidth, 
				scaledHeight
			);
			ctx.restore();
		} else {
			// Fallback: Draw image boundary (light gray background)
			ctx.fillStyle = "rgba(200, 200, 200, 0.3)";
			ctx.fillRect(offsetNavX, offsetNavY, scaledWidth, scaledHeight);
		}
		
		// Draw border around image
		ctx.strokeStyle = "rgba(150, 150, 150, 0.8)";
		ctx.lineWidth = 1;
		ctx.strokeRect(offsetNavX, offsetNavY, scaledWidth, scaledHeight);

		// Calculate visible area in image coordinates
		const visibleWidth = canvasWidth / scale;
		const visibleHeight = canvasHeight / scale;
		const visibleX = -offsetX / scale;
		const visibleY = -offsetY / scale;

		// Draw viewport rectangle
		const viewportX = offsetNavX + visibleX * navScale;
		const viewportY = offsetNavY + visibleY * navScale;
		const viewportWidth = visibleWidth * navScale;
		const viewportHeight = visibleHeight * navScale;

		// Fill viewport with semi-transparent color
		ctx.fillStyle = "rgba(59, 130, 246, 0.3)"; // Blue with transparency
		ctx.fillRect(viewportX, viewportY, viewportWidth, viewportHeight);

		// Stroke viewport with solid color
		ctx.strokeStyle = "rgba(59, 130, 246, 1)"; // Solid blue
		ctx.lineWidth = 2;
		ctx.strokeRect(viewportX, viewportY, viewportWidth, viewportHeight);
	}

	function handleNavigatorClick(event: MouseEvent) {
		navigateToPosition(event);
	}

	function handleNavigatorMouseDown(event: MouseEvent) {
		isDragging = true;
		navigateToPosition(event);
	}

	function handleNavigatorMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		navigateToPosition(event);
	}

	function handleNavigatorMouseUp() {
		isDragging = false;
	}

	function navigateToPosition(event: MouseEvent) {
		const rect = navigatorCanvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		// Calculate scale to fit image in navigator
		const scaleX = (navigatorWidth - 2 * NAVIGATOR_PADDING) / imageWidth;
		const scaleY = (navigatorHeight - 2 * NAVIGATOR_PADDING) / imageHeight;
		const navScale = Math.min(scaleX, scaleY);

		const scaledWidth = imageWidth * navScale;
		const scaledHeight = imageHeight * navScale;
		const offsetNavX = (navigatorWidth - scaledWidth) / 2;
		const offsetNavY = (navigatorHeight - scaledHeight) / 2;

		// Convert click position to image coordinates
		const imageX = (x - offsetNavX) / navScale;
		const imageY = (y - offsetNavY) / navScale;

		// Calculate the center point of the viewport
		const visibleWidth = canvasWidth / scale;
		const visibleHeight = canvasHeight / scale;

		// Calculate new offset to center the clicked position
		const newOffsetX = -(imageX - visibleWidth / 2) * scale;
		const newOffsetY = -(imageY - visibleHeight / 2) * scale;

		// Dispatch navigate event
		dispatch("navigate", { x: newOffsetX, y: newOffsetY });
	}

	function initNavigator() {
		if (navigatorCanvas) {
			navigatorCtx = navigatorCanvas.getContext("2d");
			drawNavigator();
		}
	}

	$: if (navigatorCanvas) {
		initNavigator();
	}
</script>

<div class="position-navigator" role="navigation" aria-label="Image position navigator" on:mouseleave={handleNavigatorMouseUp}>
	<canvas
		bind:this={navigatorCanvas}
		width={navigatorWidth}
		height={navigatorHeight}
		on:mousedown={handleNavigatorMouseDown}
		on:mousemove={handleNavigatorMouseMove}
		on:mouseup={handleNavigatorMouseUp}
		on:click={handleNavigatorClick}
	/>
</div>

<style>
	.position-navigator {
		position: absolute;
		bottom: 65px;
		right: 10px;
		background: rgba(255, 255, 255, 0.95);
		border: 2px solid rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		cursor: pointer;
		z-index: 1000;
		user-select: none;
		max-height: calc(100% - 75px);
		overflow: hidden;
	}

	canvas {
		display: block;
		cursor: crosshair;
	}

	.position-navigator:hover {
		border-color: rgba(59, 130, 246, 0.5);
	}
</style>
