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
### 构造器
[Eraser构造器](https://github.com/hamger/canvas-demo/tree/master/src/eraser) 快速实现橡皮擦效果

[Magnifier构造器](https://github.com/hamger/canvas-demo/tree/master/src/magnifier) 快速实现放大镜效果

## Changelog
### 2018.8.3
> v0.1.5 添加 Magnifier 构造器

### 2018.8.2
> v0.1.4 添加 Eraser 构造器