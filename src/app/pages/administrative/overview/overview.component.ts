import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmallCardInfoComponent} from "./small-card-info/small-card-info.component";
import {ColumnChartComponent} from "../../../widgets/charts/column-chart/column-chart.component";
import {LineChartComponent} from "../../../widgets/charts/line-chart/line-chart.component";
import {PieChartComponent} from "../../../widgets/charts/pie-chart/pie-chart.component";
import {DonutChartComponent} from "../../../widgets/charts/donut-chart/donut-chart.component";
import {CorporationStatsComponent} from "./corporation-stats/corporation-stats.component";
import {GlobalActivityComponent} from "./global-activity/global-activity.component";
import {MyActivityLogComponent} from "./my-activity-log/my-activity-log.component";
import {GlobalActivityLogComponent} from "./global-activity-log/global-activity-log.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    SmallCardInfoComponent,
    ColumnChartComponent,
    LineChartComponent,
    PieChartComponent,
    DonutChartComponent,
    CorporationStatsComponent,
    GlobalActivityComponent,
    MyActivityLogComponent,
    GlobalActivityLogComponent
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  host: {
    class: 'p-2'
  }
})
export class OverviewComponent {

}
