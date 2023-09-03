import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-active-missions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-missions.component.html',
  styleUrls: ['./active-missions.component.css'],
  host: {
    class: "p-2"
  }
})
export class ActiveMissionsComponent {

}
