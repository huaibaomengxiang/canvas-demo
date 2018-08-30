> 绘制一个矩形

```js
var element = new Rect(options);
```

### options

| options.key   | value  | description     | default |
| ------------- | ------ | --------------- | ------- |
| w             | Number | 规定矩形宽度    | --      |
| h             | Number | 规定矩形高度    | --      |
| x             | Number | 规定矩形 x 坐标 | --      |
| y             | Number | 规定矩形 y 坐标 | --      |
| fill / stroke | String | 规定颜色        | `#000`  |
| zIndex        | Number | 规定前后顺序    | `0`     |

> 如果使用动画需要添加如下配置

| options.key | value  | description        | default         |
| ----------- | ------ | ------------------ | --------------- |
| from        | Object | 规定圆形的初始状态 | --              |
| to          | Object | 规定圆形的最终状态 | --              |
| duration    | Number | 规定动画持续时间   | `1000`          |
| easeing     | String | 规定动画缓动效果   | `Quadratic.Out` |

### example

```js
new Rect({
  x: 70,
  y: 600,
  fill: "pink",
  from: {
    w: 50,
    h: 50
  },
  to: {
    w: 100,
    h: 100
  },
  duration: 4000,
  easing: "Elastic.InOut"
});
```
