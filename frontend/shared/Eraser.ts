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
    private maskCanvas: HTMLCanvasElement;
    private maskCtx: CanvasRenderingContext2D;
    
    constructor(canvasWindow: WindowViewer, scaleFactor: number = 1) {
        this.canvasWindow = canvasWindow;
        this.scaleFactor = scaleFactor;
        
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
        const imageX = (mouseX - this.canvasWindow.offsetX) / this.scaleFactor / this.canvasWindow.scale;
        const imageY = (mouseY - this.canvasWindow.offsetY) / this.scaleFactor / this.canvasWindow.scale;
        
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
        const brushRadius = this.brushSize / this.scaleFactor / this.canvasWindow.scale;
        
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
        const polygon = new PolygonShape(
            box.renderCallBack,
            box.onFinishCreation,
            box.canvasWindow,
            box.canvasXmin,
            box.canvasYmin,
            box.canvasXmax,
            box.canvasYmax,
            box.label,
            box.color,
            box.alpha,
            box.minSize,
            box.resizeHandleSize,
            box.thickness,
            box.selectedThickness
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
    }    /**
     * Erase from freehand using direct point masking - preserves original path structure
     */
    private eraseFromFreehand(freehand: FreehandPath, eraseMask: EraseMask): FreehandPath[] {
        if (freehand._points.length < 2) return [];
        
        // Create eraseData array if it doesn't exist, or update existing one
        let eraseData = freehand.eraseData ? [...freehand.eraseData] : new Array(freehand._points.length).fill(false);
        
        // Ensure eraseData has the same length as points
        if (eraseData.length !== freehand._points.length) {
            eraseData = new Array(freehand._points.length).fill(false);
        }
        
        // Check each point and nearby area for intersection with erase mask
        for (let i = 0; i < freehand._points.length; i++) {
            const point = freehand._points[i];
            
            // Check if point or its vicinity is erased
            if (this.isPointOrVicinityErased(point, eraseMask)) {
                eraseData[i] = true;
            }
        }
        
        // Check if any segments between consecutive points are erased
        for (let i = 0; i < freehand._points.length - 1; i++) {
            const start = freehand._points[i];
            const end = freehand._points[i + 1];
            
            if (this.isLineSegmentErased(start, end, eraseMask, freehand.thickness)) {
                eraseData[i] = true;
                eraseData[i + 1] = true;
            }
        }
        
        // Count how much of the path is erased
        const erasedCount = eraseData.filter(erased => erased).length;
        const erasedRatio = erasedCount / freehand._points.length;
        
        // If most of the path is erased (>80%), remove it entirely
        if (erasedRatio > 0.8) {
            return [];
        }
        
        // If very little is erased (<5%), return original
        if (erasedRatio < 0.05) {
            return [freehand];
        }
        
        // Create new freehand with eraseData applied
        const newFreehand = new FreehandPath(
            freehand.renderCallBack,
            freehand.onFinishCreation,
            freehand.canvasWindow,
            freehand.canvasXmin,
            freehand.canvasYmin,
            freehand.canvasXmax,
            freehand.canvasYmax,
            freehand.label,
            freehand.color,
            freehand.alpha,
            freehand.minSize,
            freehand.resizeHandleSize,
            freehand.thickness,
            freehand.selectedThickness,
            freehand.scaleFactor
        );
        
        // Copy all original points (preserve the path structure)
        newFreehand._points = [...freehand._points];
        newFreehand.eraseData = eraseData;
        newFreehand.updateBoundingBox();
        
        return [newFreehand];
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
        const polygon = new PolygonShape(
            circle.renderCallBack,
            circle.onFinishCreation,
            circle.canvasWindow,
            circle.canvasXmin,
            circle.canvasYmin,
            circle.canvasXmax,
            circle.canvasYmax,
            circle.label,
            circle.color,
            circle.alpha,
            circle.minSize,
            circle.resizeHandleSize,
            circle.thickness,
            circle.selectedThickness
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
        const polygon = new PolygonShape(
            freehand.renderCallBack,
            freehand.onFinishCreation,
            freehand.canvasWindow,
            freehand.canvasXmin,
            freehand.canvasYmin,
            freehand.canvasXmax,
            freehand.canvasYmax,
            freehand.label,
            freehand.color,
            freehand.alpha,
            freehand.minSize,
            freehand.resizeHandleSize,
            freehand.thickness,
            freehand.selectedThickness
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
        const freehand = new FreehandPath(
            originalFreehand.renderCallBack,
            originalFreehand.onFinishCreation,
            originalFreehand.canvasWindow,
            originalFreehand.canvasXmin,
            originalFreehand.canvasYmin,
            originalFreehand.canvasXmax,
            originalFreehand.canvasYmax,
            originalFreehand.label,
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
        
        // Check which original vertices should be kept
        const survivingPoints: { x: number, y: number }[] = [];
        
        for (let i = 0; i < polygon._points.length; i++) {
            const currentPoint = polygon._points[i];
            const nextPoint = polygon._points[(i + 1) % polygon._points.length];
            
            // Check if current vertex is erased
            const currentErased = this.isPointErased(currentPoint, eraseMask);
            
            // Always add the current point if it's not erased
            if (!currentErased) {
                survivingPoints.push(currentPoint);
            }
            
            // Check the edge between current and next point for intersections
            // Only sample edges that cross from erased to unerased areas or vice versa
            const nextErased = this.isPointErased(nextPoint, eraseMask);
            
            if (currentErased !== nextErased) {
                // Edge crosses eraser boundary, find the intersection point
                const edgePoint = this.findEraserEdge(
                    currentErased ? nextPoint : currentPoint,
                    currentErased ? currentPoint : nextPoint,
                    eraseMask
                );
                
                if (edgePoint) {
                    // Make sure the edge point is sufficiently far from existing points
                    const lastPoint = survivingPoints[survivingPoints.length - 1];
                    if (!lastPoint || 
                        Math.sqrt(Math.pow(edgePoint.x - lastPoint.x, 2) + 
                                 Math.pow(edgePoint.y - lastPoint.y, 2)) > 2) {
                        survivingPoints.push(edgePoint);
                    }
                }
            }
        }
        
        // Remove consecutive duplicate points with more generous threshold
        const filteredPoints: { x: number, y: number }[] = [];
        for (let i = 0; i < survivingPoints.length; i++) {
            const point = survivingPoints[i];
            const prevPoint = filteredPoints[filteredPoints.length - 1];
            
            if (!prevPoint || 
                Math.sqrt(Math.pow(point.x - prevPoint.x, 2) + 
                         Math.pow(point.y - prevPoint.y, 2)) > 1.5) {
                filteredPoints.push(point);
            }
        }
        
        if (filteredPoints.length < 3) return []; // Not enough points for a polygon
        
        const newPolygon = new PolygonShape(
            polygon.renderCallBack,
            polygon.onFinishCreation,
            polygon.canvasWindow,
            polygon.canvasXmin,
            polygon.canvasYmin,
            polygon.canvasXmax,
            polygon.canvasYmax,
            polygon.label,
            polygon.color,
            polygon.alpha,
            polygon.minSize,
            polygon.resizeHandleSize,
            polygon.thickness,
            polygon.selectedThickness
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
        
        const brushRadius = this.brushSize / this.scaleFactor / this.canvasWindow.scale;
        
        // Draw brush circles at each point
        for (let i = 0; i < this.erasePath.length; i++) {
            const point = this.erasePath[i];
            // Convert back to canvas coordinates
            const canvasX = point.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX;
            const canvasY = point.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY;
            const canvasRadius = brushRadius * this.scaleFactor * this.canvasWindow.scale;
            
            ctx.beginPath();
            ctx.arc(canvasX, canvasY, canvasRadius, 0, 2 * Math.PI);
            ctx.fill();
            
            // Connect with previous point for smooth brush stroke
            if (i > 0) {
                const prevPoint = this.erasePath[i - 1];
                const prevCanvasX = prevPoint.x * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetX;
                const prevCanvasY = prevPoint.y * this.scaleFactor * this.canvasWindow.scale + this.canvasWindow.offsetY;
                
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
    
    /**
     * Check if a point or its vicinity is erased (considering thickness of freehand path)
     */
    private isPointOrVicinityErased(point: { x: number, y: number }, eraseMask: EraseMask): boolean {
        // Check the center point
        if (this.isPointErased(point, eraseMask)) {
            return true;
        }
        
        // For freehand paths, also check nearby points within a small radius (thickness consideration)
        const checkRadius = 2; // pixels
        const checkPoints = [
            { x: point.x + checkRadius, y: point.y },
            { x: point.x - checkRadius, y: point.y },
            { x: point.x, y: point.y + checkRadius },
            { x: point.x, y: point.y - checkRadius },
            { x: point.x + checkRadius * 0.7, y: point.y + checkRadius * 0.7 },
            { x: point.x - checkRadius * 0.7, y: point.y - checkRadius * 0.7 },
            { x: point.x + checkRadius * 0.7, y: point.y - checkRadius * 0.7 },
            { x: point.x - checkRadius * 0.7, y: point.y + checkRadius * 0.7 }
        ];
        
        // If any of the nearby points are erased, consider this point erased
        return checkPoints.some(checkPoint => this.isPointErased(checkPoint, eraseMask));
    }
}