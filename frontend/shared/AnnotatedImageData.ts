import type { FileData } from "@gradio/client";
import type { Shape } from "./Shape";

export default class AnnotatedImageData {
    image: FileData;
    boxes: Shape[] = [];
    orientation: number = 0;
}
