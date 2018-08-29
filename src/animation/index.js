import { Canvas, Circle, Rect } from '../../see'
var canvas = new Canvas({
  container: document.getElementById('container')
})
var element = new Circle({
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
  easing: 'Linear.None'
})
canvas.addElement(element)

canvas.addElement(
  new Rect({
    x: 70,
    y: 600,
    fill: 'pink',
    from: {
      w: 50,
      h: 50
    },
    to: {
      w: 100,
      h: 100
    },
    duration: 4000,
    easing: 'Elastic.InOut'
  })
)

canvas.draw()

// setTimeout(() => {
//   canvas.removeElement(element)
//   canvas.draw()
// }, 3000)
