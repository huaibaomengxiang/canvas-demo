import { Draw, strokeRect, strokeArc } from '../util'

new Draw({
  container: document.getElementById('container'),
  draw: function () {
    var ctx = this.ctx
    // this.$fillRect(105, 105, 190, 190, 'red')
    // this.$storkeLine(1, 2, 100, 200)
    ctx.save()
    ctx.fillRect(10, 10, 100, 100)
    ctx.fillStyle = 'green'
    ctx.restore()
    ctx.fillStyle = 'red'
    ctx.fillRect(150, 75, 100, 100)
    strokeRect(ctx, 300, 300, 100, 100, 'blue')
    strokeArc(ctx, 100, 200, 30, 0, Math.PI * 0.8, {close: true})
  }
})
