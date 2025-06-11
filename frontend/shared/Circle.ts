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
        this.canvasYmax = canvasYmax;
        this.scaleFactor = scaleFactor;
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
        this.updateHandles();
        this.resizingHandleIndex = -1;
        this.minSize = minSize;
        this.color = color;
        this.alpha = alpha;
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
    }

    updateHandles(): void {
        const halfSize = this.resizeHandleSize / 2;
        this.resizeHandles = [
            {
                // Top handle
                xmin: this.centerX - halfSize,
                ymin: this.centerY - this.radius - halfSize,
                xmax: this.centerX + halfSize,
                ymax: this.centerY - this.radius + halfSize,
                cursor: "ns-resize",
            },
            {
                // Right handle
                xmin: this.centerX + this.radius - halfSize,
                ymin: this.centerY - halfSize,
                xmax: this.centerX + this.radius + halfSize,
                ymax: this.centerY + halfSize,
                cursor: "ew-resize",
            },
            {
                // Bottom handle
                xmin: this.centerX - halfSize,
                ymin: this.centerY + this.radius - halfSize,
                xmax: this.centerX + halfSize,
                ymax: this.centerY + this.radius + halfSize,
                cursor: "ns-resize",
            },
            {
                // Left handle
                xmin: this.centerX - this.radius - halfSize,
                ymin: this.centerY - halfSize,
                xmax: this.centerX - this.radius + halfSize,
                ymax: this.centerY + halfSize,
                cursor: "ew-resize",
            },
        ];
    }

    applyUserScale(): void {
        this.centerX = this._centerX * this.canvasWindow.scale;
        this.centerY = this._centerY * this.canvasWindow.scale;
        this.radius = this._radius * this.canvasWindow.scale;
        this.updateHandles();
    }

    getArea(): number {
        return Math.PI * this._radius * this._radius;
    }

    toBoxCoordinates(x: number, y: number): [number, number] {
        return [
            (x - this.canvasWindow.offsetX) / this.canvasWindow.scale,
            (y - this.canvasWindow.offsetY) / this.canvasWindow.scale,
        ];
    }

    render(ctx: CanvasRenderingContext2D, showLabels: boolean = true): void {
        if (this.radius <= 0) return;

        ctx.save();
        ctx.translate(this.canvasWindow.offsetX, this.canvasWindow.offsetY);
        ctx.scale(this.canvasWindow.scale, this.canvasWindow.scale);

        // Draw the circle
        ctx.beginPath();
        ctx.arc(this.centerX / this.canvasWindow.scale, this.centerY / this.canvasWindow.scale, 
                this.radius / this.canvasWindow.scale, 0, 2 * Math.PI);
        
        // Fill with transparent color
        ctx.fillStyle = setAlpha(this.color, this.alpha);
        ctx.fill();

        // Stroke
        ctx.strokeStyle = this.color;
        ctx.lineWidth = (this.isSelected ? this.selectedThickness : this.thickness) / this.canvasWindow.scale;
        ctx.stroke();

        // Draw resize handles if selected
        if (this.isSelected) {
            ctx.fillStyle = this.color;
            for (const handle of this.resizeHandles) {
                ctx.fillRect(
                    handle.xmin / this.canvasWindow.scale,
                    handle.ymin / this.canvasWindow.scale,
                    (handle.xmax - handle.xmin) / this.canvasWindow.scale,
                    (handle.ymax - handle.ymin) / this.canvasWindow.scale
                );
            }
        }

        // Draw label if available and showLabels is true
        if (showLabels && this.label) {
            ctx.fillStyle = this.color;
            ctx.font = `${12 / this.canvasWindow.scale}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(
                this.label,
                this.centerX / this.canvasWindow.scale,
                this.centerY / this.canvasWindow.scale
            );
        }

        ctx.restore();
    }

    startDrag(event: MouseEvent): void {
        this.isDragging = true;
        const [x, y] = this.toBoxCoordinates(event.clientX, event.clientY);
        this.offsetMouseX = x - this._centerX;
        this.offsetMouseY = y - this._centerY;
        
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
    };

    handleDrag = (event: MouseEvent): void => {
        if (this.isDragging) {
            const [x, y] = this.toBoxCoordinates(event.clientX, event.clientY);
            let newCenterX = x - this.offsetMouseX;
            let newCenterY = y - this.offsetMouseY;

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
    };

    isPointInsideBox(x: number, y: number): boolean {
        [x, y] = this.toBoxCoordinates(x, y);
        const distance = Math.sqrt(
            Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2)
        );
        return distance <= this.radius;
    }

    indexOfPointInsideHandle(x: number, y: number): number {
        [x, y] = this.toBoxCoordinates(x, y);
        for (let i = 0; i < this.resizeHandles.length; i++) {
            const handle = this.resizeHandles[i];
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
    }

    startCreating(event: MouseEvent, canvasX: number, canvasY: number): void {
        this.isCreating = true;
        this.offsetMouseX = canvasX;
        this.offsetMouseY = canvasY;
        document.addEventListener("pointermove", this.handleCreating);
        document.addEventListener("pointerup", this.stopCreating);
    }

    handleCreating = (event: MouseEvent): void => {
        if (this.isCreating) {
            let [x, y] = this.toBoxCoordinates(event.clientX, event.clientY);
            x = (x - this.offsetMouseX) / this.canvasWindow.scale;
            y = (y - this.offsetMouseY) / this.canvasWindow.scale;

            // Calculate radius from center to current mouse position
            const newRadius = Math.sqrt(x * x + y * y);
            this._radius = Math.max(newRadius, this.minSize / 2);

            this.applyUserScale();
            this.renderCallBack();
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
    }

    handleResize = (event: MouseEvent): void => {
        if (this.isResizing) {
            const [x, y] = this.toBoxCoordinates(event.clientX, event.clientY);
            
            // Calculate new radius based on distance from center to mouse
            const newRadius = Math.sqrt(
                Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2)
            );
            
            this._radius = Math.max(newRadius / this.canvasWindow.scale, this.minSize / 2);

            this.applyUserScale();
            this.renderCallBack();
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