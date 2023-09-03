import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-complete-missions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complete-missions.component.html',
  styleUrls: ['./complete-missions.component.css'],
  host: {
    class: "p-2"
  }
})
export class CompleteMissionsComponent {

}
