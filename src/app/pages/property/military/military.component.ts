import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-military',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './military.component.html',
  styleUrls: ['./military.component.css'],
  host: {
    class: "p-2"
  }
})
export class MilitaryComponent {

}
