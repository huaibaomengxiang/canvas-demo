import Element from './element'
import TWEEN from '@tweenjs/tween.js'
import {arrSort} from './utils'
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
    window.onresize = this.resize.bind(this)
    this.ctx = canvas.getContext('2d')
  }
  resize () {
    this.canvas.width = this.container.clientWidth
    this.canvas.height = this.container.clientHeight
  }
  addElement (element) {
    if (element instanceof Element) {
      this.children.push(element)
    } else {
      throw Error('Function addElement only accept the instance of Element.')
    }
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
      requestAnimationFrame(this.animate.bind(this))
    } else {
      this.clear()
      arrSort(this.children, 'zIndex').forEach(child => {
        child.draw(this.ctx)
      })
    }
  }
  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  animate (time) {
    requestAnimationFrame(this.animate.bind(this))
    this.clear()
    arrSort(this.children, 'zIndex').forEach(child => {
      child.draw(this.ctx)
    })
    TWEEN.update(time)
  }
}
export default Canvas
