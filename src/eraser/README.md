## Eraser

Eraser 构造器用于快速实现橡皮擦效果

## Usage

```js
import { Eraser }  from "canvas-kit";

new Eraser(options);
```

[使用案例](./index.js)

## Options

`options`为一个对象，接受如下配置：

| key       | value    | isRequest | description                                    |
| --------- | -------- | --------- | ---------------------------------------------- |
| container | Element  | 是        | 规定容器，该元素需要规定宽高                   |
| frontImg  | String   | 是        | 规定前面的图片地址，该图片宽高应适合于容器宽高 |
| backImg   | String   | 是        | 规定后边的图片地址，该图片宽高应适合于容器宽高 |
| radius    | Number   | 否        | 规定橡皮擦半径，默认 30（px）                  |
| callback  | Function | 否        | 规定擦完后的回调，默认无操作                   |

## 实例方法

| function | description |
| -------- | ----------- |
| reset    | 重置画布    |
