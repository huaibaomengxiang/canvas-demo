## Magnifier

Magnifier 构造器用于快速实现放大镜效果

## Usage

```js
import { Magnifier } from "canvas-kit";

new Magnifier(options);
```

[使用案例](./index.js)

## Options

`options`为一个对象，接受如下配置：

| key       | value   | isRequest | description                                        |
| --------- | ------- | --------- | -------------------------------------------------- |
| container | Element | 是        | 规定容器，该元素需要规定宽高                       |
| img       | String  | 是        | 规定需要展示的图片地址，该图片宽高应适合于容器宽高 |
| radius    | Number  | 否        | 规定放大镜半径，默认 200（px）                     |
| scale     | Number  | 否        | 规定放大镜的放大倍数，默认 3（倍）                 |
