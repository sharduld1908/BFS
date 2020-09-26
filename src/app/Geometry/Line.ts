import { Point } from '../Geometry/Point';

export class Line {
    protected srtPt : Point;
    protected endPt : Point;
    protected color : string;

    constructor(srtPt : Point,endPt : Point,color : string = "black") {
        this.srtPt = srtPt;
        this.endPt = endPt;
        this.color = color;
    }

    draw(context : CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(this.srtPt.x,this.srtPt.y);
        context.lineTo(this.endPt.x,this.endPt.y);
        context.strokeStyle = this.color;
        context.lineWidth = 2;
        context.stroke();
        context.closePath();
    }

    changeColor(color : string) {
        this.color = color;
    }
}