export default class Circle {
  constructor (opt) {
    this.x = opt.x
    this.y = opt.y
    this.r = opt.r
    this.fill = opt.fill
    if (!this.fill) this.stroke = opt.stroke
  }
  draw (ctx) {
    ctx.save()
    ctx.beginPath()
    if (this.stroke) ctx.strokeStyle = this.stroke
    else ctx.fillStyle = this.fill || '#000'
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    if (this.stroke) ctx.stroke()
    else ctx.fill()
    ctx.restore()
  }
}
