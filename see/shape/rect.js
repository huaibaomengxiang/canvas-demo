import Element from '../element'

export default class Rect extends Element {
  constructor (opt) {
    super(opt)
    if (this.opt.to) this.move()
  }
  draw (ctx) {
    let opt = this.opt
    ctx.save()
    if (opt.stroke) {
      ctx.strokeStyle = opt.stroke
      ctx.strokeRect(opt.x, opt.y, opt.w, opt.h)
    } else {
      ctx.fillStyle = opt.fill || '#000'
      ctx.fillRect(opt.x, opt.y, opt.w, opt.h)
    }
    ctx.restore()
  }
}
