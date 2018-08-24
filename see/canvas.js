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
  addChild (child) {
    this.children.push(child)
  }
  draw () {
    this.clear()
    this.children.forEach(child => {
      child.draw(this.ctx)
    })
  }
  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
export default Canvas
