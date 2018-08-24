import {Canvas, Circle} from '../../see'

var canvas = new Canvas({
  container: document.getElementById('container')
})

canvas.addChild(new Circle({
  x: 100,
  y: 100,
  r: 59
}))

canvas.draw()
