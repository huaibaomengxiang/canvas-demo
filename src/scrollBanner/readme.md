#移动端滚动banner

效果：banner随滚动变化(qq空间某些广告效果)

### 用法

```javascript
const a = new scrollBanner({
  id: 'canvas',
  img:[
    'http://pic.sc.chinaz.com/files/pic/pic9/201610/apic23847.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533564173887&di=c5eeeaed6e93d6342e6853681de57be0&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F141211%2F39-1412111Q305.jpg',
  ]
})
a.init()
```

#### options

| 字段 | default | type |
|------|------|-----|
| id  | 目标canvas的id | string|
| img    |    图片数组   |    arrayString    |
