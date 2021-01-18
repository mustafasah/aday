import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { comingCandidatesComponent } from "../../pages/comingCandidates/comingCandidates.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";
import { StatisticsComponent } from "src/app/pages/statistics/statistics.component";
import { CandidateModalFormComponent } from "src/app/pages/candidate-modal-form/candidate-modal-form.component";
import { CandidatesComponent } from "src/app/pages/candidates/candidates.component";
import { SoloCandidateComponent } from "src/app/pages/solo-candidate/solo-candidate.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule
  ],
  declarations: [
    comingCandidatesComponent,
    UserComponent,
    IconsComponent,
    MapComponent,
    StatisticsComponent,
    CandidateModalFormComponent,
    CandidatesComponent,
    SoloCandidateComponent
  ]
})
export class AdminLayoutModule {}
