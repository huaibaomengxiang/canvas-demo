#粒子文字

先上个demo: [demo](https://huaibaomengxiang.github.io/page/example/dotworld.html) 

##用法
引入JS文件
```
<script src="https://huaibaomengxiang.github.io/page/js/dot.js"></script>  
```  
文件中是一个函数 DotsAnimation(options);

### options配置字段
--------------------
| 字段 | 说明 | 类型 | 默认值 |
|------|------|-----|-------|
| id  | 目标canvas的id, 必填 | string  | 无 |    
| arr | 绘制文字的数组，动画会按照数组顺序一一绘制 | Array | []  
| width | 目标元素的宽度 | number | window.innerWidth
| height | 目标元素的高度 | number | window.innerHeight
| gap | 取点间隙，数值越大粒子越少 | number | 11
| cr  | 粒子颜色，rgb中r的值     | number | 0
| cg  | 粒子颜色，rgb中g的值     | number | 0
| cb  | 粒子颜色，rgb中b的值     | number | 0