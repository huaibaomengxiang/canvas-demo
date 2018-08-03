import { strokeLine, fillArc, getLocation } from '../util'

class Eraser {
  constructor (option) {
    this.container = option.container // 容器 dom 元素
    this.frontImg = option.frontImg // 前面的图片地址
    this.backImg = option.backImg // 后面的图片地址
    this.radius = option.radius || 30 // 橡皮擦半径
    this.init()
  }

  init () {
    let container = this.container
    let radius = this.radius
    container.style.backgroundImage = `url(${this.backImg})`
    container.style.backgroundRepeat = `no-repeat`
    container.style.backgroundPosition = `center`
    container.style.backgroundSize = `cover`

    var x1,
      y1,
      timeout,
      totimes = 100,
      distance = 30

    var canvas = document.createElement('canvas')
    container.appendChild(canvas)
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    // 当屏幕被伸缩时，使画布依然充满整个元素
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.transition = `opacity 0.8s`
    var ctx = canvas.getContext('2d')
    var hastouch = 'ontouchstart' in window,
      tapstart = hastouch ? 'touchstart' : 'mousedown',
      tapmove = hastouch ? 'touchmove' : 'mousemove',
      tapend = hastouch ? 'touchend' : 'mouseup'

    var img = new Image()
    img.src = this.frontImg
    img.onload = function () {
      // 使图片填充整个画布
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      tapClip()
    }

    function tapClip () {
      var area
      var x2, y2
      ctx.lineCap = 'round' // 设置线条两端为圆弧
      ctx.lineJoin = 'round' // 设置线条转折为圆弧
      ctx.lineWidth = radius * 2
      // 通过设置 globalCompositeOperation 为 destination-out 来实现擦除的效果
      ctx.globalCompositeOperation = 'destination-out'
      container.addEventListener(tapstart, function (e) {
        clearTimeout(timeout)
        e.preventDefault()
        area = getLocation(canvas, e)
        x1 = area.x
        y1 = area.y
        fillArc(ctx, x1, y1, radius, 0, 2 * Math.PI)
        this.addEventListener(tapmove, tapmoveHandler)
        this.addEventListener(tapend, function () {
          // 清除移动监听
          this.removeEventListener(tapmove, tapmoveHandler)
          // 检测擦除状态，延迟执行防止用户高频点击
          timeout = setTimeout(function () {
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            var dd = 0

            // 遍历整个画布像素，为了减少计算量，每隔 distance 的像素检测一次
            for (var x = 0; x < imgData.width; x += distance) {
              for (var y = 0; y < imgData.height; y += distance) {
                var i = (y * imgData.width + x) * 4
                // imgData.data[i + 3]表示透明度，大于零表示未被刮开
                if (imgData.data[i + 3] > 0) {
                  dd++
                }
              }
            }
            // 如果未被刮开的面积小于百分之25，自动隐藏上层图片
            if (
              dd / ((imgData.width * imgData.height) / (distance * distance)) <
              0.25
            ) {
              canvas.style.opacity = '0'
            }
          }, totimes)
        })
        function tapmoveHandler (e) {
          clearTimeout(timeout)
          e.preventDefault()
          area = getLocation(canvas, e)
          x2 = area.x
          y2 = area.y
          strokeLine(ctx, x1, y1, x2, y2)
          // 重置开始距离
          x1 = x2
          y1 = y2
        }
      })
    }
  }
}

export default Eraser
