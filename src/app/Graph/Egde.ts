import { Line } from '../Geometry/Line';
import { Point } from '../Geometry/Point';

export class Edge extends Line {
    constructor(srtPt : Point,endPt : Point,color : string  = "black") {
        super(srtPt,endPt,color);
    }
}