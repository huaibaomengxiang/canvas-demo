import { strokeLine, fillArc, getLocation } from '../util'

class Eraser {
  constructor (option) {
    this.container = option.container // 容器 dom 元素
    this.frontImg = option.frontImg // 前面的图片地址
    this.backImg = option.backImg // 后面的图片地址
    this.radius = option.radius || 30 // 橡皮擦半径
    this.callback = option.callback || null // 擦完时的回调
    this.init()
  }

  init () {
    let container = this.container
    container.style.backgroundImage = `url(${this.backImg})`
    container.style.backgroundRepeat = `no-repeat`
    container.style.backgroundPosition = `center`
    container.style.backgroundSize = `cover`

    var canvas = document.createElement('canvas')
    this.canvas = canvas
    container.appendChild(canvas)
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    // 当屏幕被伸缩时，使画布依然充满整个元素
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.transition = `opacity 0.6s`
    var ctx = canvas.getContext('2d')
    this.ctx = ctx

    var img = new Image()
    img.src = this.frontImg
    img.onload = () => {
      // 使图片填充整个画布
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      this.tapClip()
    }
  }

  tapClip () {
    let container = this.container
    let radius = this.radius
    let callback = this.callback
    let ctx = this.ctx
    let canvas = this.canvas
    this.cleanCount = 0
    var hastouch = 'ontouchstart' in window,
      tapstart = hastouch ? 'touchstart' : 'mousedown',
      tapmove = hastouch ? 'touchmove' : 'mousemove',
      tapend = hastouch ? 'touchend' : 'mouseup'

    var x1,
      y1,
      timeout,
      totimes = 100,
      distance = 30
    var area
    var x2, y2
    ctx.lineCap = 'round' // 设置线条两端为圆弧
    ctx.lineJoin = 'round' // 设置线条转折为圆弧
    ctx.lineWidth = radius * 2
    // 通过设置 globalCompositeOperation 为 destination-out 来实现擦除的效果
    ctx.globalCompositeOperation = 'destination-out'
    let isMouseDown
    container.addEventListener(tapstart, (e) => {
      isMouseDown = true
      clearTimeout(timeout)
      e.preventDefault()
      area = getLocation(canvas, e)
      x1 = area.x
      y1 = area.y
      fillArc(ctx, x1, y1, radius, 0, 2 * Math.PI)
    })
    container.addEventListener(tapmove, (e) => {
      if (!isMouseDown) return
      clearTimeout(timeout)
      e.preventDefault()
      area = getLocation(canvas, e)
      x2 = area.x
      y2 = area.y
      strokeLine(ctx, x1, y1, x2, y2)
      // 重置开始距离
      x1 = x2
      y1 = y2
    })
    container.addEventListener(tapend, () => {
      isMouseDown = false
      // 检测擦除状态，延迟执行防止用户高频点击
      timeout = setTimeout(() => {
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
          this.cleanCount++
          canvas.style.opacity = '0'
          // 引入 cleanCount 记录擦完的次数，防止重复触发 callback
          if (this.cleanCount === 1 && callback) callback()
        }
      }, totimes)
    })
  }

  // 恢复到初始状态
  reset () {
    var img = new Image()
    img.src = this.frontImg
    img.onload = () => {
      this.cleanCount = 0
      // 使图片填充整个画布
      this.canvas.style.opacity = '1'
      this.ctx.globalCompositeOperation = 'source-over'
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.globalCompositeOperation = 'destination-out'
    }
  }
}

export default Eraser
