// afakmf
export function strokeLine (ctx, x1, y1, x2, y2) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.restore()
}

export function fillArc (ctx, x, y, r, sAngle, eAngle, counterclockwise) {
  ctx.save()
  ctx.beginPath()
  ctx.arc(x, y, r, sAngle, eAngle, counterclockwise)
  ctx.fill()
  ctx.restore()
}
