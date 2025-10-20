import gradio as gr
from gradio_image_annotation import image_annotator
import numpy as np


example_annotation = {
    #"image": "https://gradio-builds.s3.amazonaws.com/demo-files/base.png",
    "image": "https://images.stockcake.com/public/0/c/6/0c6282d5-ac35-4e57-ae58-e819dc49bfc7_large/sunset-sky-view-stockcake.jpg",  # Local image file
    "boxes": [
        {
            "xmin": 636,
            "ymin": 575,
            "xmax": 801,
            "ymax": 697,
            "label": "Vehicle",
            "color": (255, 0, 0)
        },
        {
            "xmin": 360,
            "ymin": 615,
            "xmax": 386,
            "ymax": 702,
            "label": "Person",
            "color": (0, 255, 0)
        }
    ]
}

# Example with high-resolution image to test scrollable functionality
high_res_annotation = {
    #"image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&h=1960",  # High resolution image
    "image": "https://i.postimg.cc/R9xnJP03/836163430-slice-0002.png",  # High resolution image
    "boxes": []
}


def handle_select(evt: gr.SelectData):
    """Handle select events from the image annotator"""
    coordinates = evt.value
    return f"Clicked at coordinates: ({coordinates[0]}, {coordinates[1]})"

def handle_change():
    """Handle change events from the image annotator"""
    pass


with gr.Blocks() as demo:
    gr.Markdown("# Scrollable Image Annotator Demo")
    
    gr.Markdown("## Standard Image Annotator")
    gr.Markdown("Normal behavior with a regular-sized image:")
    
    test_annotator = image_annotator(
        example_annotation,
        label_list=["Person", "Vehicle"],
        label_colors=[(0, 255, 0), (255, 0, 0)],
        shape_creation_mode="drag",
        height=600,
        width=800,
        elem_classes=["image-annotator"]
    )
    
    coordinates_display = gr.Textbox(
        label="Click Coordinates",
        placeholder="Click on the image in hand mode to see coordinates",
        interactive=False
    )
    
    gr.Markdown("---")
    gr.Markdown("## High-Resolution Scrollable Image Annotator")
    gr.Markdown("Automatic scrolling with high-resolution image (should enable scrollbars):")
    
    high_res_annotator = image_annotator(
        high_res_annotation,
        label_list=["Object", "Region"],
        label_colors=[(255, 0, 0), (0, 255, 0)],
        shape_creation_mode="drag",
        height=800,  # Fixed height - image should scroll if larger
        width=1200,  # Fixed width - image should scroll if larger
        auto_scroll=True,
        scroll_threshold=1.0,  # Enable scrolling when image exceeds container
        preserve_resolution=True,  # Maintain original image quality
        elem_classes=["high-res-annotator"]
    )
    
    high_res_coordinates = gr.Textbox(
        label="High-Res Click Coordinates",
        placeholder="Click on the high-res image to see coordinates",
        interactive=False
    )
    
    gr.Markdown("---")
    gr.Markdown("## Features to Test:")
    gr.Markdown("""
    1. **Automatic Scrolling**: High-resolution images should show scrollbars
    2. **Resolution Preservation**: Images should maintain their original quality
    3. **Accurate Coordinates**: Annotations should map to correct pixel locations
    4. **Smooth Navigation**: Pan/scroll should work smoothly
    5. **All Annotation Tools**: Box, freehand, circle, polygon, and eraser should work in scrollable mode
    """)
    
    # Connect events
    test_annotator.select(handle_select, outputs=coordinates_display)
    test_annotator.change(handle_change)
    
    high_res_annotator.select(handle_select, outputs=high_res_coordinates)
    high_res_annotator.change(handle_change)

if __name__ == "__main__":
    demo.launch()
