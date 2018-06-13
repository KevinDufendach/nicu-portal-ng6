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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PushNotificationPrefComponent } from './push-notification-pref/push-notification-pref.component';
import {ChartsModule} from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';


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
    PatientDataComponent,
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
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
