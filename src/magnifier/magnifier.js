// import { strokeLine, fillArc } from '../util'

class Magnifier {
  constructor (option) {
    this.container = option.container
    this.img = option.frontImg
    this.radius = option.radius || 30 // 放大镜半径
    this.init()
  }
}

export default Magnifier
