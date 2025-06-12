import WindowViewer from "./WindowViewer";
import { setAlpha } from "./utils";

export default class FreehandPath {
    label: string;
    points: Array<{x: number, y: number}>;
    _points: Array<{x: number, y: number}>; // Normalized points
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
    creatingAnchorX: string;
    creatingAnchorY: string;
    resizeHandles: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
        cursor: string;
    }[];
    canvasWindow: WindowViewer;
    // Bounding box properties for compatibility
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
    _xmin: number;
    _ymin: number;
    _xmax: number;
    _ymax: number;
    
    // Erase data for mask-based erasing
    eraseData?: boolean[];

    constructor(
        renderCallBack: () => void,
        onFinishCreation: () => void,
        canvasWindow: WindowViewer,
        canvasXmin: number,
        canvasYmin: number,
        canvasXmax: number,
        canvasYmax: number,
        label: string,
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
        this.points = [];
        this._points = [];
        this.isResizing = false;
        this.isSelected = false;
        this.offsetMouseX = 0;
        this.offsetMouseY = 0;
        this.resizeHandleSize = handleSize;
        this.thickness = thickness;
        this.selectedThickness = selectedThickness;
        this.resizingHandleIndex = -1;
        this.minSize = minSize;        this.color = color;
        this.alpha = alpha;
        this.resizeHandles = [];
        this.creatingAnchorX = "xmin";
        this.creatingAnchorY = "ymin";
        
        // Initialize bounding box properties
        this.xmin = 0;
        this.ymin = 0;
        this.xmax = 0;
        this.ymax = 0;
        this._xmin = 0;
        this._ymin = 0;
        this._xmax = 0;
        this._ymax = 0;
    }

    toJSON() {
        return {
            label: this.label,
            points: this._points,
            color: this.color,
            scaleFactor: this.scaleFactor,
            type: "freehand"
        };
    }

    setSelected(selected: boolean): void {
        this.isSelected = selected;
    }

    setScaleFactor(scaleFactor: number) {
        let scale = scaleFactor / this.scaleFactor;
        // Scale all points
        this._points = this._points.map(point => ({
            x: Math.round(point.x * scale),
            y: Math.round(point.y * scale)
        }));
        this.applyUserScale();
        this.updateBoundingBox();
        this.scaleFactor = scaleFactor;
    }

    updateBoundingBox(): void {
        if (this._points.length === 0) return;
        
        this._xmin = Math.min(...this._points.map(p => p.x));
        this._ymin = Math.min(...this._points.map(p => p.y));
        this._xmax = Math.max(...this._points.map(p => p.x));
        this._ymax = Math.max(...this._points.map(p => p.y));
        
        this.applyUserScale();
        this.updateHandles();
    }    updateHandles(): void {
        if (this._points.length < 2) return; // Need at least 2 points for a path
        
        const halfSize = this.resizeHandleSize / 2;
        this.resizeHandles = [];
        
        // Get up to 8 well-distributed points along the freehand path
        const handlePoints = this.getFreehandHandlePoints();
        
        for (let i = 0; i < handlePoints.length; i++) {
            const point = handlePoints[i];
            this.resizeHandles.push({
                xmin: point.x - halfSize,
                ymin: point.y - halfSize,
                xmax: point.x + halfSize,
                ymax: point.y + halfSize,
                cursor: this.getResizeCursor(point, i),
            });
        }
    }

    private getFreehandHandlePoints(): Array<{x: number, y: number}> {
        const points = this.points; // Use scaled points for handle positioning
        
        if (points.length <= 8) {
            // If we have 8 or fewer points, place handles on each point
            return [...points];
        } else {
            // For paths with more than 8 points, sample 8 evenly distributed points
            const handlePoints: Array<{x: number, y: number}> = [];
            const pathLength = this.calculatePathLength();
            const segmentLength = pathLength / 8;
            
            let currentDistance = 0;
            let currentPointIndex = 0;
            
            for (let handleIndex = 0; handleIndex < 8; handleIndex++) {
                const targetDistance = handleIndex * segmentLength;
                
                // Find the segment containing the target distance
                while (currentPointIndex < points.length - 1) {
                    const p1 = points[currentPointIndex];
                    const p2 = points[currentPointIndex + 1];
                    const edgeLength = Math.sqrt(
                        Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
                    );
                    
                    if (currentDistance + edgeLength >= targetDistance) {
                        // Interpolate along this segment
                        const t = edgeLength > 0 ? (targetDistance - currentDistance) / edgeLength : 0;
                        handlePoints.push({
                            x: p1.x + t * (p2.x - p1.x),
                            y: p1.y + t * (p2.y - p1.y)
                        });
                        break;
                    }
                    
                    currentDistance += edgeLength;
                    currentPointIndex++;
                }
            }
            
            return handlePoints.length > 0 ? handlePoints : [points[0]]; // Fallback
        }
    }

    private calculatePathLength(): number {
        const points = this.points;
        let length = 0;
        
        for (let i = 0; i < points.length - 1; i++) {
            const p1 = points[i];
            const p2 = points[i + 1];
            length += Math.sqrt(
                Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
            );
        }
        
        return length;
    }

    private getResizeCursor(point: {x: number, y: number}, index: number): string {
        // Calculate the angle from the path center to this handle
        const centerX = (this.xmin + this.xmax) / 2;
        const centerY = (this.ymin + this.ymax) / 2;
        
        const angle = Math.atan2(point.y - centerY, point.x - centerX);
        const degrees = (angle * 180 / Math.PI + 360) % 360;
        
        // Map angle to appropriate cursor
        if ((degrees >= 337.5) || (degrees < 22.5)) return "ew-resize";      // Right
        if (degrees >= 22.5 && degrees < 67.5) return "nwse-resize";         // Bottom-right
        if (degrees >= 67.5 && degrees < 112.5) return "ns-resize";          // Bottom
        if (degrees >= 112.5 && degrees < 157.5) return "nesw-resize";       // Bottom-left
        if (degrees >= 157.5 && degrees < 202.5) return "ew-resize";         // Left
        if (degrees >= 202.5 && degrees < 247.5) return "nwse-resize";       // Top-left
        if (degrees >= 247.5 && degrees < 292.5) return "ns-resize";         // Top
        if (degrees >= 292.5 && degrees < 337.5) return "nesw-resize";       // Top-right
        
        return "move"; // Fallback
    }

    getWidth(): number {
        return this.xmax - this.xmin;
    }

    getHeight(): number {
        return this.ymax - this.ymin;
    }

    getArea(): number {
        return this._points.length > 0 ? this.getWidth() * this.getHeight() : 0;
    }

    toCanvasCoordinates(x: number, y: number): [number, number] {
        x = x + this.canvasXmin;
        y = y + this.canvasYmin;
        return [x, y];
    }

    toBoxCoordinates(x: number, y: number): [number, number] {
        x = x - this.canvasXmin;
        y = y - this.canvasYmin;
        return [x, y];
    }

    applyUserScale(): void {
        this.points = this._points.map(point => ({
            x: point.x * this.canvasWindow.scale,
            y: point.y * this.canvasWindow.scale
        }));
        
        if (this._points.length > 0) {
            this.xmin = this._xmin * this.canvasWindow.scale;
            this.ymin = this._ymin * this.canvasWindow.scale;
            this.xmax = this._xmax * this.canvasWindow.scale;
            this.ymax = this._ymax * this.canvasWindow.scale;
            this.updateHandles();
        }
    }

    updateOffset(): void {
        this.canvasXmin = this.canvasWindow.offsetX;
        this.canvasYmin = this.canvasWindow.offsetY;
        this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale;
        this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale;
        this.applyUserScale();
    }    render(ctx: CanvasRenderingContext2D, showLabels: boolean = true): void {
        if (this.points.length === 0) return;

        this.updateOffset();
        
        // Check if this freehand has erase data
        if (this.eraseData && Array.isArray(this.eraseData)) {
            // Render with erase mask - only draw visible segments
            this.renderWithEraseMask(ctx, this.eraseData.map(erased => !erased));
        } else {
            // Normal rendering - draw and fill the freehand path
            ctx.beginPath();
            for (let i = 0; i < this.points.length; i++) {
                const [x, y] = this.toCanvasCoordinates(this.points[i].x, this.points[i].y);
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            // Close the path for filling
            ctx.closePath();
            
            // Fill the path with color and alpha (like rectangles)
            ctx.fillStyle = setAlpha(this.color, this.alpha);
            ctx.fill();
            
            // Draw the border
            ctx.lineWidth = this.isSelected ? this.selectedThickness : this.thickness;
            ctx.strokeStyle = setAlpha(this.color, 1);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
        }
        
        this.renderLabel(ctx, showLabels);
        this.renderHandles(ctx);
    }    private renderLabel(ctx: CanvasRenderingContext2D, showLabels: boolean = true): void {
        // Render the label and background only if showLabels is true
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
    }
    
    private renderHandles(ctx: CanvasRenderingContext2D): void {
        // Render the handles if selected
        if (this.isSelected) {
            ctx.fillStyle = setAlpha(this.color, 1);
            for (const handle of this.resizeHandles) {
                const [xmin, ymin] = this.toCanvasCoordinates(handle.xmin, handle.ymin);
                ctx.fillRect(
                    xmin,
                    ymin,
                    handle.xmax - handle.xmin,
                    handle.ymax - handle.ymin,
                );
            }
        }
    }startDrag(event: MouseEvent): void {
        this.isDragging = true;
        this.offsetMouseX = event.clientX - this._xmin * this.canvasWindow.scale;
        this.offsetMouseY = event.clientY - this._ymin * this.canvasWindow.scale;
        
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
        if (this.isDragging && this._points.length > 0) {
            let deltaX = (event.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin;
            let deltaY = (event.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;

            const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
            const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
            deltaX = Math.max(-this._xmin, Math.min(deltaX, canvasW - this._xmax));
            deltaY = Math.max(-this._ymin, Math.min(deltaY, canvasH - this._ymax));

            // Move all points
            this._points = this._points.map(point => ({
                x: point.x + deltaX,
                y: point.y + deltaY
            }));

            this.updateBoundingBox();
            this.renderCallBack();
        }
    };

    isPointInsideBox(x: number, y: number): boolean {
        [x, y] = this.toBoxCoordinates(x, y);
        return (
            x >= this.xmin &&
            x <= this.xmax &&
            y >= this.ymin &&
            y <= this.ymax
        );
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
    }    startCreating(event: MouseEvent, canvasX: number, canvasY: number): void {
        this.isCreating = true;
        const canvas = document.querySelector('canvas');
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            const x = (event.clientX - rect.left - this.canvasWindow.offsetX) / this.canvasWindow.scale;
            const y = (event.clientY - rect.top - this.canvasWindow.offsetY) / this.canvasWindow.scale;
            
            this._points = [{x, y}];
            this.applyUserScale();
            this.updateBoundingBox();
        }
        
        document.addEventListener("pointermove", this.handleCreating);
        document.addEventListener("pointerup", this.stopCreating);
    }    handleCreating = (event: MouseEvent): void => {
        if (this.isCreating) {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                const x = (event.clientX - rect.left - this.canvasWindow.offsetX) / this.canvasWindow.scale;
                const y = (event.clientY - rect.top - this.canvasWindow.offsetY) / this.canvasWindow.scale;
                
                // Add point if it's far enough from the last point (smooth drawing)
                const lastPoint = this._points[this._points.length - 1];
                const distance = Math.sqrt(Math.pow(x - lastPoint.x, 2) + Math.pow(y - lastPoint.y, 2));
                if (distance > 2) { // Minimum distance between points
                    this._points.push({x, y});
                    this.applyUserScale();
                    this.updateBoundingBox();
                    this.renderCallBack();
                }
            }
        }
    };

    stopCreating = (event: MouseEvent): void => {
        this.isCreating = false;
        document.removeEventListener("pointermove", this.handleCreating);
        document.removeEventListener("pointerup", this.stopCreating);        if (this._points.length > 1) {
            this.updateBoundingBox();
            const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
            const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
            
            // Ensure path is within canvas bounds
            this._points = this._points.map(point => ({
                x: Math.max(0, Math.min(point.x, canvasW)),
                y: Math.max(0, Math.min(point.y, canvasH))
            }));
            
            this.updateBoundingBox();
            this.renderCallBack();
            
            // Print coordinates of the hand-drawn path
            console.log("Freehand path coordinates:", this._points);
            console.log("Number of points:", this._points.length);
            console.log("Bounding box:", {
                xmin: this._xmin,
                ymin: this._ymin,
                xmax: this._xmax,
                ymax: this._ymax
            });
        }
        this.onFinishCreation();
    };    startResize(handleIndex: number, event: MouseEvent): void {
        this.resizingHandleIndex = handleIndex;
        this.isResizing = true;
        this.offsetMouseX = event.clientX - this.resizeHandles[handleIndex].xmin;
        this.offsetMouseY = event.clientY - this.resizeHandles[handleIndex].ymin;
        
        // Call move start callback for undo/redo
        if (this.onMoveStart) {
            this.onMoveStart();
        }
        
        document.addEventListener("pointermove", this.handleResize);
        document.addEventListener("pointerup", this.stopResize);
    }    handleResize = (event: MouseEvent): void => {
        if (this.isResizing && this._points.length > 0) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const deltaX = (mouseX - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale;
            const deltaY = (mouseY - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale;

            // Get current handle position
            const currentHandle = this.resizeHandles[this.resizingHandleIndex];
            const handleCenterX = (currentHandle.xmin + currentHandle.xmax) / 2;
            const handleCenterY = (currentHandle.ymin + currentHandle.ymax) / 2;
            
            // Calculate the direction from path center to the handle
            const centerX = (this.xmin + this.xmax) / 2;
            const centerY = (this.ymin + this.ymax) / 2;
            
            const handleDirX = handleCenterX - centerX;
            const handleDirY = handleCenterY - centerY;
            const handleDist = Math.sqrt(handleDirX * handleDirX + handleDirY * handleDirY);
            
            if (handleDist > 0) {
                // Normalize direction vector
                const normalizedDirX = handleDirX / handleDist;
                const normalizedDirY = handleDirY / handleDist;
                
                // Calculate movement in the direction of the handle
                const moveDistance = deltaX * normalizedDirX + deltaY * normalizedDirY;
                
                // Calculate scale factor based on the movement
                const oldWidth = this._xmax - this._xmin;
                const oldHeight = this._ymax - this._ymin;
                const maxDimension = Math.max(oldWidth, oldHeight);
                const scaleFactor = Math.max(0.1, 1 + moveDistance / maxDimension); // Minimum scale of 0.1
                
                // Apply uniform scaling to all points from the center
                const oldCenterX = (this._xmin + this._xmax) / 2;
                const oldCenterY = (this._ymin + this._ymax) / 2;
                
                this._points = this._points.map(point => ({
                    x: oldCenterX + (point.x - oldCenterX) * scaleFactor,
                    y: oldCenterY + (point.y - oldCenterY) * scaleFactor
                }));

                this.updateBoundingBox();
                this.renderCallBack();
            }
        }
    };stopResize = (): void => {
        this.isResizing = false;
        document.removeEventListener("pointermove", this.handleResize);
        document.removeEventListener("pointerup", this.stopResize);
        
        // Call move end callback for undo/redo
        if (this.onMoveEnd) {
            this.onMoveEnd();
        }
    };

    onRotate(op: number): void {
        if (this._points.length === 0) return;
        
        const rotatedPoints = this._points.map(point => {
            switch (op) {
                case 1: // Clockwise
                    return {
                        x: this.canvasWindow.imageWidth - point.y,
                        y: point.x
                    };
                case -1: // Counterclockwise
                    return {
                        x: point.y,
                        y: this.canvasWindow.imageHeight - point.x
                    };
                default:
                    return point;
            }
        });
        
        this._points = rotatedPoints;
        this.updateBoundingBox();
        this.applyUserScale();
    }
    
    /**
     * Render freehand path with erase mask applied
     */
    private renderWithEraseMask(ctx: CanvasRenderingContext2D, pointVisibility: boolean[]): void {
        // Draw only the visible segments
        ctx.lineWidth = this.isSelected ? this.selectedThickness : this.thickness;
        ctx.strokeStyle = setAlpha(this.color, 1);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        
        // Find continuous visible segments and draw them
        let pathStarted = false;
        for (let i = 0; i < this.points.length; i++) {
            const [x, y] = this.toCanvasCoordinates(this.points[i].x, this.points[i].y);
            const isVisible = i < pointVisibility.length ? pointVisibility[i] : true;
            
            if (isVisible) {
                if (!pathStarted) {
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    pathStarted = true;
                } else {
                    ctx.lineTo(x, y);
                }
            } else {
                if (pathStarted) {
                    // End current path and stroke it
                    ctx.stroke();
                    pathStarted = false;
                }
            }
        }
        
        // Stroke the final path if it was started
        if (pathStarted) {
            ctx.stroke();
        }
        
        // For filled areas, we need to create closed paths for each visible segment
        if (this.alpha > 0) {
            ctx.fillStyle = setAlpha(this.color, this.alpha);
            
            // Find continuous visible segments
            let currentSegment: number[] = [];
            for (let i = 0; i < this.points.length; i++) {
                const isVisible = i < pointVisibility.length ? pointVisibility[i] : true;
                
                if (isVisible) {
                    currentSegment.push(i);
                } else {
                    if (currentSegment.length >= 3) {
                        this.drawFilledSegment(ctx, currentSegment);
                    }
                    currentSegment = [];
                }
            }
            
            // Draw the final segment if it has enough points
            if (currentSegment.length >= 3) {
                this.drawFilledSegment(ctx, currentSegment);
            }
        }
    }
    
    /**
     * Draw a filled segment for a continuous visible portion
     */
    private drawFilledSegment(ctx: CanvasRenderingContext2D, segmentIndices: number[]): void {
        if (segmentIndices.length < 3) return;
        
        ctx.beginPath();
        for (let i = 0; i < segmentIndices.length; i++) {
            const pointIndex = segmentIndices[i];
            const [x, y] = this.toCanvasCoordinates(this.points[pointIndex].x, this.points[pointIndex].y);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.fill();
    }
}
