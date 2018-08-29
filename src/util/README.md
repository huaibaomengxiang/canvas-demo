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

### getLocation

```js
getLocation(container, e);
```

获得光标相对于 container 元素的坐标

| param     | value   | isRequest | description |
| --------- | ------- | --------- | ----------- |
| container | Element | 是        | dom 元素    |
| e         | Object  | 是        | 鼠标对象    |

> 返回值：表示坐标信息的对象

```
// 例子
{x: 12, y: 12}
```
