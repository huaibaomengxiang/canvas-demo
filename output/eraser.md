```js
new Eraser(options)
```
生成一个橡皮擦效果，`options`为一个对象，接受如下配置：

key | value | isRequest | description
--- | --- | --- | ---
container | Element | 是 | 规定容器，该元素需要规定宽高
frontImg | String | 是 | 规定前面的图片地址
backImg | String | 是 | 规定后边的图片地址
radius | Number | 否 | 规定橡皮擦半径，默认 30（px）