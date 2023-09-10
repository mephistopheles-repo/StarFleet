import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonutChartComponent} from "../../../../widgets/charts/donut-chart/donut-chart.component";

@Component({
  selector: 'app-global-activity',
  standalone: true,
  imports: [CommonModule, DonutChartComponent],
  templateUrl: './global-activity.component.html',
  styleUrls: ['./global-activity.component.css']
})
export class GlobalActivityComponent {

}
