import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-create-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css'],
  host: {
    class: "p-2"
  }
})
export class CreateMissionComponent {

}
