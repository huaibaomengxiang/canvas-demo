#图片粒子化

先上个demo: [demo](https://huaibaomengxiang.github.io/page/example/dotImg.html) 

##用法
引入JS文件
```
<script src="https://huaibaomengxiang.github.io/page/js/dotImg.js"></script>  
```  
文件中是一个函数 DotImg(options);

### options配置字段
--------------------
| 字段 | 说明 | 类型 | 默认值 |
|------|------|-----|-------|
| id  | 目标canvas的id, 必填 | string  | 无 |    
| img | 要粒子化的图片 | 图片路径，可以是字符串 如：'../images/xxx.png',或者 require('../images/xxx.png)   | 无
| width | 目标元素的宽度 | number | window.innerWidth
| height | 目标元素的高度 | number | window.innerHeight
| radius | 鼠标的影响范围，范围跟值成正比 | number | 80
| speed  | 图片成型的速度，速度跟值成正比 | number | 100
| gapX   | 在X轴取粒子的间隙, 值越大，流畅性越好，但画面质量下降  | number | 2 
| gapY   | 在Y轴取粒子的间隙, 值越大，流畅性越好，但画面质量下降  | number | 2 
   
