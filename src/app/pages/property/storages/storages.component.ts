import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-storages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.css'],
  host: {
    class: "p-2"
  }
})
export class StoragesComponent {

}
