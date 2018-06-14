import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialImportsModule} from './material-imports/material-imports.module';
import {LandingComponent} from './landing/landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {JourneymapService} from './journeymap.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {PatientInfoComponent} from './patient-info/patient-info.component';
import {JourneyMapComponent} from './journey-map/journey-map.component';
import {LearningComponent} from './learning/learning.component';
import {CareTeamComponent} from './care-team/care-team.component';
import {NicViewComponent} from './nic-view/nic-view.component';
import {StartComponent} from './start/start.component';
import {SmartAuthModule} from './smart-auth/smart-auth.module';
import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { IframetestComponent } from './iframetest/iframetest.component';
import { FlexlayouttestComponent } from './flexlayouttest/flexlayouttest.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { PushNotificationPrefComponent } from './push-notification-pref/push-notification-pref.component';
import {ChartsModule} from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { NotificationChatComponent } from './notification-chat/notification-chat.component';

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
import { PatientDataComponent } from './patient-data/patient-data.component';
import { JourneyMapDetailsComponent } from './journey-map-details/journey-map-details.component';
import { DashboardCardToolbarComponent } from './landing/dashboard-card-toolbar/dashboard-card-toolbar.component';




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
