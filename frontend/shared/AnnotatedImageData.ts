import type { FileData } from "@gradio/client";
import type { Shape } from "./Shape";

export default class AnnotatedImageData {
    image?: FileData | null;
    boxes: Shape[] = [];
    orientation: number = 0;
    scrollable_mode: boolean = false;
    auto_scroll: boolean = true;
    preserve_resolution: boolean = true;
}
