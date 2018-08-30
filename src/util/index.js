export function strokeLine (ctx, x1, y1, x2, y2) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.restore()
}

export function fillArc (ctx, x, y, r, sAngle, eAngle, extra = {}) {
  ctx.save()
  ctx.beginPath()
  if (extra.fillStyle) ctx.fillStyle = extra.fillStyle
  if (extra.counterclockwise) { ctx.arc(x, y, r, sAngle, eAngle, extra.counterclockwise) } else ctx.arc(x, y, r, sAngle, eAngle)
  ctx.fill()
  ctx.restore()
}

export function strokeArc (ctx, x, y, r, sAngle, eAngle, extra = {}) {
  ctx.save()
  ctx.beginPath()
  if (extra.strokeStyle) ctx.strokeStyle = extra.strokeStyle
  if (extra.counterclockwise) { ctx.arc(x, y, r, sAngle, eAngle, extra.counterclockwise) } else ctx.arc(x, y, r, sAngle, eAngle)
  if (extra.close) ctx.closePath()
  ctx.stroke()
  ctx.restore()
}

export function fillRect (ctx, x, y, w, h, style) {
  ctx.save()
  ctx.fillStyle = style
  ctx.fillRect(x, y, w, h)
  ctx.restore()
}

export function strokeRect (ctx, x, y, w, h, style) {
  ctx.save()
  ctx.strokeStyle = style
  ctx.strokeRect(x, y, w, h)
  ctx.restore()
}

// 获取相对于容器的位置
export function getLocation (container, event) {
  var hastouch = 'ontouchstart' in window
  var e = event || window.event
  var x = hastouch ? e.targetTouches[0].pageX : e.clientX
  var y = hastouch ? e.targetTouches[0].pageY : e.clientY
  return {
    x: x - container.getBoundingClientRect().left,
    y: y - container.getBoundingClientRect().top
  }
}

export class Draw {
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
