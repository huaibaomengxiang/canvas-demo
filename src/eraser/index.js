import './index.scss'
import Eraser from './eraser.js'
// import kit from '../../package/canvas-kit'
// var { Eraser } = kit

new Eraser({
  container: document.getElementById('aa'),
  frontImg: require('../assets/eraser1.jpg'),
  backImg: require('../assets/eraser2.jpg')
})

new Eraser({
  container: document.getElementById('bb'),
  frontImg: require('../assets/eraser2.jpg'),
  backImg: require('../assets/eraser1.jpg')
})
