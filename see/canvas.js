import Element from './element'
import TWEEN from '@tweenjs/tween.js'
function animate (time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}

class Canvas {
  constructor (opt) {
    this.container = opt.container
    this.children = []
    this.init()
  }
  init () {
    var canvas = document.createElement('canvas')
    this.canvas = canvas
    this.container.appendChild(canvas)
    // 当屏幕被伸缩时，使画布依然充满整个元素
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    this.resize()
    window.onresize = this.resize
    this.ctx = canvas.getContext('2d')
  }
  resize () {
    this.canvas.width = this.container.clientWidth
    this.canvas.height = this.container.clientHeight
  }
  addElement (element) {
    if (element instanceof Element) {
      this.children.push(element)
    } else { throw Error('Function addElement only accept the instance of Element.') }
  }
  removeElement (element) {
    this.children.some((item, index) => {
      if (item.id === element.id) {
        this.children.splice(index, 1)
        return true
      }
    })
  }
  draw () {
    if (
      this.children.some(function (item) {
        return item.isMotion === true
      })
    ) {
      // new TWEEN.Tween({ x: 0, y: 0 })
      //   .to({ x: 300, y: 200 }, 1000)
      //   .easing(TWEEN.Easing.Quadratic.Out)
      //   .onUpdate(function (obj) {
      //     ctx.clearRect(0, 0, canvas.width, canvas.height)
      //     ctx.fillRect(obj.x, obj.y, 100, 100)
      //   })
      //   .start()

      // // Setup the animation loop.
      // this.clear()
      this.children.forEach(child => {
        child.main.draw(this.ctx)
      })
      requestAnimationFrame(animate)
    } else {
      this.clear()
      this.children.forEach(child => {
        child.main.draw(this.ctx)
      })
    }
  }
  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
export default Canvas
