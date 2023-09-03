import {Route} from "@angular/router";
import {DevelopmentComponent} from "./development/development.component";
import {ResearchComponent} from "./research/research.component";

export default [
  {path: 'development', component: DevelopmentComponent},
  {path: 'research', component: ResearchComponent},
] as Route[];
