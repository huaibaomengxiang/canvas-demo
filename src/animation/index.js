import { Canvas, Element, Circle, Rect } from '../../see'
var canvas = new Canvas({
  container: document.getElementById('container')
})

var element = new Circle({
  r: 50,
  y: 100,
  x: 100,
  fill: '#999'
})
console.log(element instanceof Element)
canvas.addElement(element)

var element2 = new Rect({
  x: 200,
  y: 400,
  w: 60,
  h: 60,
  fill: 'green'
})

canvas.addElement(element2)

var element3 = new Rect({
  x: 300,
  y: 300,
  w: 80,
  h: 80,
  stroke: 'blue'
})

canvas.addElement(element3)

// canvas.addElement(
//   new Element('circle', {
//     r: 50,
//     from: {
//       x: 100,
//       y: 100
//     },
//     to: {
//       x: 300,
//       y: 300
//     },
//     duration: 1000,
//     easing: 'Quadratic.Out'
//   })
// )

// canvas.addElement(
//   new Element('circle', {
//     r: 30,
//     fill: 'pink',
//     from: {
//       x: 70,
//       y: 600
//     },
//     to: {
//       x: 300,
//       y: 400
//     },
//     duration: 1000,
//     easing: 'Quadratic.Out'
//   })
// )

canvas.draw()

// setTimeout(() => {
//   canvas.removeElement(element2)
//   canvas.draw()
// }, 2000)
