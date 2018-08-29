> 绘制一个圆形

```js
var element = new Circle(options);
```

### options

| options.key | value | description         | default |
| ----------- | ----- | ------------------- | ------- |
| r   |  Number   | 规定圆形半径 | --      |
| x   |  Number   | 规定圆心x坐标 | --      |
| y   |  Number   | 规定圆心y坐标 | --      |
| fill / stroke |  String   | 规定颜色 |   `#000`   |

> 如果使用动画需要添加如下配置

| options.key | value | description         | default |
| ----------- | ----- | ------------------- | ------- |
| from | Object | 规定圆形的初始状态 | -- |
| to | Object | 规定圆形的最终状态 | -- |
| duration | Number | 规定动画持续时间 | `1000` |
| easeing | String | 规定动画缓动效果 | `Quadratic.Out` |

### example
```js
new Circle({
  r: 50,
  from: {
    x: 100,
    y: 100
  },
  to: {
    x: 300,
    y: 300
  },
  duration: 1000,
  easing: 'Linear.None'
})
```