import { Routes } from "@angular/router";
import { canActivate, hasCustomClaim } from "@angular/fire/auth-guard";

import { comingCandidatesComponent } from "../../pages/comingCandidates/comingCandidates.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";
import { StatisticsComponent } from "src/app/pages/statistics/statistics.component";
import { CandidatesComponent } from "src/app/pages/candidates/candidates.component";
import { SoloCandidateComponent } from "src/app/pages/solo-candidate/solo-candidate.component";
import { SettingsComponent } from "src/app/pages/settings/settings.component";


const adminOnly = () => hasCustomClaim('admin');

export const AdminLayoutRoutes: Routes = [
  { path: "comingCandidates", component: comingCandidatesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "settings", component: SettingsComponent },
  { path: 'istatistik', component: StatisticsComponent, ...canActivate(adminOnly) },
  { path: 'candidates', component: CandidatesComponent },
  { path: "candidates/:key",component : SoloCandidateComponent }
  
];
