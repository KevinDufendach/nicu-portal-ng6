import {Injectable} from '@angular/core';
import {NullValidationHandler, OAuthService} from 'angular-oauth2-oidc-codeflow';
import {epicSmartAuthConfig} from './smart-config';

@Injectable({
  providedIn: 'root'
})
export class EpicAuthService {

  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  login(): void {
    this.oauthService.initAuthorizationCodeFlow();
  }

  completeLoginWithCode(): Promise<void> {
    if (!this.oauthService.getAccessToken()) {
      return this.oauthService.tryLogin()
        .then(_ => console.log(this.oauthService.getAccessToken()));
    }

    return new Promise<void>((resolve) => {
      resolve();
    });
  }

  getToken(): string {
    return this.oauthService.getAccessToken();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(epicSmartAuthConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setStorage(sessionStorage);
  }
}
