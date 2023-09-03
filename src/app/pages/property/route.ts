import {Route} from "@angular/router";
import {DocksComponent} from "./docks/docks.component";
import {MilitaryComponent} from "./military/military.component";
import {StoragesComponent} from "./storages/storages.component";
import {TradeHubsComponent} from "./trade-hubs/trade-hubs.component";

export default [
  {path: 'docks', component: DocksComponent},
  {path: 'military', component: MilitaryComponent},
  {path: 'storages', component: StoragesComponent},
  {path: 'trade-hubs', component: TradeHubsComponent},
] as Route[];
