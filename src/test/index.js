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
canvas.addElement(element)
console.log(element instanceof Element)

var element4 = new Circle({
  zIndex: -2,
  r: 50,
  y: 150,
  x: 150,
  fill: '#222'
})
canvas.addElement(element4)

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

canvas.draw()

setTimeout(() => {
  canvas.removeElement(element2)
  element3.attr({stroke: '#4F8'})
  canvas.draw()
}, 1600)
