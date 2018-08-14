
// dom
class scrollBanner {
  constructor (params) {
    this.data = Object.assign({
      x: 70, // 覆盖圆起始x坐标
      y: 40, // 覆盖圆起始y坐标
      scrollMin: 28, // banner处于视图28-68开始变化
      scrollMax: 68,
    }, params)
    this.data.dom = document.getElementById(params.id)
    this.data.ctx = this.data.dom.getContext('2d')
    this.data.lastPercent = 0
  }
  // 加载图片
  getImage (src, index) {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.src = src
      img.oindex = index
      img.onload = () => {
        resolve(img)
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }
  draw (r) {
    let ctx = this.data.ctx
    ctx.restore()
    ctx.clearRect(0, 0, 800, 800)
    ctx.drawImage(this.data.imgObj[0], 0, 0, 300, 100)
    ctx.beginPath()
    ctx.arc(this.data.x, this.data.y, r, 0, Math.PI * 2, true)
    ctx.save()
    ctx.clip()
    ctx.drawImage(this.data.imgObj[1], 0, 0, 300, 100)
  }
  init () {
    Promise.all(this.data.imgs.map(it => this.getImage(it))).then((e) => {
      e.sort((a, b) => b.oindex - a.oindex)
      this.data.imgObj = e
      this.draw(0)
      window.onscroll = () => {
        // 图的中心距离视口顶部的距离占整个视口的百分比
        let percent = (((this.data.dom.offsetTop + this.data.dom.offsetHeight / 2) - window.scrollY) / window.innerHeight).toFixed(2) * 100
        if (percent > this.data.scrollMax && this.data.lastPercent < 68) {
          this.draw(0)
          this.data.lastPercent = percent
          return
        }
        if (percent < this.data.scrollMax && percent > this.data.scrollMin) {
          this.draw(
            6.5 * (this.data.scrollMax - percent)
          )
          this.data.lastPercent = percent
          return
        }
        if (percent < this.data.scrollMin && this.data.lastPercent > this.data.scrollMin) {
          this.draw(
            260
          )
          this.data.lastPercent = percent
        }
      }
    }).catch(err => {
      throw err
    })
  }
}

const a = new scrollBanner({
  id: 'canvas',
  imgs: [
    'http://pic.sc.chinaz.com/files/pic/pic9/201610/apic23847.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533564173887&di=c5eeeaed6e93d6342e6853681de57be0&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F141211%2F39-1412111Q305.jpg',
  ]
})
a.init()
