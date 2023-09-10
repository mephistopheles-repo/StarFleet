import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MissionViewComponent} from "./mission-view/mission-view.component";

@Component({
  selector: 'app-active-missions',
  standalone: true,
    imports: [CommonModule, MissionViewComponent],
  templateUrl: './active-missions.component.html',
  styleUrls: ['./active-missions.component.css'],
  host: {
    class: "p-2"
  }
})
export class ActiveMissionsComponent {

}
