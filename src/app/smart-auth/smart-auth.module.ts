import { NgModule } from '@angular/core';
import {OAuthModule} from 'angular-oauth2-oidc-codeflow';

@NgModule({
  imports: [
    OAuthModule.forRoot()
  ],
  declarations: []
})
export class SmartAuthModule { }
