## Net

Net 构造器用于快速实现网状粒子云效果

## Usage

```js
import { Net } from "canvas-kit";

new Net(options);
```

[使用案例](./index.js)

## Options

`options`为一个对象，接受如下配置：

| key         | value         | isRequest | description                             |
| ----------- | ------------- | --------- | --------------------------------------- |
| container   | Element       | 是        | 规定容器，该元素需要规定宽高            |
| dotCount    | Number        | 否        | 规定点的总数，默认 `300`                |
| dotSize     | Number        | 否        | 规定点的半径，默认 `0.5`                |
| dotScope    | Number        | 否        | 规定两点之间连线的最大长度，默认 `6000` |
| gatherScope | Number        | 否        | 规定鼠标吸引范围的半径，默认 `20000`    |
| gatherSpeed | Number        | 否        | 规定向鼠标聚集的速度，默认 `0.03`       |
| dotSpeed    | Number        | 否        | 规定点的移动速度，默认 `1`              |
| bgColor     | String        | 否        | 规定背景色，默认 `#fff`                 |
| dotColor    | String        | 否        | 规定点的颜色，默认 `#000`               |
| lineColor   | Array<Number> | 否        | 规定连线的颜色，默认 `[0, 0, 0]`        |
