## util

方便 canvas 绘图的方法集

## Usage

```js
import { getLocation } from "canvas-kit";

container.addEventListener("click", e => {
  position = getLocation(canvas, e);
});
```

## API

| function    | params       | description                       |
| ----------- | ------------ | --------------------------------- |
| getLocation | (Element, e) | 获得光标相对于 Element 元素的坐标 |
