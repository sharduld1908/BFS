import { Component, OnInit , ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Graph } from 'src/app/Graph/Graph';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild("mycanvas") mycanvas : ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    let canvas : HTMLCanvasElement = this.mycanvas.nativeElement;
    let context : CanvasRenderingContext2D = canvas.getContext("2d");

    // let node1 : Node = new Node(1,new Point(100,100));
    // let node2 : Node = new Node(2,new Point(150,200));
    // node1.draw(context);
    // node2.draw(context);

    // let edge : Edge = new Edge(node1._center,node2._center);
    // edge.draw(context);

    let graph : Graph = new Graph(context);

    graph.draw();
    graph.TraverseGraph();

  }
}
