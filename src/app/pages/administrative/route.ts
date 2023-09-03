import {Route} from "@angular/router";
import {DiplomacyComponent} from "./diplomacy/diplomacy.component";
import {OverviewComponent} from "./overview/overview.component";
import {StarMapComponent} from "./star-map/star-map.component";

export default [
  {path: '', component: OverviewComponent},
  {path: 'diplomacy', component: DiplomacyComponent},
  {path: 'star-map', component: StarMapComponent},
] as Route[];
