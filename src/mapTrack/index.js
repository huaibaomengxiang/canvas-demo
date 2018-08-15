class mapTrack {
  constructor (params) {
    this.start = new BMap.Point(params.startLng, params.startLat) // 起始经纬度
    this.end = new BMap.Point(params.endLng, params.endLat) // 目的经纬度
    this.map = new BMap.Map(params.id)
    this.myIcon = new BMap.Icon(require('../assets/main-car.png'), new BMap.Size(40, 83), { // 小车图片
      imageOffset: new BMap.Size(0, 0), // 图片的偏移量。为了是图片底部中心对准坐标点。
    })
    this.driving = new BMap.DrivingRoute(this.map, {renderOptions: {map: this.map, autoViewport: true}}) // 驾车实例
  }
  caculateRotate (point1, point2) {
    const x1 = point1.lng
    const y1 = point1.lat
    const x2 = point2.lng
    const y2 = point2.lat

    if (y2 === y1 && x2 === x1) {
      return 0
    }

    if (y2 === y1 && x2 > x1) {
      return 90
    }

    if (y2 === y1 && x2 < x1) {
      return 270
    }

    if (x2 === x1 && y2 > y1) {
      return 360
    }

    if (x2 === x1 && y2 < y1) {
      return 180
    }

    if (x2 > x1 && y2 > y1) { // 第一象限(以x1,y1为坐标原点)
      return this.caculateAtan(x1, y1, x2, y2)
    }

    if (x2 > x1 && y2 < y1) { // 第二象限
      return 90 + this.caculateAtan(x1, y1, x2, y2)
    }

    if (x2 < x1 && y2 < y1) { // 第三象限
      return 180 + this.caculateAtan(x1, y1, x2, y2)
    }

    if (x2 < x1 && y2 > y1) { // 第四象限
      return 270 + this.caculateAtan(x1, y1, x2, y2)
    }
  }
  caculateAtan (x1, y1, x2, y2) {
    const x = Math.abs(x1 - x2)

    const y = Math.abs(y1 - y2)

    // console.log(x1,y1,x2,y2,180/(Math.PI/Math.atan(y/x)))

    return Math.floor(180 / (Math.PI / Math.atan(y / x)))
  }
  init () {
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 6)
    this.driving.search(this.start, this.end) // 显示一条公交线路
    this.run()
  }
  run () {
    var driving2 = new BMap.DrivingRoute(this.map) // 驾车实例
    driving2.search(this.start, this.end)

    driving2.setSearchCompleteCallback(() => {
      var pts = driving2.getResults().getPlan(0).getRoute(0).getPath() // 通过驾车实例，获得一系列点的数组
      var paths = pts.length // 获得有几个点

      // console.log(paths)

      var carMk = new BMap.Marker(pts[0], {icon: this.myIcon})

      this.map.addOverlay(carMk)
      // let lastAngle = caculateRotate(pts[10], pts[0])
      // let thisAngle = lastAngle
      const resetMkPoint = (i) => {
        carMk.setPosition(pts[i])
        // console.log(pts[i].lng,pts[i].lat)
        //   if (i === 0) {
        //     carMk.setRotation(lastAngle)
        //   } else {
        // console.log(i)
        //  thisAngle = caculateRotate(pts[i-10],pts[i])

        //  const j =thisAngle-lastAngle
        // if(j>30 && j<90){
        //     lastAngle = thisAngle
        carMk.setRotation(this.caculateRotate(this.start, this.end))
        // }
        // }

        if (i < paths) {
          setTimeout(function () {
            i += 10
            resetMkPoint(i)
          }, 10)
        }
      }
      setTimeout(function () {
        resetMkPoint(10)
      }, 10)
    })
  }
}

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
