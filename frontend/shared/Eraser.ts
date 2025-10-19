import WindowViewer from "./WindowViewer";
import Box from "./Box";
import CircleShape from "./Circle";
import FreehandPath from "./FreehandPath";
import PolygonShape from "./Polygon";

interface ErasePoint {
    x: number;
    y: number;
}

interface EraseMask {
    x: number;
    y: number;
    width: number;
    height: number;
    data: ImageData;
}

export default class Eraser {
    private erasePath: ErasePoint[] = [];
    private isErasing: boolean = false;
    private brushSize: number = 20; // Default brush size in pixels
    private canvasWindow: WindowViewer;
    private scaleFactor: number;
    private isScrollableMode: boolean;
    private maskCanvas: HTMLCanvasElement;
    private maskCtx: CanvasRenderingContext2D;
    
    constructor(canvasWindow: WindowViewer, scaleFactor: number = 1, isScrollableMode: boolean = false) {
        this.canvasWindow = canvasWindow;
        this.scaleFactor = scaleFactor;
        this.isScrollableMode = isScrollableMode;
        
        // Create off-screen canvas for mask operations
        this.maskCanvas = document.createElement('canvas');
        this.maskCtx = this.maskCanvas.getContext('2d')!;
    }
    
    setBrushSize(size: number) {
        this.brushSize = size;
    }
    
    setScaleFactor(scaleFactor: number) {
        this.scaleFactor = scaleFactor;
    }
    
    setScrollableMode(isScrollable: boolean) {
        this.isScrollableMode = isScrollable;
    }
    
    startErase(event: PointerEvent, canvasRect: DOMRect) {
        this.isErasing = true;
        this.erasePath = [];
        this.addErasePoint(event, canvasRect);
    }
    
    continueErase(event: PointerEvent, canvasRect: DOMRect) {
        if (!this.isErasing) return;
        this.addErasePoint(event, canvasRect);
    }
    
    endErase() {
        this.isErasing = false;
        const path = [...this.erasePath];
        this.erasePath = [];
        return path;
    }
    
    private addErasePoint(event: PointerEvent, canvasRect: DOMRect) {
        const mouseX = event.clientX - canvasRect.left;
        const mouseY = event.clientY - canvasRect.top;
        
        // Convert to image coordinates
        let imageX, imageY;
        if (this.isScrollableMode) {
            // In scrollable mode: don't divide by scaleFactor
            imageX = (mouseX - this.canvasWindow.offsetX) / this.canvasWindow.scale;
            imageY = (mouseY - this.canvasWindow.offsetY) / this.canvasWindow.scale;
        } else {
            // In non-scrollable mode: divide by scaleFactor
            imageX = (mouseX - this.canvasWindow.offsetX) / this.scaleFactor / this.canvasWindow.scale;
            imageY = (mouseY - this.canvasWindow.offsetY) / this.scaleFactor / this.canvasWindow.scale;
        }
        
        this.erasePath.push({ x: imageX, y: imageY });
    }    /**
     * Apply erase path to a shape using pixel-based masking approach
     */
    eraseFromShape(shape: Box | CircleShape | FreehandPath | PolygonShape, erasePath: ErasePoint[]): (Box | CircleShape | FreehandPath | PolygonShape)[] {
        if (erasePath.length === 0) return [shape];
        
        // Create mask for the erase path
        const eraseMask = this.createEraseMask(erasePath);
        
        if (shape instanceof Box) {
            return this.eraseFromBox(shape, eraseMask);
        } else if (shape instanceof CircleShape) {
            return this.eraseFromCircle(shape, eraseMask);
        } else if (shape instanceof FreehandPath) {
            return this.eraseFromFreehand(shape, eraseMask);
        } else if (shape instanceof PolygonShape) {
            return this.eraseFromPolygon(shape, eraseMask);
        }
        return [shape];
    }
    
    /**
     * Create a mask from the erase path for pixel-perfect erasing
     */
    private createEraseMask(erasePath: ErasePoint[]): EraseMask {
        // Calculate bounding box for the erase path
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        const brushRadius = this.isScrollableMode 
            ? this.brushSize / this.canvasWindow.scale
            : this.brushSize / this.scaleFactor / this.canvasWindow.scale;
        
        for (const point of erasePath) {
            minX = Math.min(minX, point.x - brushRadius);
            minY = Math.min(minY, point.y - brushRadius);
            maxX = Math.max(maxX, point.x + brushRadius);
            maxY = Math.max(maxY, point.y + brushRadius);
        }
        
        const width = Math.ceil(maxX - minX);
        const height = Math.ceil(maxY - minY);
        
        // Resize mask canvas if needed
        if (this.maskCanvas.width !== width || this.maskCanvas.height !== height) {
            this.maskCanvas.width = width;
            this.maskCanvas.height = height;
        }
        
        // Clear mask
        this.maskCtx.clearRect(0, 0, width, height);
        
        // Draw eraser path as opaque areas (areas to be erased)
        this.maskCtx.fillStyle = 'white';
        this.maskCtx.globalCompositeOperation = 'source-over';
        
        for (let i = 0; i < erasePath.length; i++) {
            const point = erasePath[i];
            const x = point.x - minX;
            const y = point.y - minY;
            
            this.maskCtx.beginPath();
            this.maskCtx.arc(x, y, brushRadius, 0, 2 * Math.PI);
            this.maskCtx.fill();
            
            // Connect consecutive points for smooth brush stroke
            if (i > 0) {
                const prevPoint = erasePath[i - 1];
                const prevX = prevPoint.x - minX;
                const prevY = prevPoint.y - minY;
                
                this.maskCtx.lineWidth = brushRadius * 2;
                this.maskCtx.lineCap = 'round';
                this.maskCtx.beginPath();
                this.maskCtx.moveTo(prevX, prevY);
                this.maskCtx.lineTo(x, y);
                this.maskCtx.stroke();
            }
        }
        
        return {
            x: minX,
            y: minY,
            width,
            height,
            data: this.maskCtx.getImageData(0, 0, width, height)
        };
    }
      /**
     * Erase from box using pixel-based masking
     */
    private eraseFromBox(box: Box, eraseMask: EraseMask): (Box | FreehandPath | PolygonShape)[] {
        // For boxes, convert to polygon and then apply mask-based erasing
        const polygon = this.boxToPolygon(box);
        return this.eraseFromPolygon(polygon, eraseMask);
    }
    
    /**
     * Convert box to polygon for uniform mask-based processing
     */
    private boxToPolygon(box: Box): PolygonShape {
        // Ensure label is a string (handle arrays, null, undefined)
        let labelStr: string;
        if (typeof box.label === 'string') {
            labelStr = box.label;
        } else if (Array.isArray(box.label)) {
            labelStr = (box.label as any[]).join(', ');
        } else {
            labelStr = String(box.label || '');
        }
        
        const polygon = new PolygonShape(
            box.renderCallBack,
            box.onFinishCreation,
            box.canvasWindow,
            box.canvas,
            box.canvasXmin,
            box.canvasYmin,
            box.canvasXmax,
            box.canvasYmax,
            labelStr,
            box.color,
            box.alpha,
            box.minSize,
            box.resizeHandleSize,
            box.thickness,
            box.selectedThickness,
            box.scaleFactor
        );
        
        // Set polygon points to box corners
        polygon._points = [
            { x: box._xmin, y: box._ymin },
            { x: box._xmax, y: box._ymin },
            { x: box._xmax, y: box._ymax },
            { x: box._xmin, y: box._ymax }
        ];
        polygon.updateBoundingBox();
        
        return polygon;
    }      /**
     * Erase from freehand using pixel-based masking - converts to polygon first
     */
    private eraseFromFreehand(freehand: FreehandPath, eraseMask: EraseMask): FreehandPath[] {
        if (freehand._points.length < 2) return [];
        
        // Convert freehand to polygon for consistent erasing behavior
        const polygon = this.freehandToPolygon(freehand);
        
        // Process erase on the polygon
        const erasedPolygons = this.eraseFromPolygon(polygon, eraseMask);
        
        // Convert the result back to freehand paths
        const result: FreehandPath[] = [];
        for (const erasedPolygon of erasedPolygons) {
            const newFreehand = this.polygonToFreehand(erasedPolygon, freehand);
            result.push(newFreehand);
        }
          return result;
    }
    
    /**
     * Erase from circle using pixel-based masking - converts to polygon first
     */
    private eraseFromCircle(circle: CircleShape, eraseMask: EraseMask): (CircleShape | PolygonShape)[] {
        // For circles, we can either:
        // 1. Check if the erase path intersects the circle significantly and remove it entirely
        // 2. Convert to polygon approximation for more complex erasing
        
        // Simple approach: check if erase mask significantly overlaps with circle
        const overlapRatio = this.calculateCircleEraseMaskOverlap(circle, eraseMask);
        
        // If more than 30% of the circle is erased, remove it entirely
        if (overlapRatio > 0.3) {
            return [];
        }
        
        // If less overlap, convert to polygon for more precise erasing
        if (overlapRatio > 0.05) {
            const polygon = this.circleToPolygon(circle);
            return this.eraseFromPolygon(polygon, eraseMask);
        }
        
        // No significant overlap, return original circle
        return [circle];
    }
    
    /**
     * Calculate the overlap ratio between circle and erase mask
     */
    private calculateCircleEraseMaskOverlap(circle: CircleShape, eraseMask: EraseMask): number {
        const centerX = circle._centerX;
        const centerY = circle._centerY;
        const radius = circle._radius;
        
        // Check if circle intersects with erase mask bounds
        if (centerX + radius < eraseMask.x || centerX - radius > eraseMask.x + eraseMask.width ||
            centerY + radius < eraseMask.y || centerY - radius > eraseMask.y + eraseMask.height) {
            return 0; // No intersection
        }
        
        // Sample points within circle and check against mask
        const sampleCount = 100; // Number of sample points
        let erasedSamples = 0;
        
        for (let i = 0; i < sampleCount; i++) {
            // Generate random point within circle
            const angle = Math.random() * 2 * Math.PI;
            const r = Math.sqrt(Math.random()) * radius;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            
            if (this.isPointErased({ x, y }, eraseMask)) {
                erasedSamples++;
            }
        }
        
        return erasedSamples / sampleCount;
    }
    
    /**
     * Convert circle to polygon for uniform mask-based processing
     */
    private circleToPolygon(circle: CircleShape): PolygonShape {
        // Ensure label is a string
        let labelStr: string;
        if (typeof circle.label === 'string') {
            labelStr = circle.label;
        } else if (Array.isArray(circle.label)) {
            labelStr = (circle.label as any[]).join(', ');
        } else {
            labelStr = String(circle.label || '');
        }
        
        const polygon = new PolygonShape(
            circle.renderCallBack,
            circle.onFinishCreation,
            circle.canvasWindow,
            circle.canvas,
            circle.canvasXmin,
            circle.canvasYmin,
            circle.canvasXmax,
            circle.canvasYmax,
            labelStr,
            circle.color,
            circle.alpha,
            circle.minSize,
            circle.resizeHandleSize,
            circle.thickness,
            circle.selectedThickness,
            circle.scaleFactor
        );
          // Approximate circle with polygon (16 sides for reasonable accuracy)
        const sides = 16;
        const points: Array<{x: number, y: number}> = [];
        for (let i = 0; i < sides; i++) {
            const angle = (i / sides) * 2 * Math.PI;
            const x = circle._centerX + circle._radius * Math.cos(angle);
            const y = circle._centerY + circle._radius * Math.sin(angle);
            points.push({ x, y });
        }
        
        polygon._points = points;
        polygon.updateBoundingBox();
        
        return polygon;
    }
    
    /**
     * Convert freehand path to polygon for uniform processing
     */
    private freehandToPolygon(freehand: FreehandPath): PolygonShape {
        // Ensure label is a string
        let labelStr: string;
        if (typeof freehand.label === 'string') {
            labelStr = freehand.label;
        } else if (Array.isArray(freehand.label)) {
            labelStr = (freehand.label as any[]).join(', ');
        } else {
            labelStr = String(freehand.label || '');
        }
        
        const polygon = new PolygonShape(
            freehand.renderCallBack,
            freehand.onFinishCreation,
            freehand.canvasWindow,
            freehand.canvas,
            freehand.canvasXmin,
            freehand.canvasYmin,
            freehand.canvasXmax,
            freehand.canvasYmax,
            labelStr,
            freehand.color,
            freehand.alpha,
            freehand.minSize,
            freehand.resizeHandleSize,
            freehand.thickness,
            freehand.selectedThickness,
            freehand.scaleFactor
        );
        
        // Copy the points from freehand to polygon
        polygon._points = [...freehand._points];
        polygon.updateBoundingBox();
        
        return polygon;
    }
    
    /**
     * Convert polygon back to freehand path
     */
    private polygonToFreehand(polygon: PolygonShape, originalFreehand: FreehandPath): FreehandPath {
        // Ensure label is a string
        let labelStr: string;
        if (typeof originalFreehand.label === 'string') {
            labelStr = originalFreehand.label;
        } else if (Array.isArray(originalFreehand.label)) {
            labelStr = (originalFreehand.label as any[]).join(', ');
        } else {
            labelStr = String(originalFreehand.label || '');
        }
        
        const freehand = new FreehandPath(
            originalFreehand.renderCallBack,
            originalFreehand.onFinishCreation,
            originalFreehand.canvasWindow,
            originalFreehand.canvas,
            originalFreehand.canvasXmin,
            originalFreehand.canvasYmin,
            originalFreehand.canvasXmax,
            originalFreehand.canvasYmax,
            labelStr,
            originalFreehand.color,
            originalFreehand.alpha,
            originalFreehand.minSize,
            originalFreehand.resizeHandleSize,
            originalFreehand.thickness,
            originalFreehand.selectedThickness,
            originalFreehand.scaleFactor
        );
        
        // Copy the points from polygon to freehand
        freehand._points = [...polygon._points];
        freehand.updateBoundingBox();
        
        return freehand;
    }
    
    /**
     * Check if a line segment intersects with the erase mask using stroke width
     */
    private isLineSegmentErased(start: { x: number, y: number }, end: { x: number, y: number }, eraseMask: EraseMask, strokeWidth: number): boolean {
        // Sample points along the line segment with stroke width consideration
        const distance = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        const sampleCount = Math.max(3, Math.ceil(distance * 2)); // More samples for accuracy
        const strokeRadius = strokeWidth / 2;
        
        let intersectionCount = 0;
        const threshold = Math.max(1, Math.ceil(sampleCount * 0.3)); // 30% of samples need to intersect
        
        for (let i = 0; i <= sampleCount; i++) {
            const t = sampleCount > 0 ? i / sampleCount : 0;
            const samplePoint = {
                x: start.x + (end.x - start.x) * t,
                y: start.y + (end.y - start.y) * t
            };
            
            // Check multiple points around the stroke width
            const checkPoints = [
                samplePoint,
                { x: samplePoint.x + strokeRadius, y: samplePoint.y },
                { x: samplePoint.x - strokeRadius, y: samplePoint.y },
                { x: samplePoint.x, y: samplePoint.y + strokeRadius },
                { x: samplePoint.x, y: samplePoint.y - strokeRadius }
            ];
            
            for (const checkPoint of checkPoints) {
                if (this.isPointErased(checkPoint, eraseMask)) {
                    intersectionCount++;
                    break; // One hit per sample is enough
                }
            }
        }
        
        return intersectionCount >= threshold;
    }
      /**
     * Erase from polygon using pixel-based masking
     */
    private eraseFromPolygon(polygon: PolygonShape, eraseMask: EraseMask): PolygonShape[] {
        if (polygon._points.length < 3) return [];
        
        // First, check if the entire polygon is erased
        let allPointsErased = true;
        for (const point of polygon._points) {
            if (!this.isPointErased(point, eraseMask)) {
                allPointsErased = false;
                break;
            }
        }
        if (allPointsErased) return [];
        
        // Build the new polygon by walking around the original edges
        const survivingPoints: { x: number, y: number }[] = [];
        
        for (let i = 0; i < polygon._points.length; i++) {
            const currentPoint = polygon._points[i];
            const nextPoint = polygon._points[(i + 1) % polygon._points.length];
            
            const currentErased = this.isPointErased(currentPoint, eraseMask);
            const nextErased = this.isPointErased(nextPoint, eraseMask);
            
            // Case 1: Current point is NOT erased - add it
            if (!currentErased) {
                survivingPoints.push({ ...currentPoint });
            }
            
            // Case 2: Edge transitions from unerased to erased
            if (!currentErased && nextErased) {
                // Find where the edge enters the erased area
                const entryPoint = this.findEraserEdge(currentPoint, nextPoint, eraseMask);
                if (entryPoint) {
                    survivingPoints.push(entryPoint);
                }
            }
            
            // Case 3: Edge transitions from erased to unerased  
            if (currentErased && !nextErased) {
                // Find where the edge exits the erased area
                const exitPoint = this.findEraserEdge(nextPoint, currentPoint, eraseMask);
                if (exitPoint) {
                    survivingPoints.push(exitPoint);
                }
            }
        }
        
        // Remove consecutive duplicate points
        const filteredPoints: { x: number, y: number }[] = [];
        for (let i = 0; i < survivingPoints.length; i++) {
            const point = survivingPoints[i];
            const prevPoint = filteredPoints[filteredPoints.length - 1];
            
            const distance = prevPoint 
                ? Math.sqrt(Math.pow(point.x - prevPoint.x, 2) + Math.pow(point.y - prevPoint.y, 2))
                : Infinity;
                
            if (distance > 1.0) {
                filteredPoints.push(point);
            }
        }
        
        // Also check if first and last points are duplicates
        if (filteredPoints.length > 2) {
            const first = filteredPoints[0];
            const last = filteredPoints[filteredPoints.length - 1];
            const distance = Math.sqrt(Math.pow(first.x - last.x, 2) + Math.pow(first.y - last.y, 2));
            if (distance < 1.0) {
                filteredPoints.pop();
            }
        }
        
        if (filteredPoints.length < 3) return []; // Not enough points for a polygon
        
        // Ensure label is a string
        let labelStr: string;
        if (typeof polygon.label === 'string') {
            labelStr = polygon.label;
        } else if (Array.isArray(polygon.label)) {
            labelStr = (polygon.label as any[]).join(', ');
        } else {
            labelStr = String(polygon.label || '');
        }
        
        const newPolygon = new PolygonShape(
            polygon.renderCallBack,
            polygon.onFinishCreation,
            polygon.canvasWindow,
            polygon.canvas,
            polygon.canvasXmin,
            polygon.canvasYmin,
            polygon.canvasXmax,
            polygon.canvasYmax,
            labelStr,
            polygon.color,
            polygon.alpha,
            polygon.minSize,
            polygon.resizeHandleSize,
            polygon.thickness,
            polygon.selectedThickness,
            polygon.scaleFactor
        );
        newPolygon._points = filteredPoints;
        newPolygon.updateBoundingBox();
        
        return [newPolygon];
    }
      /**
     * Check if a point is erased by looking at the mask
     */
    private isPointErased(point: { x: number, y: number }, eraseMask: EraseMask): boolean {
        // Convert point to mask coordinates
        const maskX = Math.floor(point.x - eraseMask.x);
        const maskY = Math.floor(point.y - eraseMask.y);
        
        // Check if point is within mask bounds
        if (maskX < 0 || maskX >= eraseMask.width || maskY < 0 || maskY >= eraseMask.height) {
            return false;
        }
        
        // Check alpha value in mask data (white pixels = erased areas)
        const pixelIndex = (maskY * eraseMask.width + maskX) * 4;
        const alpha = eraseMask.data.data[pixelIndex + 3];
        
        return alpha > 128; // Consider semi-transparent pixels as erased
    }
    
    /**
     * Sample points along an edge between two points
     */
    private sampleEdgePoints(start: { x: number, y: number }, end: { x: number, y: number }, interval: number): { x: number, y: number }[] {
        const points: { x: number, y: number }[] = [];
        const distance = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        const steps = Math.max(1, Math.floor(distance / interval));
        
        for (let i = 0; i <= steps; i++) {
            const t = steps > 0 ? i / steps : 0;
            points.push({
                x: start.x + (end.x - start.x) * t,
                y: start.y + (end.y - start.y) * t
            });
        }
        
        return points;
    }
    
    /**
     * Find the edge of the eraser between an unerased and erased point
     */
    private findEraserEdge(unerasedPoint: { x: number, y: number }, erasedPoint: { x: number, y: number }, eraseMask: EraseMask): { x: number, y: number } | null {
        // Binary search for edge point
        let low = 0;
        let high = 1;
        let iterations = 0;
        const maxIterations = 10;
        
        while (iterations < maxIterations && Math.abs(high - low) > 0.01) {
            const mid = (low + high) / 2;
            const testPoint = {
                x: unerasedPoint.x + (erasedPoint.x - unerasedPoint.x) * mid,
                y: unerasedPoint.y + (erasedPoint.y - unerasedPoint.y) * mid
            };
            
            if (this.isPointErased(testPoint, eraseMask)) {
                high = mid;
            } else {
                low = mid;
            }
            iterations++;
        }
        
        const edgeT = (low + high) / 2;
        return {
            x: unerasedPoint.x + (erasedPoint.x - unerasedPoint.x) * edgeT,
            y: unerasedPoint.y + (erasedPoint.y - unerasedPoint.y) * edgeT
        };
    }
      /**
     * Render the current erase path for visual feedback
     */
    renderErasePath(ctx: CanvasRenderingContext2D) {
        if (this.erasePath.length === 0) return;
        
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Calculate brush radius based on mode
        const brushRadius = this.isScrollableMode 
            ? this.brushSize / this.canvasWindow.scale
            : this.brushSize / this.scaleFactor / this.canvasWindow.scale;
        
        // Draw brush circles at each point
        for (let i = 0; i < this.erasePath.length; i++) {
            const point = this.erasePath[i];
            // Convert back to canvas coordinates based on mode
            let canvasX, canvasY, canvasRadius;
            
            if (this.isScrollableMode) {
                canvasX = point.x * this.canvasWindow.scale + this.canvasWindow.offsetX;
                canvasY = point.y * this.canvasWindow.scale + this.canvasWindow.offsetY;
                canvasRadius = brushRadius * this.canvasWindow.scale;
            } else {
                canvasX = point.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX;
                canvasY = point.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY;
                canvasRadius = brushRadius * this.scaleFactor * this.canvasWindow.scale;
            }
            
            ctx.beginPath();
            ctx.arc(canvasX, canvasY, canvasRadius, 0, 2 * Math.PI);
            ctx.fill();
            
            // Connect with previous point for smooth brush stroke
            if (i > 0) {
                const prevPoint = this.erasePath[i - 1];
                let prevCanvasX, prevCanvasY;
                
                if (this.isScrollableMode) {
                    prevCanvasX = prevPoint.x * this.canvasWindow.scale + this.canvasWindow.offsetX;
                    prevCanvasY = prevPoint.y * this.canvasWindow.scale + this.canvasWindow.offsetY;
                } else {
                    prevCanvasX = prevPoint.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX;
                    prevCanvasY = prevPoint.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY;
                }
                
                // Draw connecting line with brush width
                ctx.lineWidth = canvasRadius * 2;
                ctx.beginPath();
                ctx.moveTo(prevCanvasX, prevCanvasY);
                ctx.lineTo(canvasX, canvasY);
                ctx.stroke();
            }
        }
        
        ctx.restore();
    }
}