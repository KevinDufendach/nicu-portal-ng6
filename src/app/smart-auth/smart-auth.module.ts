import { NgModule } from '@angular/core';
import {OAuthModule} from '../../angular-oauth2-oidc/angular-oauth-oidic.module';

@NgModule({
  imports: [
    OAuthModule.forRoot()
  ],
  declarations: []
})
export class SmartAuthModule { }
