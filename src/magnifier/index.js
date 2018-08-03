import './index.scss'
import Magnifier from './magnifier'

new Magnifier({
  container: document.getElementById('container'),
  img: require('../assets/magnifier.jpg')
})
