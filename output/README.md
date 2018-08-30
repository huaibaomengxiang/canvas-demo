# canvas-kit
方便 canvas 绘图的工具箱

## Install
```bash
npm install canvas-kit
```

## Usage
```js
import { Eraser }  from 'canvas-kit'

new Eraser({
  container: document.getElementById('aa'),
  frontImg: require('../assets/eraser1.jpg'),
  backImg: require('../assets/eraser2.jpg')
})
```

## API
方法 | 描述
--- | ---
[getLocation](https://github.com/hamger/canvas-demo/tree/master/src/util) | 获得光标相对于 Element 元素的坐标

构造器 | 描述
--- | ---
[Eraser](https://github.com/hamger/canvas-demo/tree/master/src/eraser) | 快速实现橡皮擦效果
[Magnifier](https://github.com/hamger/canvas-demo/tree/master/src/magnifier) | 快速实现放大镜效果
[Net](https://github.com/hamger/canvas-demo/tree/master/src/net) | 快速实现网状粒子云效果

## Changelog
### 2018.8.15
> v0.1.8 添加 Net 构造器

### 2018.8.15
> v0.1.7 添加 getLocation 方法

### 2018.8.3
> v0.1.6 Eraser 构造器添加 callback 配置项和 reset 实例方法

> v0.1.5 添加 Magnifier 构造器

### 2018.8.2
> v0.1.4 添加 Eraser 构造器