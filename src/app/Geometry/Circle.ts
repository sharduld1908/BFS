import { Point } from '../Geometry/Point';

export class Circle {
    protected radius : number;
    protected center : Point;
    protected id : number;
    protected color : string;
    private context : CanvasRenderingContext2D;

    constructor(center : Point,radius : number,id : number,context : CanvasRenderingContext2D,color : string = "white") {
        this.radius = radius;
        this.center = center;
        this.id = id;
        this.color = color;
        this.context = context;
    }

    draw() {
        // this.context.clearRect(0,0,1500,700);
        this.context.beginPath();
        this.context.arc(this.center.x,this.center.y,this.radius,0,2*Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.fillStyle = "black";
        this.context.fillText(this.id.toString(),this.center.x,this.center.y);
        this.context.strokeStyle = "black";
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.closePath();
    }

    changeColor(color : string) {
        this.color = color;
    }
}