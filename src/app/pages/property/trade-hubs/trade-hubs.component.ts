import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-trade-hubs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trade-hubs.component.html',
  styleUrls: ['./trade-hubs.component.css'],
  host: {
    class: "p-2"
  }
})
export class TradeHubsComponent {

}
