
# `gradio_image_annotation`
<a href="https://pypi.org/project/gradio_image_annotation/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_image_annotation"></a>  

A Gradio component that can be used to annotate images with bounding boxes.

## Installation

```bash
pip install gradio_image_annotation
```

## Usage

```python
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

```

## `image_annotator`

### Initialization

<table>
<thead>
<tr>
<th align="left">name</th>
<th align="left" style="width: 25%;">type</th>
<th align="left">default</th>
<th align="left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>value</code></td>
<td align="left" style="width: 25%;">

```python
dict | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">A dict or None. The dictionary must contain a key 'image' with either an URL to an image, a numpy image or a PIL image. Optionally it may contain a key 'boxes' with a list of boxes. Each box must be a dict with the keys based on shape type: For regular boxes: 'xmin', 'ymin', 'xmax' and 'ymax' with the absolute image coordinates. For freehand paths: 'type' set to 'freehand', 'points' array with x,y coordinates, and 'label'. For circles: 'type' set to 'circle', 'centerX', 'centerY', 'radius', and 'label'. For polygons: 'type' set to 'polygon', 'points' array with x,y coordinates, and 'label'. All boxes can optionally include 'label' and 'color' keys. Color must be a tuple of RGB values (e.g. `(255,255,255)`). Optionally can also include the keys 'orientation' with an integer between 0 and 3, describing the number of times the image is rotated by 90 degrees in frontend, the rotation is clockwise.</td>
</tr>

<tr>
<td align="left"><code>boxes_alpha</code></td>
<td align="left" style="width: 25%;">

```python
float | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Opacity of the bounding boxes 0 and 1.</td>
</tr>

<tr>
<td align="left"><code>label_list</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">List of valid labels.</td>
</tr>

<tr>
<td align="left"><code>label_colors</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Optional list of colors for each label when `label_list` is used. Colors must be a tuple of RGB values (e.g. `(255,255,255)`).</td>
</tr>

<tr>
<td align="left"><code>box_min_size</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Minimum valid bounding box size.</td>
</tr>

<tr>
<td align="left"><code>handle_size</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Size of the bounding box resize handles.</td>
</tr>

<tr>
<td align="left"><code>box_thickness</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Thickness of the bounding box outline.</td>
</tr>

<tr>
<td align="left"><code>box_selected_thickness</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Thickness of the bounding box outline when it is selected.</td>
</tr>

<tr>
<td align="left"><code>disable_edit_boxes</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Disables the ability to set and edit the label and color of the boxes.</td>
</tr>

<tr>
<td align="left"><code>single_box</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>False</code></td>
<td align="left">If True, at most one box can be drawn.</td>
</tr>

<tr>
<td align="left"><code>height</code></td>
<td align="left" style="width: 25%;">

```python
int | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The height of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.</td>
</tr>

<tr>
<td align="left"><code>width</code></td>
<td align="left" style="width: 25%;">

```python
int | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The width of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.</td>
</tr>

<tr>
<td align="left"><code>image_mode</code></td>
<td align="left" style="width: 25%;">

```python
"1"
    | "L"
    | "P"
    | "RGB"
    | "RGBA"
    | "CMYK"
    | "YCbCr"
    | "LAB"
    | "HSV"
    | "I"
    | "F"
```

</td>
<td align="left"><code>"RGB"</code></td>
<td align="left">"RGB" if color, or "L" if black and white. See https://pillow.readthedocs.io/en/stable/handbook/concepts.html for other supported image modes and their meaning.</td>
</tr>

<tr>
<td align="left"><code>sources</code></td>
<td align="left" style="width: 25%;">

```python
list["upload" | "webcam" | "clipboard"] | None
```

</td>
<td align="left"><code>["upload", "webcam", "clipboard"]</code></td>
<td align="left">List of sources for the image. "upload" creates a box where user can drop an image file, "webcam" allows user to take snapshot from their webcam, "clipboard" allows users to paste an image from the clipboard. If None, defaults to ["upload", "webcam", "clipboard"].</td>
</tr>

<tr>
<td align="left"><code>image_type</code></td>
<td align="left" style="width: 25%;">

```python
"numpy" | "pil" | "filepath"
```

</td>
<td align="left"><code>"numpy"</code></td>
<td align="left">The format the image is converted before being passed into the prediction function. "numpy" converts the image to a numpy array with shape (height, width, 3) and values from 0 to 255, "pil" converts the image to a PIL image object, "filepath" passes a str path to a temporary file containing the image. If the image is SVG, the `type` is ignored and the filepath of the SVG is returned.</td>
</tr>

<tr>
<td align="left"><code>label</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.</td>
</tr>

<tr>
<td align="left"><code>container</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will place the component in a container - providing some extra padding around the border.</td>
</tr>

<tr>
<td align="left"><code>scale</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.</td>
</tr>

<tr>
<td align="left"><code>min_width</code></td>
<td align="left" style="width: 25%;">

```python
int
```

</td>
<td align="left"><code>160</code></td>
<td align="left">minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.</td>
</tr>

<tr>
<td align="left"><code>interactive</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>True</code></td>
<td align="left">if True, will allow users to upload and annotate an image; if False, can only be used to display annotated images.</td>
</tr>

<tr>
<td align="left"><code>visible</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will be hidden.</td>
</tr>

<tr>
<td align="left"><code>elem_id</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>elem_classes</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>render</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.</td>
</tr>

<tr>
<td align="left"><code>show_label</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if True, will display label.</td>
</tr>

<tr>
<td align="left"><code>show_download_button</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will show a button to download the image.</td>
</tr>

<tr>
<td align="left"><code>show_share_button</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.</td>
</tr>

<tr>
<td align="left"><code>show_clear_button</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will show a button to clear the current image.</td>
</tr>

<tr>
<td align="left"><code>show_remove_button</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">If True, will show a button to remove the selected bounding box.</td>
</tr>

<tr>
<td align="left"><code>handles_cursor</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, the cursor will change when hovering over box handles in drag mode. Can be CPU-intensive.</td>
</tr>

<tr>
<td align="left"><code>use_default_label</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>False</code></td>
<td align="left">If True, the first item in label_list will be used as the default label when creating boxes.</td>
</tr>

<tr>
<td align="left"><code>eraser_size</code></td>
<td align="left" style="width: 25%;">

```python
int
```

</td>
<td align="left"><code>10</code></td>
<td align="left">Default size of the eraser brush in pixels.</td>
</tr>

<tr>
<td align="left"><code>enable_freehand</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, enables freehand drawing mode.</td>
</tr>

<tr>
<td align="left"><code>enable_circle</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, enables circle drawing mode.</td>
</tr>

<tr>
<td align="left"><code>enable_polygon</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, enables polygon drawing mode.            enable_eraser: If True, enables eraser mode for pixel-based shape erasing.</td>
</tr>

<tr>
<td align="left"><code>enable_eraser</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, enables eraser mode for pixel-based shape erasing.</td>
</tr>

<tr>
<td align="left"><code>shape_creation_mode</code></td>
<td align="left" style="width: 25%;">

```python
"drag" | "box" | "freehand" | "circle" | "polygon"
```

</td>
<td align="left"><code>"drag"</code></td>
<td align="left">Default shape creation mode when the component is first loaded. Options: "drag" (default), "box", "freehand", "circle", "polygon".</td>
</tr>

<tr>
<td align="left"><code>auto_scroll</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, automatically enables scrolling when image dimensions exceed component dimensions. Useful for high-resolution medical images.</td>
</tr>

<tr>
<td align="left"><code>scroll_threshold</code></td>
<td align="left" style="width: 25%;">

```python
float
```

</td>
<td align="left"><code>1.0</code></td>
<td align="left">Threshold multiplier for triggering auto-scroll. Image will scroll if its dimensions exceed (component_dimension * scroll_threshold).</td>
</tr>

<tr>
<td align="left"><code>preserve_resolution</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, maintains original image resolution in scrollable mode instead of scaling down the image.</td>
</tr>
</tbody></table>


### Events

| name | description |
|:-----|:------------|
| `clear` | This listener is triggered when the user clears the image_annotator using the clear button for the component. |
| `change` | Triggered when the value of the image_annotator changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input. |
| `upload` | This listener is triggered when the user uploads a file into the image_annotator. |
| `select` | Event listener for when the user selects or deselects the image_annotator. Uses event data gradio.SelectData to carry `value` referring to the label of the image_annotator, and `selected` to refer to state of the image_annotator. See EventData documentation on how to use this event data |



### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As output:** Is passed, a dict with the image and boxes or None.
- **As input:** Should return, a dict with an image and an optional list of boxes or None.

 ```python
 def predict(
     value: AnnotatedImageValue | None
 ) -> AnnotatedImageValue | None:
     return value
 ```
 

## `AnnotatedImageValue`
```python
class AnnotatedImageValue(TypedDict):
    image: Optional[np.ndarray | PIL.Image.Image | str]
    boxes: Optional[List[dict]]
    orientation: Optional[int]
    scrollable_mode: Optional[bool]
    auto_scroll: Optional[bool]
    preserve_resolution: Optional[bool]
```
