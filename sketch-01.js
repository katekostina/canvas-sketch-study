const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005;
    context.strokeStyle = 'black';

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;

    let x, y;
    let redish = 123;
    let greenish = 104;

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (gap + w) * i;
        y = iy + (gap + h) * j;
  
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off/2, y + off/2, w - off, h - off);

          greenish = getRandomInt(256);
          redish = getRandomInt(256)

          context.fillStyle = `rgb(${redish}, ${greenish}, 238, 0.5)`;
          context.fill();
        }
      }
    }

    const artists = ['alegrova', 'aphex twin', 'aaa'];

    function listArtists(a) {
      for(let i = 0; i < artists.length; i++) {
        console.log(a[i]);
      }
    }
    listArtists(artists);
  };
};

canvasSketch(sketch, settings);
