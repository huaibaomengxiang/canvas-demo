import TWEEN from '@tweenjs/tween.js'
// let count = 0
// function animate (time) {
//   // console.log(count++)
//   requestAnimationFrame(animate)
//   TWEEN.update(time)
// }

function getVal (obj, key) {
  return key.split('.').reduce((obj, name) => obj[name], obj)
}

export default class Circle {
  constructor (opt) {
    if (opt.from && opt.to) {
      this.r = opt.attrs.r
      this.from = opt.from
      this.to = opt.to
      if (opt.motion) {
        this.duration = opt.motion.duration || 1000
        this.easing = opt.motion.easing || 'Quadratic.Out'
      }
    } else {
      this.x = opt.x
      this.y = opt.y
      this.r = opt.r
      this.fill = opt.fill
      if (!this.fill) this.stroke = opt.stroke
    }
  }
  draw (ctx) {
    if (this.from && this.to) {
      new TWEEN.Tween(this.from)
        .to(this.to, this.duration || 1000)
        .easing(getVal(TWEEN.Easing, this.easing || 'Quadratic.Out'))
        .onUpdate(obj => {
          ctx.clearRect(0, 0, 564, 780)
          ctx.beginPath()
          ctx.arc(obj.x, obj.y, this.r, 0, Math.PI * 2)
          ctx.fill()
        })
        .start()
      // Setup the animation loop.
      // requestAnimationFrame(animate)
    } else {
      ctx.save()
      ctx.beginPath()
      if (this.stroke) ctx.strokeStyle = this.stroke
      else ctx.fillStyle = this.fill || '#000'
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      if (this.stroke) ctx.stroke()
      else ctx.fill()
      ctx.restore()
    }
  }
}
