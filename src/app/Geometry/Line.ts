import { Point } from '../Geometry/Point';

export class Line {
    protected srtPt : Point;
    protected endPt : Point;
    protected color : string;
    private context : CanvasRenderingContext2D;

    constructor(srtPt : Point,endPt : Point,context : CanvasRenderingContext2D,color : string = "black") {
        this.srtPt = srtPt;
        this.endPt = endPt;
        this.color = color;
        this.context = context;
    }

    draw() {
        // this.context.clearRect(0,0,1500,700);
        this.context.beginPath();
        this.context.moveTo(this.srtPt.x,this.srtPt.y);
        this.context.lineTo(this.endPt.x,this.endPt.y);
        this.context.strokeStyle = this.color;
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.closePath();
    }

    changeColor(color : string) {
        this.color = color;
    }
}