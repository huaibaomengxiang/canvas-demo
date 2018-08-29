### 波浪效果

```javascript

new Vshow.wave('#demo', {
    num: 3,
    // 不填充
    fill: false,
    // 绘制边框，即线条
    line: true
    // 三条线依次的颜色
    lineColor: ['rgba(0, 190, 112, .5)', 'rgba(0, 190, 112, .7)', 'rgba(0, 190, 112, .9)'],
    // 三条线依次的宽度
    lineWidth: [.5, .7, .9],
    // 三条线依次距左的偏移值
    offsetLeft: [2, 1, 0],
    // 三条线都向上偏移容器高度的 0.75 倍
    offsetTop: .75,
    // 三条线依次的波峰高度
    crestHeight: [10, 14, 18],
    // 三条线都只有两个波峰（波纹）
    rippleNum: 2,
    speed: .1
});

```