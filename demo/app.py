import gradio as gr
from gradio_image_annotation import image_annotator
import numpy as np


example_annotation = {
    "image": "https://gradio-builds.s3.amazonaws.com/demo-files/base.png",
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


def handle_select(evt: gr.SelectData):
    """Handle select events from the image annotator"""
    coordinates = evt.value
    print('triggered the select event')
    print(f'Event data: {evt}')
    print(f'Coordinates: {coordinates}')
    return f"Clicked at coordinates: ({coordinates[0]}, {coordinates[1]})"

def handle_change(evt):
    """Handle change events from the image annotator"""
    print('Change event triggered')
    print(f'Change event data: {evt}')


with gr.Blocks() as demo:
    gr.Markdown("# Image Annotator Select Event Test")
    gr.Markdown("""
    ## Instructions:
    1. The image below is loaded with some existing bounding boxes
    2. Click the **Hand icon** (drag/edit mode) if not already selected
    3. Click somewhere **inside the image** but **outside existing boxes**
    4. The coordinates of your click will appear in the text field below
    """)
    
    test_annotator = image_annotator(
        example_annotation,
        label_list=["Person", "Vehicle"],
        label_colors=[(0, 255, 0), (255, 0, 0)],
    )
    
    coordinates_display = gr.Textbox(
        label="Click Coordinates",
        placeholder="Click on the image in hand mode to see coordinates",
        interactive=False
    )
      # Connect the select event to the coordinates display
    test_annotator.select(handle_select, outputs=coordinates_display)
    test_annotator.change(handle_change)

if __name__ == "__main__":
    demo.launch()
