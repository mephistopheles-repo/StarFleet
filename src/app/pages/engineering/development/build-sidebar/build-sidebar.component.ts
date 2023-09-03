import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-build-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './build-sidebar.component.html',
  styleUrls: ['./build-sidebar.component.css']
})
export class BuildSidebarComponent {
  textType: string = 'Корпус';

  select(type: string) {
    this.textType = type
  }
}
