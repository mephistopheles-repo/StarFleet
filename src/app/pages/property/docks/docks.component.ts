import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-docks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './docks.component.html',
  styleUrls: ['./docks.component.css'],
  host: {
    class: "p-2"
  }
})
export class DocksComponent {

}
