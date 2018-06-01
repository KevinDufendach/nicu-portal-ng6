import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MaterialImportsModule} from './material-imports/material-imports.module';
import { LandingComponent } from './landing/landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { JourneyMapComponent } from './journey-map/journey-map.component';
import { LearningComponent } from './learning/learning.component';
import { CareTeamComponent } from './care-team/care-team.component';
import { NicViewComponent } from './nic-view/nic-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PatientInfoComponent,
    JourneyMapComponent,
    LearningComponent,
    CareTeamComponent,
    NicViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
