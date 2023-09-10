import {Route} from "@angular/router";
import {FleetsComponent} from "./fleets.component";

export default [
  {
    path: '', component: FleetsComponent,
    children: [
      {path: '', loadComponent: () => import('./overview-fleet/overview-fleet.component')},
      {path: 'new', loadComponent: () => import('./edit-fleet/edit-fleet.component')},
      {path: 'edit', loadComponent: () => import('./edit-fleet/edit-fleet.component')},
    ]
  },
] as Route[];
