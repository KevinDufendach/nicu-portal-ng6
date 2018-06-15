import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LandingComponent} from '../landing/landing.component';
import {LearningComponent} from '../learning-main/learning/learning.component';
import {NicViewComponent} from '../nic-view/nic-view.component';
import {PatientInfoComponent} from '../testing-phase/patient-info/patient-info.component';
import {StartComponent} from '../auth-stuff/start/start.component';
import { IframetestComponent } from '../testing-phase/iframetest/iframetest.component';
import {FlexlayouttestComponent} from '../testing-phase/flexlayouttest/flexlayouttest.component';
import {ChartsComponent} from '../testing-phase/charts/charts.component';
import {NotificationChatComponent} from '../testing-phase/notification-chat/notification-chat.component';
import {JourneyMapMainComponent} from '../journey-map-main/journey-map-main.component';

import {JourneyMapDetailsComponent} from '../journey-map-main/journey-map-details/journey-map-details.component';
import {CareTeamMainComponent} from '../care-team-main/care-team-main.component';

const routes = [
  {path: 'dashboard', component: LandingComponent},
  {path: 'patientinfo', component: PatientInfoComponent},
  {path: 'journeymap', component: JourneyMapMainComponent},
  {path: 'journeymap/:id', component: JourneyMapDetailsComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'careteam', component: CareTeamMainComponent},
  {path: 'nicview', component: NicViewComponent},
  {path: 'start', component: StartComponent},
  {path: 'caringbridge', component: IframetestComponent},
  {path: 'gridtest', component: FlexlayouttestComponent},
  {path: 'chart', component: ChartsComponent},
  {path: 'notification', component: NotificationChatComponent},


  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'landing', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
