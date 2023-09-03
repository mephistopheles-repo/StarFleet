import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HeaderComponent} from "./widgets/header/header.component";
import {SidebarComponent} from "./widgets/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'StarFleet';

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }


}
