# Scrollable Image Annotator Implementation Plan

## Overview
This document outlines the implementation plan for making the `image_annotator` component automatically scrollable when the input image dimensions exceed the component's defined height/width limits. This is specifically designed for high-resolution medical images (e.g., mammography) to maintain image quality while providing manageable UI.

## Core Rule
**Automatic Scrolling Logic**: 
- Define fixed `height` and `width` for the `image_annotator` component
- If input image height > component height OR input image width > component width → Enable scrollable mode
- Otherwise → Use default behavior (fit image to container)

## Current State Analysis

### Current image_annotator Configuration
```python
image_display = image_annotator(
    height=800,  # Fixed height for better UX with high-res images
    width=1200,  # Maximum width initially - will be full screen
    # ... other parameters
    elem_classes=["medical-image-annotator"],
)
```

### Current Challenges
1. Large mammography images (e.g., 4000x3000px) overflow the 800px height container
2. Users cannot scroll within the annotation area
3. Need to preserve full-resolution medical image data
4. Annotations must map to original pixel coordinates

## Implementation Steps

### Phase 1: Source Code Analysis and Preparation

#### Step 1.1: Locate image_annotator Source Code
- [ ] Find the `gradio_image_annotation` package source code
- [ ] Identify the main component file (likely `image_annotator.py` or similar)
- [ ] Understand the current rendering and sizing logic

#### Step 1.2: Analyze Current Rendering Logic
- [ ] Document how images are currently sized and displayed
- [ ] Identify where canvas/container dimensions are set
- [ ] Understand the coordinate mapping system
- [ ] Document the CSS classes and styling currently applied

#### Step 1.3: Review CSS Integration Points
- [ ] Check how `elem_classes=["medical-image-annotator"]` is applied
- [ ] Document existing CSS that affects the component
- [ ] Identify where overflow/scrolling behavior can be controlled

### Phase 2: Component Modification

#### Step 2.1: Add Scrollable Mode Detection
- [ ] **Location**: Component initialization/setup
- [ ] **Action**: Add logic to compare image dimensions vs component dimensions
- [ ] **Implementation**:
  ```python
  def should_enable_scrolling(image_height, image_width, component_height, component_width):
      return image_height > component_height or image_width > component_width
  ```

#### Step 2.2: Modify Container Rendering
- [ ] **Location**: Component render/HTML generation
- [ ] **Action**: Conditionally apply scrollable container styles
- [ ] **Implementation**:
  ```python
  if self.scrollable_mode:
      container_style = "overflow: auto; max-height: {height}px; max-width: {width}px;"
  else:
      container_style = "height: {height}px; width: {width}px;"
  ```

#### Step 2.3: Preserve Image Resolution
- [ ] **Location**: Image processing/display logic
- [ ] **Action**: Ensure original image resolution is maintained in scrollable mode
- [ ] **Implementation**: Prevent automatic image scaling when scrollable mode is active

#### Step 2.4: Update Coordinate Mapping
- [ ] **Location**: Event handling for clicks/annotations
- [ ] **Action**: Ensure coordinates account for scroll position
- [ ] **Implementation**:
  ```javascript
  function getActualCoordinates(event, container) {
      const rect = container.getBoundingClientRect();
      const scrollLeft = container.scrollLeft;
      const scrollTop = container.scrollTop;
      return {
          x: event.clientX - rect.left + scrollLeft,
          y: event.clientY - rect.top + scrollTop
      };
  }
  ```

### Phase 3: CSS and Styling Updates

#### Step 3.1: Add Scrollable Container Styles
- [ ] **Location**: Component CSS or external stylesheet
- [ ] **Action**: Add styles for scrollable mode
- [ ] **Implementation**:
  ```css
  .medical-image-annotator.scrollable {
      overflow: auto !important;
      max-height: var(--component-height) !important;
      max-width: var(--component-width) !important;
  }
  
  .medical-image-annotator.scrollable canvas,
  .medical-image-annotator.scrollable img {
      max-width: none !important;
      height: auto !important;
  }
  ```

#### Step 3.2: Add Pan/Drag Scroll Support
- [ ] **Location**: Component JavaScript/event handlers
- [ ] **Action**: Implement drag-to-scroll functionality
- [ ] **Implementation**:
  ```javascript
  // Space key + drag to pan
  // Mouse wheel scroll support
  // Touch gesture support for mobile
  ```

### Phase 4: Integration with Gradio

#### Step 4.1: Add New Component Parameters
- [ ] **Location**: Component constructor/initialization
- [ ] **Action**: Add parameters to control scrollable behavior
- [ ] **Implementation**:
  ```python
  image_annotator(
      height=800,
      width=1200,
      auto_scroll=True,  # NEW: Enable automatic scrolling
      scroll_threshold=0.9,  # NEW: Scroll when image is 90% larger than container
      preserve_resolution=True,  # NEW: Maintain original image resolution
      # ... existing parameters
  )
  ```

#### Step 4.2: Update Value Processing
- [ ] **Location**: Component value setter/getter
- [ ] **Action**: Handle image dimension detection
- [ ] **Implementation**: When image value is set, analyze dimensions and set scrollable mode

#### Step 4.3: Enhance Event System
- [ ] **Location**: Component event handling
- [ ] **Action**: Ensure all events (clicks, selections, etc.) work in scrollable mode
- [ ] **Implementation**: Update event coordinate calculations

### Phase 5: Testing and Validation

#### Step 5.1: Unit Tests
- [ ] Test scrollable mode activation logic
- [ ] Test coordinate mapping accuracy
- [ ] Test image resolution preservation
- [ ] Test annotation functionality in both modes

#### Step 5.2: Integration Tests
- [ ] Test with various image sizes
- [ ] Test with mammography DICOM files
- [ ] Test annotation accuracy and export
- [ ] Test performance with large images

#### Step 5.3: User Experience Testing
- [ ] Test pan/scroll UX
- [ ] Test annotation workflow
- [ ] Verify no loss of medical image detail
- [ ] Test with different screen sizes

## File Modifications Required

### 1. `gradio_image_annotation/image_annotator.py` (Source Component)
```python
class ImageAnnotator:
    def __init__(self, ..., auto_scroll=True, scroll_threshold=1.0, preserve_resolution=True):
        self.auto_scroll = auto_scroll
        self.scroll_threshold = scroll_threshold
        self.preserve_resolution = preserve_resolution
        self.scrollable_mode = False
        
    def process_image(self, image):
        if self.auto_scroll:
            self.scrollable_mode = self._should_enable_scrolling(image)
        
    def _should_enable_scrolling(self, image):
        img_h, img_w = image.shape[:2]
        return (img_h > self.height * self.scroll_threshold or 
                img_w > self.width * self.scroll_threshold)
```

### 2. `ui/editor_tab.py` (Usage Site)
```python
image_display = image_annotator(
    height=800,
    width=1200,
    auto_scroll=True,  # Enable automatic scrolling
    scroll_threshold=1.0,  # Scroll when image is larger than container
    preserve_resolution=True,  # Maintain original resolution
    # ... existing parameters
)
```

### 3. Component CSS/JavaScript
```css
/* Scrollable container styles */
.medical-image-annotator.scrollable {
    overflow: auto !important;
    max-height: var(--component-height, 800px) !important;
    max-width: var(--component-width, 1200px) !important;
}
```

```javascript
// Pan/scroll functionality
// Coordinate mapping updates
// Event handling enhancements
```

## Expected Behavior

### Small Images (≤ 800x1200px)
- Normal behavior: Image fits within container
- No scrollbars
- Standard annotation functionality

### Large Images (> 800x1200px)
- **Automatic scrolling**: Scrollbars appear
- **Full resolution**: Image displayed at native resolution
- **Pan support**: Space + drag to pan around image
- **Preserved coordinates**: Annotations map to original pixel locations
- **Medical quality**: No compression or quality loss

## Success Criteria

1. ✅ **Automatic Detection**: Component detects when scrolling is needed
2. ✅ **Resolution Preservation**: Original image quality maintained
3. ✅ **Accurate Coordinates**: Annotations map correctly to original pixels
4. ✅ **Smooth UX**: Pan/scroll functionality works intuitively
5. ✅ **Medical Compliance**: No loss of diagnostic image detail
6. ✅ **Performance**: Large images load and scroll smoothly
7. ✅ **Backward Compatibility**: Existing functionality unchanged for smaller images

## Timeline Estimate

- **Phase 1**: 2-3 hours (Analysis)
- **Phase 2**: 4-6 hours (Core implementation)
- **Phase 3**: 2-3 hours (Styling)
- **Phase 4**: 2-3 hours (Integration)
- **Phase 5**: 3-4 hours (Testing)

**Total**: 13-19 hours

## Risk Mitigation

1. **Coordinate Mapping Issues**: Implement comprehensive testing with known reference points
2. **Performance Concerns**: Optimize rendering for large images, implement lazy loading if needed
3. **Browser Compatibility**: Test scrolling behavior across different browsers
4. **Medical Compliance**: Validate that no image degradation occurs in scrollable mode

## Next Steps

1. Locate and examine the `gradio_image_annotation` source code
2. Create a development branch for the implementation
3. Begin with Phase 1: Source code analysis
4. Implement changes incrementally with testing at each step
5. Document any discovered limitations or additional requirements

---

*This plan ensures that high-resolution medical images can be viewed and annotated effectively while maintaining the precision required for medical applications.*