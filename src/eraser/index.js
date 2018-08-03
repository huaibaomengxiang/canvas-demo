import './index.scss'
import Eraser from './eraser.js'

var eraser = new Eraser({
  container: document.getElementById('container'),
  frontImg: require('../assets/eraser2.jpg'),
  backImg: require('../assets/eraser1.jpg'),
  callback: function () {
    console.log('擦完了')
  }
})

document.getElementById('reset').addEventListener('click', () => {
  eraser.reset()
})
