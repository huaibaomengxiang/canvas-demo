// import { Canvas, Circle } from '../../see'
import { Canvas, Circle, Rect } from '../../see'
var canvas = new Canvas({
  container: document.getElementById('container')
})

canvas.addElement(
  new Circle({
    r: 50,
    from: {
      x: 100,
      y: 100
    },
    to: {
      x: 300,
      y: 300
    },
    duration: 1000,
    easing: 'Quadratic.Out'
  })
)

canvas.addElement(
  new Rect({
    x: 70,
    y: 600,
    fill: 'pink',
    from: {
      w: 20,
      h: 20
    },
    to: {
      w: 100,
      h: 100
    },
    duration: 4000,
    easing: 'Quadratic.Out'
  })
)

canvas.draw()
