import { Point } from '../Geometry/Point';

export class Circle {
    protected radius : number;
    protected center : Point;
    protected id : number;
    protected color : string;

    constructor(center : Point,radius : number,id : number,color : string = "white") {
        this.radius = radius;
        this.center = center;
        this.id = id;
        this.color = color;
    }

    draw(context : CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.center.x,this.center.y,this.radius,0,2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.fillStyle = "black";
        context.fillText(this.id.toString(),this.center.x,this.center.y);
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.stroke();
        context.closePath();
    }

    changeColor(color : string) {
        this.color = color;
    }
}