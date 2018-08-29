## see

轻巧的 canvas 可视化开发框架

## Usage

```js
import { Canvas, Circle } from "canvas-kit";

var canvas = new Canvas({
  container: document.getElementById("container")
});

canvas.addChild(
  new Circle({
    x: 100,
    y: 100,
    r: 59
  })
);

canvas.draw();
```

## Document
[文档地址](https://hamger.github.io/canvas-demo/#/)

## Changelog

### 2018.8.24

> v0.1.0 项目初始化
