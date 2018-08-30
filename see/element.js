import TWEEN from '@tweenjs/tween.js'
import { getVal } from './utils'

let id = 0
export default class Element {
  constructor (
    opt = {
      zIndex: 0,
      from: {},
      duration: 1000,
      easing: 'Quadratic.Out'
    }
  ) {
    this.id = id++
    if (opt.to) this.isMotion = true
    else this.isMotion = false
    this.opt = opt
  }
  // 设置绘制属性
  attr (opt) {
    this.opt = Object.assign(this.opt, opt)
  }
  move () {
    let opt = this.opt
    new TWEEN.Tween(opt.from)
      .to(opt.to, opt.duration)
      .easing(getVal(TWEEN.Easing, opt.easing))
      .onUpdate(cur => {
        this.opt = Object.assign(opt, cur)
      })
      .start()
  }
  // 设置公共绘制样式
  generalAttr (ctx) {
    let opt = this.opt
    if (opt.stroke) ctx.strokeStyle = opt.stroke
    if (opt.fill) ctx.fillStyle = opt.fill
    if (opt.shadowColor) ctx.shadowColor = opt.shadowColor
    if (opt.shadowBlur) ctx.shadowBlur = opt.shadowBlur
    if (opt.shadowOffsetX) ctx.shadowOffsetX = opt.shadowOffsetX
    if (opt.shadowOffsetY) ctx.shadowOffsetY = opt.shadowOffsetY
    if (opt.opacity) ctx.globalAlpha = opt.opacity
    if (opt.globalCompositeOperation) ctx.globalCompositeOperation = opt.globalCompositeOperation
  }
}
