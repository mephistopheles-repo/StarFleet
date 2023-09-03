import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  host: {
    class: "col-2"
  }
})
export class SidebarComponent {

}
