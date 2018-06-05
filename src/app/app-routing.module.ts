import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {JourneyMapComponent} from './journey-map/journey-map.component';
import {LearningComponent} from './learning/learning.component';
import {CareTeamComponent} from './care-team/care-team.component';
import {NicViewComponent} from './nic-view/nic-view.component';
import {PatientInfoComponent} from './patient-info/patient-info.component';
import {StartComponent} from './start/start.component';
import { IframetestComponent } from './iframetest/iframetest.component';
import {FlexlayouttestComponent} from './flexlayouttest/flexlayouttest.component';


const routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'patientinfo', component: PatientInfoComponent},
  {path: 'journeymap', component: JourneyMapComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'careteam', component: CareTeamComponent},
  {path: 'nicview', component: NicViewComponent},
  {path: 'start', component: StartComponent},
  {path: 'caringbridge', component: IframetestComponent},
  {path: 'gridtest', component: FlexlayouttestComponent},


  {path: '', redirectTo: 'start', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
