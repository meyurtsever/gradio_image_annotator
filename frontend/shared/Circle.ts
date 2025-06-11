import WindowViewer from "./WindowViewer";
import { setAlpha } from "./utils";

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export default class Circle {
    label: string;
    centerX: number;
    centerY: number;
    radius: number;
    _centerX: number;
    _centerY: number;
    _radius: number;
    // Bounding box properties for consistent label positioning
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
    color: string;
    alpha: number;
    isDragging: boolean;
    isResizing: boolean;
    isSelected: boolean;
    isCreating: boolean;
    offsetMouseX: number;
    offsetMouseY: number;
    resizeHandleSize: number;
    resizingHandleIndex: number;
    minSize: number;
    renderCallBack: () => void;
    onFinishCreation: () => void;
    
    // Undo/redo support for drag operations
    onMoveStart?: () => void;
    onMoveEnd?: () => void;
    initialStateForUndo?: any;
    
    canvasXmin: number;
    canvasYmin: number;
    canvasXmax: number;
    canvasYmax: number;
    scaleFactor: number;
    thickness: number;
    selectedThickness: number;
    resizeHandles: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
        cursor: string;
    }[];
    canvasWindow: WindowViewer;

    constructor(
        renderCallBack: () => void,
        onFinishCreation: () => void,
        canvasWindow: WindowViewer,
        canvasXmin: number,
        canvasYmin: number,
        canvasXmax: number,
        canvasYmax: number,
        label: string,
        centerX: number,
        centerY: number,
        radius: number,
        color: string = "rgb(255, 255, 255)",
        alpha: number = 0.5,
        minSize: number = 25,
        handleSize: number = 8,
        thickness: number = 2,
        selectedThickness: number = 4,
        scaleFactor: number = 1,
    ) {
        this.renderCallBack = renderCallBack;
        this.onFinishCreation = onFinishCreation;
        this.canvasWindow = canvasWindow;
        this.canvasXmin = canvasXmin;
        this.canvasYmin = canvasYmin;
        this.canvasXmax = canvasXmax;
        this.canvasYmax = canvasYmax;        this.scaleFactor = scaleFactor;
        this.label = label;
        this.isDragging = false;
        this.isCreating = false;
        this._centerX = centerX;
        this._centerY = centerY;
        this._radius = radius;
        this.centerX = this._centerX * this.canvasWindow.scale;
        this.centerY = this._centerY * this.canvasWindow.scale;
        this.radius = this._radius * this.canvasWindow.scale;
        this.isResizing = false;
        this.isSelected = false;
        this.offsetMouseX = 0;
        this.offsetMouseY = 0;
        this.resizeHandleSize = handleSize;
        this.thickness = thickness;
        this.selectedThickness = selectedThickness;
        this.resizingHandleIndex = -1;
        this.minSize = minSize;
        this.color = color;
        this.alpha = alpha;
        
        // Initialize bounding box properties
        this.applyUserScale();
        this.updateHandles();
    }

    toJSON() {
        return {
            type: "circle",
            label: this.label,
            centerX: this._centerX,
            centerY: this._centerY,
            radius: this._radius,
            color: this.color,
            scaleFactor: this.scaleFactor,
        };
    }

    setSelected(selected: boolean): void {
        this.isSelected = selected;
    }

    setScaleFactor(scaleFactor: number) {
        let scale = scaleFactor / this.scaleFactor;
        this._centerX = Math.round(this._centerX * scale);
        this._centerY = Math.round(this._centerY * scale);
        this._radius = Math.round(this._radius * scale);
        this.applyUserScale();
        this.scaleFactor = scaleFactor;
    }    updateHandles(): void {
        // The handles will be calculated dynamically during rendering and hit-testing
        // This method now just ensures the handle array exists
        if (!this.resizeHandles) {
            this.resizeHandles = [];
        }
    }

    getHandlePositions(): {xmin: number, ymin: number, xmax: number, ymax: number, cursor: string}[] {
        const halfSize = this.resizeHandleSize / 2;
        // Convert to canvas coordinates for handles
        const canvasX = this._centerX * this.canvasWindow.scale + this.canvasWindow.offsetX;
        const canvasY = this._centerY * this.canvasWindow.scale + this.canvasWindow.offsetY;
        const canvasRadius = this._radius * this.canvasWindow.scale;
        
        return [
            {
                // Top handle
                xmin: canvasX - halfSize,
                ymin: canvasY - canvasRadius - halfSize,
                xmax: canvasX + halfSize,
                ymax: canvasY - canvasRadius + halfSize,
                cursor: "ns-resize",
            },
            {
                // Right handle
                xmin: canvasX + canvasRadius - halfSize,
                ymin: canvasY - halfSize,
                xmax: canvasX + canvasRadius + halfSize,
                ymax: canvasY + halfSize,
                cursor: "ew-resize",
            },
            {
                // Bottom handle
                xmin: canvasX - halfSize,
                ymin: canvasY + canvasRadius - halfSize,
                xmax: canvasX + halfSize,
                ymax: canvasY + canvasRadius + halfSize,
                cursor: "ns-resize",
            },
            {
                // Left handle
                xmin: canvasX - canvasRadius - halfSize,
                ymin: canvasY - halfSize,
                xmax: canvasX - canvasRadius + halfSize,
                ymax: canvasY + halfSize,
                cursor: "ew-resize",
            },
        ];
    }    applyUserScale(): void {
        // Update the legacy properties for backward compatibility
        this.centerX = this._centerX * this.canvasWindow.scale;
        this.centerY = this._centerY * this.canvasWindow.scale;
        this.radius = this._radius * this.canvasWindow.scale;
        
        // Update bounding box properties for consistent label positioning
        this.xmin = (this._centerX - this._radius) * this.canvasWindow.scale;
        this.ymin = (this._centerY - this._radius) * this.canvasWindow.scale;
        this.xmax = (this._centerX + this._radius) * this.canvasWindow.scale;
        this.ymax = (this._centerY + this._radius) * this.canvasWindow.scale;
        // Handles are calculated dynamically, no need to update them here
    }

    getArea(): number {
        return Math.PI * this._radius * this._radius;
    }

    toCanvasCoordinates(x: number, y: number): [number, number] {
        // Convert from bounding box coordinates to canvas coordinates (same pattern as other shapes)
        return [
            x + this.canvasXmin,
            y + this.canvasYmin
        ];
    }

    toBoxCoordinates(x: number, y: number): [number, number] {
        // Convert from canvas coordinates to image coordinates
        return [
            (x - this.canvasWindow.offsetX) / this.canvasWindow.scale,
            (y - this.canvasWindow.offsetY) / this.canvasWindow.scale,
        ];
    }

    updateOffset(): void {
        this.canvasXmin = this.canvasWindow.offsetX;
        this.canvasYmin = this.canvasWindow.offsetY;
        this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale;
        this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale;
        this.applyUserScale();
    }    render(ctx: CanvasRenderingContext2D, showLabels: boolean = true): void {
        if (this.radius <= 0) return;

        this.updateOffset();

        // Convert circle center from image coordinates to canvas coordinates
        const canvasX = this._centerX * this.canvasWindow.scale + this.canvasWindow.offsetX;
        const canvasY = this._centerY * this.canvasWindow.scale + this.canvasWindow.offsetY;
        const canvasRadius = this._radius * this.canvasWindow.scale;

        // Draw the circle
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, canvasRadius, 0, 2 * Math.PI);
        
        // Fill with transparent color
        ctx.fillStyle = setAlpha(this.color, this.alpha);
        ctx.fill();

        // Stroke
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.isSelected ? this.selectedThickness : this.thickness;
        ctx.stroke();

        // Draw resize handles if selected
        if (this.isSelected) {
            ctx.fillStyle = this.color;
            const handles = this.getHandlePositions();
            for (const handle of handles) {
                ctx.fillRect(
                    handle.xmin,
                    handle.ymin,
                    handle.xmax - handle.xmin,
                    handle.ymax - handle.ymin
                );
            }
        }        // Draw label if available and showLabels is true
        if (showLabels && this.label !== null && this.label.trim() !== "") {
            if (this.isSelected) {
                ctx.font = "bold 14px Arial";
            } else {
                ctx.font = "12px Arial";
            }
            const labelWidth = ctx.measureText(this.label).width + 10;
            const labelHeight = 20;
            let labelX = this.xmin;
            let labelY = this.ymin - labelHeight;
            ctx.fillStyle = "white";
            [labelX, labelY] = this.toCanvasCoordinates(labelX, labelY);
            ctx.fillRect(labelX, labelY, labelWidth, labelHeight);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            ctx.strokeRect(labelX, labelY, labelWidth, labelHeight);
            ctx.fillStyle = "black";
            ctx.fillText(this.label, labelX + 5, labelY + 15);
        }
    }    startDrag(event: MouseEvent): void {
        this.isDragging = true;
        
        // Get canvas-relative coordinates first
        const canvas = document.querySelector('canvas');
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            const canvasX = event.clientX - rect.left;
            const canvasY = event.clientY - rect.top;
            
            // Convert canvas coordinates to image coordinates
            const [imageX, imageY] = this.toBoxCoordinates(canvasX, canvasY);
            this.offsetMouseX = imageX - this._centerX;
            this.offsetMouseY = imageY - this._centerY;
        }
        
        // Call move start callback for undo/redo
        if (this.onMoveStart) {
            this.onMoveStart();
        }
        
        document.addEventListener("pointermove", this.handleDrag);
        document.addEventListener("pointerup", this.stopDrag);
    }

    stopDrag = (): void => {
        this.isDragging = false;
        document.removeEventListener("pointermove", this.handleDrag);
        document.removeEventListener("pointerup", this.stopDrag);
        
        // Call move end callback for undo/redo
        if (this.onMoveEnd) {
            this.onMoveEnd();
        }
    };    handleDrag = (event: MouseEvent): void => {
        if (this.isDragging) {
            // Get canvas-relative coordinates first
            const canvas = document.querySelector('canvas');
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                const canvasX = event.clientX - rect.left;
                const canvasY = event.clientY - rect.top;
                
                // Convert canvas coordinates to image coordinates
                const [imageX, imageY] = this.toBoxCoordinates(canvasX, canvasY);
                let newCenterX = imageX - this.offsetMouseX;
                let newCenterY = imageY - this.offsetMouseY;

                // Get image bounds for clamping
                const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
                const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
                
                // Clamp to keep circle within canvas bounds
                newCenterX = clamp(newCenterX, this._radius, canvasW - this._radius);
                newCenterY = clamp(newCenterY, this._radius, canvasH - this._radius);

                this._centerX = newCenterX;
                this._centerY = newCenterY;

                this.applyUserScale();
                this.renderCallBack();
            }
        }
    };isPointInsideBox(x: number, y: number): boolean {
        // Convert canvas coordinates to image coordinates
        const [imageX, imageY] = this.toBoxCoordinates(x, y);
        // Calculate distance from image center
        const distance = Math.sqrt(
            Math.pow(imageX - this._centerX, 2) + Math.pow(imageY - this._centerY, 2)
        );
        return distance <= this._radius;
    }    indexOfPointInsideHandle(x: number, y: number): number {
        // x, y are already canvas coordinates, so we can use them directly
        const handles = this.getHandlePositions();
        for (let i = 0; i < handles.length; i++) {
            const handle = handles[i];
            if (
                x >= handle.xmin &&
                x <= handle.xmax &&
                y >= handle.ymin &&
                y <= handle.ymax
            ) {
                this.resizingHandleIndex = i;
                return i;
            }
        }
        return -1;
    }startCreating(event: MouseEvent): void {
        this.isCreating = true;
        // Store the initial mouse position in image coordinates for calculating radius
        const canvas = document.querySelector('canvas');
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            // Set the circle center to the initial click position (in image coordinates)
            this._centerX = (event.clientX - rect.left - this.canvasWindow.offsetX) / this.canvasWindow.scale;
            this._centerY = (event.clientY - rect.top - this.canvasWindow.offsetY) / this.canvasWindow.scale;
            
            // Store for radius calculation
            this.offsetMouseX = this._centerX;
            this.offsetMouseY = this._centerY;
        }
        document.addEventListener("pointermove", this.handleCreating);
        document.addEventListener("pointerup", this.stopCreating);
    }handleCreating = (event: MouseEvent): void => {
        if (this.isCreating) {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                // Calculate current mouse position in image coordinates (same as freehand)
                const currentX = (event.clientX - rect.left - this.canvasWindow.offsetX) / this.canvasWindow.scale;
                const currentY = (event.clientY - rect.top - this.canvasWindow.offsetY) / this.canvasWindow.scale;
                
                // Calculate radius as distance from initial position to current position
                const deltaX = currentX - this.offsetMouseX;
                const deltaY = currentY - this.offsetMouseY;
                const newRadius = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                
                // Set minimum radius for usability (much smaller than before)
                this._radius = Math.max(newRadius, 5); // Minimum 5 pixel radius
                
                this.applyUserScale();
                this.renderCallBack();
            }
        }
    };

    stopCreating = (): void => {
        this.isCreating = false;
        document.removeEventListener("pointermove", this.handleCreating);
        document.removeEventListener("pointerup", this.stopCreating);
        this.onFinishCreation();
    };

    startResize(handleIndex: number, event: MouseEvent): void {
        this.isResizing = true;
        this.resizingHandleIndex = handleIndex;
        
        // Call move start callback for undo/redo
        if (this.onMoveStart) {
            this.onMoveStart();
        }
        
        document.addEventListener("pointermove", this.handleResize);
        document.addEventListener("pointerup", this.stopResize);
    }    handleResize = (event: MouseEvent): void => {
        if (this.isResizing) {
            // Get canvas-relative coordinates first
            const canvas = document.querySelector('canvas');
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                const canvasX = event.clientX - rect.left;
                const canvasY = event.clientY - rect.top;
                
                // Convert canvas coordinates to image coordinates
                const [imageX, imageY] = this.toBoxCoordinates(canvasX, canvasY);
                
                // Calculate new radius based on distance from center to mouse in image coordinates
                const newRadius = Math.sqrt(
                    Math.pow(imageX - this._centerX, 2) + Math.pow(imageY - this._centerY, 2)
                );
                
                this._radius = Math.max(newRadius, this.minSize / 2);

                this.applyUserScale();
                this.renderCallBack();
            }
        }
    };

    stopResize = (): void => {
        this.isResizing = false;
        this.resizingHandleIndex = -1;
        document.removeEventListener("pointermove", this.handleResize);
        document.removeEventListener("pointerup", this.stopResize);
        
        // Call move end callback for undo/redo
        if (this.onMoveEnd) {
            this.onMoveEnd();
        }
    };

    onRotate(op: number): void {
        // Circles are rotation-invariant, so no action needed
    }
}