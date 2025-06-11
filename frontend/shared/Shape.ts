export interface Shape {
    label: string;
    color: string;
    alpha: number;
    isSelected: boolean;
    scaleFactor: number;
    
    // Creation state (for polygons and other complex shapes)
    isCreating?: boolean;
    _points?: Array<{x: number, y: number}>;
    minPoints?: number;
    
    // Resize handles for interaction
    resizeHandles: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
        cursor: string;
    }[];
    
    // Undo/redo support for drag operations
    onMoveStart?: () => void;
    onMoveEnd?: () => void;
    initialStateForUndo?: any;
      // Common methods
    setSelected(selected: boolean): void;
    setScaleFactor(scaleFactor: number): void;
    render(ctx: CanvasRenderingContext2D, showLabels?: boolean): void;
    toJSON(): any;
    getArea(): number;
    isPointInsideBox(x: number, y: number): boolean;
    indexOfPointInsideHandle(x: number, y: number): number;
    startDrag(event: MouseEvent): void;
    startResize(handleIndex: number, event: MouseEvent): void;
    onRotate(op: number): void;
    
    // Properties for compatibility
    canvasXmin: number;
    canvasYmin: number;
    canvasXmax: number;
    canvasYmax: number;
}