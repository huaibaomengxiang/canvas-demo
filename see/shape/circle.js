import Element from '../element'

export default class Circle extends Element {
  constructor (opt) {
    super(opt)
    if (this.opt.to) this.move()
  }
  draw (ctx) {
    let opt = this.opt
    ctx.save()
    ctx.beginPath()
    if (opt.stroke) ctx.strokeStyle = opt.stroke
    else ctx.fillStyle = opt.fill || '#000'
    ctx.arc(opt.x, opt.y, opt.r, 0, Math.PI * 2)
    if (opt.stroke) ctx.stroke()
    else ctx.fill()
    ctx.restore()
  }
}
