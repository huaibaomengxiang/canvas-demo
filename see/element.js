let id = 0
export default class Element {
  constructor (opts) {
    this.id = id++
    if (opts.to) this.isMotion = true
    else this.isMotion = false
  }
}
