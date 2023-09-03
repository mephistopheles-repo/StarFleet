import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as PIXI from "pixi.js";
import {GalaxyMap} from "../../../scenes/GalaxyMap";

@Component({
  selector: 'app-star-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-map.component.html',
  styleUrls: ['./star-map.component.css'],
  host: {
    class: "p-2"
  }
})
export class StarMapComponent implements OnInit, AfterViewInit {

  @ViewChild("pixi")
  pixiContainer: any

  pixiApp?: PIXI.Application

  ngOnInit(): void {

    this.pixiApp = new PIXI.Application()


    let galaxyMap = new GalaxyMap(this.pixiApp);

    //galaxyMap.setTransform(500,500)

    this.pixiApp.stage.addChild(galaxyMap);

  }

  ngAfterViewInit(): void {
    let clientHeight = this.pixiContainer.nativeElement.clientHeight;
    let clientWidth = this.pixiContainer.nativeElement.clientWidth;

    this.pixiApp!!.renderer.resize(clientWidth, clientHeight);
    window.addEventListener('resize', (e) => {
      let clientHeight = this.pixiContainer.nativeElement.clientHeight;
      let clientWidth = this.pixiContainer.nativeElement.clientWidth;
      // @ts-ignore
      this.pixiApp.renderer.resize(clientWidth, clientHeight);
    });

    this.pixiContainer.nativeElement.appendChild(this.pixiApp!!.view)
  }
}
