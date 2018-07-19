import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardCardToolbarComponent} from '../landing/dashboard-card-toolbar/dashboard-card-toolbar.component';
import {PatientDataComponent} from '../landing/patient-data/patient-data.component';
import {JourneyMapComponent} from '../journey-map-main/journey-map/journey-map.component';
import {MaterialImportsModule} from '../imports/material-imports/material-imports.module';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from '../landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'dashboard',
    component: LandingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialImportsModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardCardToolbarComponent, PatientDataComponent, JourneyMapComponent],
  exports: [DashboardCardToolbarComponent, PatientDataComponent, JourneyMapComponent]
})
export class StartModuleModule { }
