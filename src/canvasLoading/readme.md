### 波浪loading效果

```javascript

var loading = new Vshow.waveLoading('#demo-1', {

    // 文本样式，同css一样，必须包含 [font size] 和 [font family]
    font: 'normal 900 16px Arial',

    smallFont: 'normal 900 14px Arial',

});

loading
    .onProgress(function (progress) {

        // 当进度大于等于 60 时，设置进度文本颜色为白色。
        if (progress >= 60) {
            loading.setOptions({
                color: '#fff'
            });
        }

        // 返回字符串，文本都应用为 font 样式，不应用 smallFont 相关样式。
        return '加载中...' + Math.ceil(progress) + '%';

    });

```