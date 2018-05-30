import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

const routes = [
  // {path: 'index.html', component: TestAuthComponent},
  // {path: 'login', component: SmartAuthComponent},
  // {path: 'launch', component: SmartAuthComponent},
  // {path: 'landing', component: SmartLandingComponent},
  // {path: '', redirectTo: '/launch', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
