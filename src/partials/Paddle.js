import { SVG_NS } from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }

  render(svg) {
    let paddle = document.createElementNS(SVG_NS, 'rect');
    paddle.setAttributeNS(null, 'x', this.x);
    paddle.setAttributeNS(null, 'y', this.y);
    paddle.setAttributeNS(null, 'height', this.height);
    paddle.setAttributeNS(null, 'width', this.width);
    paddle.setAttributeNS(null, 'fill', '#fff');

    svg.appendChild(paddle);
  }
}
