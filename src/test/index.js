import { Canvas, Element } from '../../see'

var canvas = new Canvas({
  container: document.getElementById('container')
})

canvas.addElement(
  new Element('circle', {
    x: 100,
    y: 100,
    r: 59
  })
)

canvas.draw()
