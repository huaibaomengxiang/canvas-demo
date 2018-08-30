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
}
