import Element from '../element'
export default class Rect extends Element {
  constructor (opt) {
    super(opt)
    this.x = opt.x
    this.y = opt.y
    this.w = opt.w
    this.h = opt.h
    this.fill = opt.fill
    if (!this.fill) this.stroke = opt.stroke
  }
  draw (ctx) {
    ctx.save()
    if (this.stroke) {
      ctx.strokeStyle = this.stroke
      ctx.strokeRect(this.x, this.y, this.w, this.h)
    } else {
      ctx.fillStyle = this.fill || '#000'
      ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    ctx.restore()
  }
}
