## Eraser

Eraser 构造器用于快速实现橡皮擦效果

## Usage

```js
import kit from "canvas-kit";
var { Eraser } = kit;

new Eraser(options);
```

[使用案例](./index.js)

## Options

`options`为一个对象，接受如下配置：

| key       | value    | isRequest | description                   |
| --------- | -------- | --------- | ----------------------------- |
| container | Element  | 是        | 规定容器，该元素需要规定宽高  |
| frontImg  | String   | 是        | 规定前面的图片地址            |
| backImg   | String   | 是        | 规定后边的图片地址            |
| radius    | Number   | 否        | 规定橡皮擦半径，默认 30（px） |
| callback  | Function | 否        | 规定擦完后的回调，默认无操作  |

## 实例方法

| function | description |
| -------- | ----------- |
| reset    | 重置画布    |
