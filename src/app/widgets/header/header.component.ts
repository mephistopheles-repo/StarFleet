import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourceValueComponent} from "./resource-value/resource-value.component";
import {ProgressValueComponent} from "./progress-value/progress-value.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ResourceValueComponent, ProgressValueComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

}
