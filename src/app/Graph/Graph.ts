import { Time } from '@angular/common';
import { Point } from '../Geometry/Point';
import { Edge } from './Egde';
import { Node } from './Node';


export class Graph {
    private nodes : Node[];
    private edges : Edge[];
    private adj_list: number[][];

    constructor(context : CanvasRenderingContext2D) {
        this.nodes = [
            new Node(0,new Point(100,100),context),
            new Node(1,new Point(300,300),context),
            new Node(2,new Point(100,300),context),
            new Node(3,new Point(300,100),context)
        ];

        this.edges = [
            //this.makeEdge(3,1),
            //this.makeEdge(1,2),
            this.makeEdge(0,2,context),
            this.makeEdge(3,0,context),
            //this.makeEdge(0,1),
            this.makeEdge(2,3,context)
        ];

        this.adj_list = [];

        for(let i = 0;i<this.nodes.length;i++) {
            this.adj_list[i] = [];
        }
    }

    draw() {
        for(let i = 0;i<this.edges.length;i++) {
            this.edges[i].draw();
        }
        for(let i = 0;i<this.nodes.length;i++) {
            this.nodes[i].draw();
        }
    }

    private makeEdge(id1 : number , id2 : number,context : CanvasRenderingContext2D,color : string = "black") : Edge {
        let node1 : Point = this.getNode(id1);
        let node2 : Point = this.getNode(id2);
        if(node1 == null || node2 == null) {
            return null;
        }
        return new Edge(node1,node2,context,color,id1,id2);
    }

    private getNode(id : number) : Point {
        for(let i = 0;i<this.nodes.length;i++) {
            if(this.nodes[i]._id == id) {
                return this.nodes[i]._center;
            }
        }
        return null;
    }

    private initialiseAdjList()
    {
        for(let i=0;i<this.edges.length;i++)
        {
            let x = this.edges[i]._toId;
            let y = this.edges[i]._fromId;
            this.adj_list[x].push(y);
            this.adj_list[y].push(x);
        }
        console.log(this.adj_list);
    }
    private dfs(node: number, visited: Array<boolean>)
    {
        visited[node] = true;
        // call color function pass visited color green if true
        this.nodes[node].changeColor("green");
        this.nodes[node].draw();
        for(let i=0;i<this.adj_list[node].length;i++)
        {
            let y = this.adj_list[node][i];
            if(visited[y] == false)
            {
                this.dfs(y,visited);
            }
        }
    }
    public TraverseGraph()
    {
        let graphSize:number = this.nodes.length;
        this.initialiseAdjList();
        let visited : boolean[] = []
        for(let i=0;i<this.nodes.length;i++)
        {
            visited.push(false);
        }
        this.dfs(0,visited);
        console.log(visited);
    }
}