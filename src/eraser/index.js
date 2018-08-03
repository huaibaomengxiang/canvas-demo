import './index.scss'
import Eraser from './eraser.js'
// import kit from '../../package/canvas-kit'
// var { Eraser } = kit

var eraser1 = new Eraser({
  container: document.getElementById('aa'),
  frontImg: require('../assets/eraser1.jpg'),
  backImg: require('../assets/eraser2.jpg'),
  callback: function () {
    console.log('擦完了')
  }
})

var eraser2 = new Eraser({
  container: document.getElementById('bb'),
  frontImg: require('../assets/eraser2.jpg'),
  backImg: require('../assets/eraser1.jpg')
})

document.getElementById('reset').addEventListener('click', () => {
  eraser1.reset()
  eraser2.reset()
})
