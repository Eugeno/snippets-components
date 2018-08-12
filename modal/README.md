## Usage
### 1. Include
```html
<link rel="stylesheet" href="path/to/modal.css">

<script src="path/to/modal.js"></script>
```
Or import
```javascript
import Modal from "path/to/modal"
```

### 2. Add markup
```html
<div class="modal">
  <div class="modal__overlay"></div>
  <div class="modal__body details">
    <button class="modal__close">
      Close
    </button>
    <!-- -->
  </div>
</div>
```

### 3. Call
```javascript
const modal = new Modal('.modal')
```

## How to use
After creating an instance you can activate modal by `modal.open()` and close it by `modal.close()` or by clicking on the overlay, close button. Also, you can use Esc key and Enter key on the close button.

First parameter can be either string (selector) or node element. Second parameter is an object with options.
```javascript
const modal = new Modal(modalElement, {
  // options
})
```

## Options

| Option | Type | Description |
| --- | --- | --- |
| `activeClass` | String | Default: `'_is-active'`. <br> Class for active modal. |
| `overlayClass` | String | Default: `'modal__overlay'`. <br> Class for overlay element. |
| `modalClass` | String | Default: `'modal__close'`. <br> Class for close element. |
