import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {LandingComponent} from './landing/landing.component';
import {PatientInfoComponent} from './testing-phase/patient-info/patient-info.component';
import {JourneyMapComponent} from './journey-map-main/journey-map/journey-map.component';
import {LearningComponent} from './learning-main/learning/learning.component';
import {CareTeamComponent} from './care-team-main/care-team/care-team.component';
import {NicViewComponent} from './nic-view/nic-view.component';
import {StartComponent} from './auth-stuff/start/start.component';
import { IframetestComponent } from './testing-phase/iframetest/iframetest.component';
import { FlexlayouttestComponent } from './testing-phase/flexlayouttest/flexlayouttest.component';
import { PushNotificationPrefComponent } from './testing-phase/push-notification-pref/push-notification-pref.component';
import { NotificationChatComponent } from './testing-phase/notification-chat/notification-chat.component';
import { PatientDataComponent } from './landing/patient-data/patient-data.component';
import { JourneyMapDetailsComponent } from './journey-map-main/journey-map-details/journey-map-details.component';
import { DashboardCardToolbarComponent } from './landing/dashboard-card-toolbar/dashboard-card-toolbar.component';
import { JourneyMapMainComponent } from './journey-map-main/journey-map-main.component';
import { CareTeamMainComponent } from './care-team-main/care-team-main.component';
import { LearningMainComponent } from './learning-main/learning-main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChartsComponent } from './testing-phase/charts/charts.component';

import {SmartAuthModule} from './auth-stuff/smart-auth/smart-auth.module';
import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts';
import {ServiceWorkerModule} from '@angular/service-worker';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {AppRoutingModule} from './routing/app-routing.module';
import {MaterialImportsModule} from './imports/material-imports/material-imports.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import {JourneymapService} from './journey-map-main/journeymap.service';




const configErrMsg = `You have not configured and imported the Firebase SDK.
Make sure you go through the codelab setup instructions.`;

const bucketErrMsg = `Your Firebase Storage bucket has not been enabled. Sorry
about that. This is actually a Firebase bug that occurs rarely. Please go and
re-generate the Firebase initialization snippet (step 4 of the codelab) and make
sure the storageBucket attribute is not empty. You may also need to visit the
Storage tab and paste the name of your bucket which is displayed there.`;


if (!environment.firebaseConfig) {
  if (!environment.firebaseConfig.apiKey) {
    window.alert(configErrMsg);
  } else if (environment.firebaseConfig.storageBucket === '') {
    window.alert(bucketErrMsg);
  }
}




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PatientInfoComponent,
    JourneyMapComponent,
    LearningComponent,
    CareTeamComponent,
    NicViewComponent,
    StartComponent,
    IframetestComponent,
    FlexlayouttestComponent,
    PushNotificationPrefComponent,
    ChartsComponent,
    NotificationChatComponent,
    PatientDataComponent,
    JourneyMapDetailsComponent,
    DashboardCardToolbarComponent,
    JourneyMapMainComponent,
    CareTeamMainComponent,
    LearningMainComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SmartAuthModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('/firebase-messaging-sw.js')
  ],
  providers: [JourneymapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
