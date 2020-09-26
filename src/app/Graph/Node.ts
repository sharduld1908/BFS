import { Circle } from '../Geometry/Circle';
import { Point } from '../Geometry/Point';

export class Node extends Circle {
    constructor(id : number,center : Point,context:CanvasRenderingContext2D,color : string = "white") {
        super(center,30,id,context,color);
    }

    get _id() {
        return this.id;
    }

    get _center() {
        return this.center;
    }
}