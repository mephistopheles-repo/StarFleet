import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuildSidebarComponent} from "./build-sidebar/build-sidebar.component";
import {BlueprintSidebarComponent} from "./blueprint-sidebar/blueprint-sidebar.component";

@Component({
  selector: 'app-development',
  standalone: true,
  imports: [CommonModule, BuildSidebarComponent, BlueprintSidebarComponent],
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css'],
  host: {
    class: "p-2"
  }
})
export class DevelopmentComponent {

}
