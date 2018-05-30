import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';

const routes = [
  {path: 'landing', component: LandingComponent},
  // {path: 'index.html', component: TestAuthComponent},
  // {path: 'login', component: SmartAuthComponent},
  // {path: 'launch', component: SmartAuthComponent},
  // {path: 'landing', component: SmartLandingComponent},
   {path: '', redirectTo: 'landing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
