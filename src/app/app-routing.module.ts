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
import {ChartsComponent} from './charts/charts.component';
import {NotificationChatComponent} from './notification-chat/notification-chat.component';


const routes = [
  {path: 'dashboard', component: LandingComponent},
  {path: 'patientinfo', component: PatientInfoComponent},
  {path: 'journeymap', component: JourneyMapComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'careteam', component: CareTeamComponent},
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
