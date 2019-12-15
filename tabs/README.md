## Usage
### 1. Include
```html
<script src="path/to/tabs.js"></script>
```
Or import
```javascript
import Tabs from "path/to/tabs"
```

### 2. Add markup
```html
<ul data-tabs>
  <li data-tab>
    tab 1
  </li>
  <li data-tab>
    tab 2
  </li>
</ul>

<div data-tabs-content>
  <div data-tab>
    Content for the first tab
  </div>
  <div data-tab>
    Content for the second tab
  </div>
</div>
```

### 3. Call
```javascript
const tabs = new Tabs()
```

## Features
Containers and tabs are binding to each other in the order they follow, but you can associate them by name.

By default, the first tab becomes active, but you can set any one by adding the necessary class and `hidden` attribute.

```html
<ul data-tabs="tabs-name">
  <li class="_is-active" data-tab="tab-1">
    tab 1
  </li>
  <li data-tab="tab-2">
    tab 2
  </li>
</ul>

<div data-tabs-content="tabs-name">
  <div data-tab="tab-1">
    Content for the first tab
  </div>
  <div data-tab="tab-2" hidden>
    Content for the second tab
  </div>
</div>
```

You can insert tabs into each other.

## Options

| Option | Type | Description |
| --- | --- | --- |
| `activeClass` | String | Default: `'_is-active'`. <br> Class for active tab switcher. |
