import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonutChartComponent} from "../../../../widgets/charts/donut-chart/donut-chart.component";

@Component({
  selector: 'app-corporation-stats',
  standalone: true,
    imports: [CommonModule, DonutChartComponent],
  templateUrl: './corporation-stats.component.html',
  styleUrls: ['./corporation-stats.component.css']
})
export class CorporationStatsComponent {

}
