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

// 获取相对于容器的位置
export function getLocation (container, e) {
  var hastouch = 'ontouchstart' in window
  var x = hastouch ? e.targetTouches[0].pageX : e.clientX
  var y = hastouch ? e.targetTouches[0].pageY : e.clientY
  return {
    x: x - container.getBoundingClientRect().left,
    y: y - container.getBoundingClientRect().top
  }
}
