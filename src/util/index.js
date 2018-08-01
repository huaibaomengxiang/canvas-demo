export function drawLine (ctx, x1, y1, x2, y2) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.restore()
}
