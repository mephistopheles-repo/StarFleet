import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-diplomacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diplomacy.component.html',
  styleUrls: ['./diplomacy.component.css'],
  host: {
    class: "p-2"
  }
})
export class DiplomacyComponent {

}
