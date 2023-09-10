import {Route} from "@angular/router";
import {MarketComponent} from "./market.component";

export default [
  {
    path: '', component: MarketComponent,
    children: [
      {path: '', loadComponent: () => import('./sell/sell.component')},
      {path: 'buy', loadComponent: () => import('./buy/buy.component')},
      {path: 'in-transit', loadComponent: () => import('./in-transit/in-transit.component')},
    ]
  },
] as Route[];
