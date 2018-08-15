# 小车沿地图上两点路径移动

### 示例

```javascript

let a = new mapTrack({
  startLng: 120.380967,
  startLat: 28,
  endLng: 110.424374,
  endLat: 28.014668,
  id: 'container'
})
window.onload = () => {
  a.init()
}

```

### options 

| 字段 | default | type |
|------|------|-----|
| id  | 目标canvas的id | string|
| startLng   |    起始地经度   |    Number   |
| startLat   |    起始地纬度   |    Number   |
| endLng   |    目的地经度   |    Number   |
| endLat   |    目的地纬度   |    Number   |



