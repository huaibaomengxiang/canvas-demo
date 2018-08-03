# canvas-kit
方便 canvas 绘图的工具箱

## Install
```bash
npm install canvas-kit
```

## Usage
```js
import kit from 'canvas-kit'
var { Eraser } = kit

new Eraser({
  container: document.getElementById('aa'),
  frontImg: require('../assets/eraser1.jpg'),
  backImg: require('../assets/eraser2.jpg')
})
```

## API
### 构造函数
#### Eraser
```js
new Eraser(options)
```
生成一个橡皮擦效果，`options`为一个对象，接受如下配置：

key | value | isRequest | description
--- | --- | --- | ---
container | Element | 是 | 接受一个 dom 元素，该元素需要规定宽高
frontImg | String | 是 | 规定前面的图片地址
backImg | String | 是 | 规定后边的图片地址
radius | Number | 否 | 规定橡皮擦半径，默认 30（px）

## Changelog
### 2018.8.2
> v0.1.4 添加 Eraser 构造器