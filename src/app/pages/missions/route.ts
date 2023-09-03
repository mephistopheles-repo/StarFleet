import {Route} from "@angular/router";
import {ActiveMissionsComponent} from "./active-missions/active-missions.component";
import {CompleteMissionsComponent} from "./complete-missions/complete-missions.component";
import {CreateMissionComponent} from "./create-mission/create-mission.component";

export default [
  {path: 'active', component: ActiveMissionsComponent},
  {path: 'complete', component: CompleteMissionsComponent},
  {path: 'create', component: CreateMissionComponent},
] as Route[];
