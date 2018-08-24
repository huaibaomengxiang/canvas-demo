import Circle from './shape/circle'
import Rect from './shape/rect'

let id = 0
export default class Element {
  constructor (type, opts) {
    this.id = id++
    if (opts.from && opts.to) this.isMotion = true
    else this.isMotion = false

    if (type === 'circle') {
      this.main = new Circle(opts)
    }

    if (type === 'rect') {
      this.main = new Rect(opts)
    }
  }
}
