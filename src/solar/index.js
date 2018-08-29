/* eslint-disable */
import './index.scss';

function circle (options) {
  const { id } = options;
  const c = document.getElementById(id);
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  const ctx = c.getContext('2d');
  const vpy = c.height / 2;
  const vpx = c.width / 2;
  const arr = [];
  const stars = [
    {name: 'Mercuty', cycle: 87, startColor: '#a69697', endColor: '#5c3e40'},
    {name: 'Venus', cycle: 224, startColor: '#c4bbac', endColor: '#1f1315'},
    {name: 'Earth', cycle: 365, startColor: '#78b1e8', endColor: '#050c12'},
    {name: 'Mars', cycle: 686, startColor: '#cec9b6', endColor: '#76422d'},
    {name: 'Jupiter', cycle: 4332, startColor: '#c0a48e', endColor: '#322222'},
    {name: 'Saturn', cycle: 10759, startColor: '#f7f9e3', endColor: '#5c4533'},
    {name: 'Uranus', cycle: 30799, startColor: '#a7e1e5', endColor: '#19243a'},
    {name: 'Neptune', cycle: 60152, startColor: '#0661b2', endColor: '#1e3b73'},
  ]

  function drawBG() {
    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    bgCanvas.style.background = '#000';
    document.body.appendChild(bgCanvas);
    const bgCTX = bgCanvas.getContext('2d');
    bgCTX.beginPath();
    bgCTX.fillStyle = '#ffd800';
    bgCTX.shadowColor = '#f7d726';
    bgCTX.shadowBlur = 20;
    bgCTX.arc(vpx, vpy, 50, 0, Math.PI * 2);
    bgCTX.fill();
    bgCTX.closePath();

    bgCTX.shadowBlur = 0;
    bgCTX.shadowColor = null;
    bgCTX.strokeStyle = '#fff';
    for (let i = 0; i < 8; i++) {
      bgCTX.beginPath();
      bgCTX.arc(vpx, vpy, 100 + i * 50, 0, Math.PI * 2);
      bgCTX.stroke();
      bgCTX.closePath();
    }
  }

  function Star(x, y, r, cycle, startColor, endColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cycle = cycle;
    this.time = Math.random() * cycle;

    this.cacheCanvas = document.createElement('canvas');
    this.cacheCanvas.width = 2 * this.r;
    this.cacheCanvas.height = 2 * this.r;

    this.paint = function () {
      ctx.save();
      ctx.beginPath()
      this.color = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      this.color.addColorStop(0, startColor);
      this.color.addColorStop(1, endColor);
      ctx.fillStyle = this.color;
      ctx.translate(vpx, vpy);
      ctx.rotate(this.time * (360 / this.cycle) * Math.PI / 180);
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    this.move = function () {
      this.time += 1;
    }
  }

  function creatStar() {
    stars.forEach((v,i) => {
      let star = new Star(0, 100 + (50 * i), 10 + (i * 2), v.cycle, v.startColor, v.endColor);
      arr.push(star)
    })
    console.log(arr[0])
  }

  function paintStar() {
    arr.forEach(v => {
      v.paint();
    })
  }

  function stepStar() {
    arr.forEach(v => {
      v.move();
    })
  }


  drawBG();
  creatStar();
  function move() {
    ctx.clearRect(0, 0, c.width, c.height);
    paintStar();
    stepStar();
    requestAnimationFrame(move);
  }
  move();
}

circle({
  id: 'app'
})