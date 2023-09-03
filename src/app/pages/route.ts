import {Route} from "@angular/router";

export default [
  {path: '', redirectTo: '/administrative', pathMatch: 'full'},
  {path: './', redirectTo: '/administrative', pathMatch: 'full'},
  {path: 'administrative', loadChildren: () => import('./administrative/route')},
  {path: 'engineering', loadChildren: () => import('./engineering/route')},
  {path: 'market', loadChildren: () => import('./market/route')},
  {path: 'missions', loadChildren: () => import('./missions/route')},
  {path: 'property', loadChildren: () => import('./property/route')},
] as Route[];
