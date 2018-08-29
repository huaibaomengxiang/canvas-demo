import TWEEN from '@tweenjs/tween.js'
import Element from '../element'
import { getVal } from '../utils'

export default class Rect extends Element {
  constructor (
    opt = {
      from: {},
      duration: 1000,
      easing: 'Quadratic.Out'
    }
  ) {
    super(opt)
    this.attrs = Object.assign(opt, opt.from)
    if (this.attrs.to) this.move()
  }
  move () {
    let attrs = this.attrs
    new TWEEN.Tween(attrs.from)
      .to(attrs.to, attrs.duration)
      .easing(getVal(TWEEN.Easing, attrs.easing))
      .onUpdate(cur => {
        this.attrs = Object.assign(attrs, cur)
      })
      .start()
  }
  draw (ctx) {
    let attrs = this.attrs
    ctx.save()
    if (attrs.stroke) {
      ctx.strokeStyle = attrs.stroke
      ctx.strokeRect(attrs.x, attrs.y, attrs.w, attrs.h)
    } else {
      ctx.fillStyle = attrs.fill || '#000'
      ctx.fillRect(attrs.x, attrs.y, attrs.w, attrs.h)
    }
    ctx.restore()
  }
}
