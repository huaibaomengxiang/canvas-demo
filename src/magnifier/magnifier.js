import { getLocation } from '../util'

class Magnifier {
  constructor (option) {
    this.container = option.container // 容器 dom 元素
    this.img = option.img // 需要放大的图片
    this.radius = option.radius || 200 // 放大镜半径
    this.scale = option.scale || 3 // 放大镜放大倍数
    this.init()
  }

  init () {
    let container = this.container
    let radius = this.radius
    let scale = this.scale
    // 创建背景图的画布
    let canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    container.appendChild(canvas)
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    // 当屏幕被伸缩时，使画布依然充满整个元素
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    let context = canvas.getContext('2d')

    // 创建放大镜的画布
    let canvasM = document.createElement('canvas')
    canvasM.id = 'canvasM'
    container.appendChild(canvasM)
    canvasM.style.display = 'none'
    canvasM.width = canvas.width * scale
    canvasM.height = canvas.height * scale
    let contextM = canvasM.getContext('2d')

    let img = new Image()
    img.src = this.img
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height)
      contextM.drawImage(img, 0, 0, canvasM.width, canvasM.height)
    }
    let isMouseDown
    container.addEventListener('mousedown', function (e) {
      isMouseDown = true
      e.preventDefault()
      drawCanvasWithMagnifier(getLocation(container, e))
    })
    container.addEventListener('mouseup', function (e) {
      isMouseDown = false
      e.preventDefault()
      drawCanvasWithMagnifier()
    })
    container.addEventListener('mouseout', function (e) {
      isMouseDown = false
      e.preventDefault()
      drawCanvasWithMagnifier()
    })
    container.addEventListener('mousemove', function (e) {
      e.preventDefault()
      if (isMouseDown) drawCanvasWithMagnifier(getLocation(container, e))
    })

    function drawCanvasWithMagnifier (point) {
      // 清空画布
      context.clearRect(0, 0, canvas.width, canvas.height)
      // 绘制原来的图片
      context.drawImage(img, 0, 0, canvas.width, canvas.height)
      if (point) drawMagnifier(point)
    }

    function drawMagnifier (point) {
      // 获取放大镜中的图片的中心位置
      let pointMx = point.x * scale
      let pointMy = point.y * scale

      context.save()
      context.beginPath()
      // 绘制放大镜区域
      context.arc(point.x, point.y, radius, 0, Math.PI * 2)
      context.stroke()
      // 剪切放大镜区域，所有之后的绘图都会被限制在该区域内
      context.clip()
      // sx, sy, sw, sh 相对于图片位置，dx, dy, dw, dh 相对于画布位置
      // 获取以(sx, sy)为起点，以(sw, sy)为宽高的区域内的图片，将其放到以(sx, sy)为起点，以(sw, sy)为宽高的区域内的画布
      context.drawImage(
        canvasM,
        pointMx - radius,
        pointMy - radius,
        2 * radius,
        2 * radius,
        point.x - radius,
        point.y - radius,
        2 * radius,
        2 * radius
      )
      context.restore()
    }
  }
}

export default Magnifier
