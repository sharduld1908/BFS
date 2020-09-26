import { Line } from '../Geometry/Line';
import { Point } from '../Geometry/Point';

export class Edge extends Line {
    private toId : number;
    private fromId : number; 

    constructor(srtPt : Point,endPt : Point,context:CanvasRenderingContext2D,color : string  = "black",toId : number,fromId : number) {
        super(srtPt,endPt,context,color);
        this.toId = toId;
        this.fromId = fromId;
    }

    get _toId() {
        return this.toId;
    }

    get _fromId() {
        return this.fromId;
    }
}