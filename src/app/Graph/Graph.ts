import { Point } from '../Geometry/Point';
import { Edge } from './Egde';
import { Node } from './Node';

export class Graph {
    private nodes : Node[];
    private edges : Edge[];

    constructor() {
        this.nodes = [
            new Node(1,new Point(100,100)),
            new Node(2,new Point(300,300)),
            new Node(3,new Point(100,300)),
            new Node(4,new Point(300,100))
        ];

        this.edges = [
            this.makeEdge(4,2),
            this.makeEdge(2,3),
            this.makeEdge(1,3),
            this.makeEdge(4,1),
            this.makeEdge(1,2),
            this.makeEdge(3,4)
        ];
    }

    draw(context : CanvasRenderingContext2D) {

        this.edges[5].changeColor("red");
        this.nodes[0].changeColor("red");
        for(let i = 0;i<this.edges.length;i++) {
            this.edges[i].draw(context);
        }
        for(let i = 0;i<this.nodes.length;i++) {
            this.nodes[i].draw(context);
        }
    }

    private makeEdge(id1 : number , id2 : number,color : string = "black") : Edge {
        let node1 : Point = this.getNode(id1);
        let node2 : Point = this.getNode(id2);
        if(node1 == null || node2 == null) {
            return null;
        }
        return new Edge(node1,node2,color);
    }

    private getNode(id : number) : Point {
        for(let i = 0;i<this.nodes.length;i++) {
            if(this.nodes[i]._id == id) {
                return this.nodes[i]._center;
            }
        }
        return null;
    }

}