import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-market',
  standalone: true,
    imports: [CommonModule, RouterModule],
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  host: {
    class: "p-2"
  }
})
export class MarketComponent {

}
