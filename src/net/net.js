import { getLocation } from '../util'

class Net {
  constructor (option) {
    this.container = option.container // 容器 dom 元素
    this.dotCount = option.dotCount || 300 // 点的总数
    this.dotSize = option.dotSize || 0.5 // 点的半径
    this.dotScope = option.dotScope || 6000 // 两点之间连线的最大长度
    this.gatherSpeed = option.gatherSpeed || 0.03 // 向鼠标聚集的速度
    this.gatherScope = option.gatherScope || 20000 // 鼠标吸引范围的半径
    this.dotSpeed = option.dotSpeed || 1 // 点的移动速度
    this.bgColor = option.bgColor || '#fff'
    this.dotColor = option.dotColor || '#000'
    this.lineColor = option.lineColor || [0, 0, 0]
    this.init()
  }

  init () {
    let container = this.container
    var canvas = document.createElement('canvas')
    this.canvas = canvas
    container.appendChild(canvas)
    canvas.style.backgroundColor = this.bgColor
    this.resize()
    window.onresize = this.resize
    var ctx = canvas.getContext('2d')
    this.ctx = ctx
    this.bind()
    window.requestAnimationFrame(this.animate.bind(this))
  }

  animate () {
    var dots = this.dots
    var position = this.position
    var canvas = this.canvas
    var ctx = this.ctx

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 将代表鼠标的点添加进所有点的数组，产生一个用于比对距离的点数组
    var ndots = [position].concat(dots)
    dots.forEach(dot => {
      // 粒子位移
      dot.x += dot.xa
      dot.y += dot.ya
      // 遇到边界将加速度反向
      dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1
      dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1
      // 绘制点
      ctx.fillStyle = this.dotColor
      ctx.fillRect(
        dot.x - this.dotSize,
        dot.y - this.dotSize,
        2 * this.dotSize,
        2 * this.dotSize
      )
      // 循环比对该粒子与所有粒子间的距离，如果距离在范围内则绘制连线
      for (var i = 0; i < ndots.length; i++) {
        var d2 = ndots[i]
        if (dot === d2 || d2.x === null || d2.y === null) continue
        var xc = dot.x - d2.x
        var yc = dot.y - d2.y
        // 两个粒子之间的距离
        var dis = xc * xc + yc * yc
        // 距离比
        var ratio
        // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
        if (dis < d2.max) {
          // 如果是鼠标，则让粒子向鼠标的位置移动
          if (d2 === position && dis > d2.max / 2) {
            dot.x -= xc * this.gatherSpeed
            dot.y -= yc * this.gatherSpeed
          }
          // 计算距离比
          ratio = (d2.max - dis) / d2.max
          // 画线
          ctx.beginPath()
          ctx.lineWidth = ratio / 2
          ctx.strokeStyle = `rgba(${this.lineColor[0]}, ${this.lineColor[1]}, ${this.lineColor[2]}, ${ratio + 0.2})`
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(d2.x, d2.y)
          ctx.stroke()
        }
      }
      // 将已经计算过的粒子从点数组中删除，避免重复绘制连线
      ndots.splice(ndots.indexOf(dot), 1)
    })
    window.requestAnimationFrame(this.animate.bind(this))
  }

  resize () {
    this.canvas.width = this.container.clientWidth
    this.canvas.height = this.container.clientHeight
  }

  bind () {
    // 鼠标活动时，获取鼠标坐标
    this.position = { x: null, y: null, max: this.gatherScope }
    window.onmousemove = e => {
      var point = getLocation(this.canvas, e)
      this.position.x = point.x
      this.position.y = point.y
    }
    window.onmouseout = e => {
      this.position.x = null
      this.position.y = null
    }

    // 添加粒子
    // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
    this.dots = []
    for (var i = 0; i < this.dotCount; i++) {
      var x = Math.random() * this.canvas.width
      var y = Math.random() * this.canvas.height
      var xa = (Math.random() * 2 - 1) * this.dotSpeed
      var ya = (Math.random() * 2 - 1) * this.dotSpeed
      this.dots.push({
        x: x,
        y: y,
        xa: xa,
        ya: ya,
        max: this.dotScope
      })
    }
  }
}

export default Net
