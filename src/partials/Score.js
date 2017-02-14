export const SVG_NS = 'http://www.w3.org/2000/svg';


export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render(svg, player) {

        let score = document.createElementNS(SVG_NS, 'text');
        score.setAttributeNS(null, 'x', this.x);
        score.setAttributeNS(null, 'y', this.y);
        score.setAttributeNS(null, 'fill', 'black');
        score.setAttributeNS(null, 'font-size', this.size);
        score.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        score.innerHTML = player.score;

        svg.appendChild(score);
    }


}
