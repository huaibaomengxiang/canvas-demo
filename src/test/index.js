import { strokeLine, fillRect, strokeRect, strokeArc } from '../util'

class Test {
  constructor (options) {
    this.container = options.container
    this.init()
    options.draw && options.draw.call(this)
    // this.draw.call(this)
    // this.start()
  }
  init () {
    var canvas = document.createElement('canvas')
    this.canvas = canvas
    this.container.appendChild(canvas)
    // 当屏幕被伸缩时，使画布依然充满整个元素
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    this.resize()
    window.onresize = this.resize
    this.ctx = canvas.getContext('2d')
  }
  resize () {
    this.canvas.width = this.container.clientWidth
    this.canvas.height = this.container.clientHeight
  }

  $fillRect (x, y, w, h, style) {
    fillRect(this.ctx, x, y, w, h, style)
  }

  $storkeLine (x1, y1, x2, y2) {
    strokeLine(this.ctx, x1, y1, x2, y2)
  }
}

new Test({
  container: document.getElementById('container'),
  draw: function () {
    var ctx = this.ctx
    // this.$fillRect(105, 105, 190, 190, 'red')
    // this.$storkeLine(1, 2, 100, 200)
    ctx.save()
    ctx.fillRect(10, 10, 100, 100)
    ctx.fillStyle = 'green'
    ctx.restore()
    ctx.fillStyle = 'red'
    ctx.fillRect(150, 75, 100, 100)
    strokeRect(ctx, 300, 300, 100, 100, 'blue')
    strokeArc(ctx, 100, 200, 30, 0, Math.PI * 0.8, {close: true})
  }
})
