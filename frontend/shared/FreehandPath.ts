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
        
        // For freehand paths, place handles on key control points for direct manipulation
        const controlPoints = this.getFreehandControlPoints();
        
        for (let i = 0; i < controlPoints.length; i++) {
            const point = controlPoints[i];
            this.resizeHandles.push({
                xmin: point.x - halfSize,
                ymin: point.y - halfSize,
                xmax: point.x + halfSize,
                ymax: point.y + halfSize,
                cursor: "move", // Use move cursor for direct point manipulation
            });
        }
    }    private getFreehandControlPoints(): Array<{x: number, y: number, index: number}> {
        const points = this.points; // Use scaled points for handle positioning
        
        if (points.length <= 6) {
            // If we have 6 or fewer points, place handles on each point
            return points.map((point, index) => ({ ...point, index }));
        } else {
            // For paths with more points, select key control points intelligently
            const controlPoints: Array<{x: number, y: number, index: number}> = [];
            
            // Always include start and end points
            controlPoints.push({ ...points[0], index: 0 });
            controlPoints.push({ ...points[points.length - 1], index: points.length - 1 });
            
            // Add intermediate points with better distribution
            const maxControlPoints = 4; // 6 total including start/end for better performance
            if (points.length > 2) {
                const step = Math.floor(points.length / (maxControlPoints + 1));
                
                for (let i = 1; i <= maxControlPoints; i++) {
                    const pointIndex = Math.min(i * step, points.length - 2);
                    if (pointIndex > 0 && pointIndex < points.length - 1) {
                        controlPoints.push({ ...points[pointIndex], index: pointIndex });
                    }
                }
            }
            
            return controlPoints;
        }
    }    private getControlPointIndex(handleIndex: number): number {
        // Get the actual point index in the _points array
        const controlPoints = this.getFreehandControlPoints();
        return handleIndex < controlPoints.length ? controlPoints[handleIndex].index : -1;
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
            
            // Calculate the new position in image coordinates
            const canvas = document.querySelector('canvas');
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                const canvasX = mouseX - rect.left;
                const canvasY = mouseY - rect.top;
                
                // Convert to image coordinates
                const newX = (canvasX - this.canvasWindow.offsetX) / this.canvasWindow.scale;
                const newY = (canvasY - this.canvasWindow.offsetY) / this.canvasWindow.scale;
                
                // Get the control point index being moved
                const controlPointIndex = this.getControlPointIndex(this.resizingHandleIndex);
                
                if (controlPointIndex >= 0 && controlPointIndex < this._points.length) {
                    // Constrain movement within canvas bounds
                    const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
                    const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
                    
                    const clampedX = Math.max(0, Math.min(newX, canvasW));
                    const clampedY = Math.max(0, Math.min(newY, canvasH));
                    
                    // Calculate the movement delta
                    const deltaX = clampedX - this._points[controlPointIndex].x;
                    const deltaY = clampedY - this._points[controlPointIndex].y;
                    
                    // Apply smooth local deformation with neighboring points
                    this.applyLocalDeformation(controlPointIndex, deltaX, deltaY);
                    
                    // Update bounding box and handles
                    this.updateBoundingBox();
                    this.renderCallBack();
                }
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

    /**
     * Apply smooth local deformation when moving a control point
     * This affects neighboring points to maintain curve continuity
     */
    private applyLocalDeformation(centerIndex: number, deltaX: number, deltaY: number): void {
        const totalPoints = this._points.length;
        if (totalPoints < 3 || centerIndex < 0 || centerIndex >= totalPoints) return;
        
        // Define the influence radius (how many neighboring points to affect)
        const influenceRadius = Math.min(3, Math.floor(totalPoints / 4));
        
        // Apply movement to the center point
        this._points[centerIndex].x += deltaX;
        this._points[centerIndex].y += deltaY;
        
        // Apply decreasing influence to neighboring points
        for (let i = 1; i <= influenceRadius; i++) {
            // Calculate influence strength (decreases with distance)
            const influence = Math.exp(-i * 0.8); // Exponential falloff
            
            const adjustedDeltaX = deltaX * influence;
            const adjustedDeltaY = deltaY * influence;
            
            // Apply to points before the center
            if (centerIndex - i >= 0) {
                this._points[centerIndex - i].x += adjustedDeltaX;
                this._points[centerIndex - i].y += adjustedDeltaY;
            }
            
            // Apply to points after the center
            if (centerIndex + i < totalPoints) {
                this._points[centerIndex + i].x += adjustedDeltaX;
                this._points[centerIndex + i].y += adjustedDeltaY;
            }
        }
        
        // Ensure all points stay within canvas bounds
        const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
        const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        
        this._points = this._points.map(point => ({
            x: Math.max(0, Math.min(point.x, canvasW)),
            y: Math.max(0, Math.min(point.y, canvasH))
        }));
    }
}
