import {Injectable} from '@angular/core';
import {epicSmartAuthConfig} from './smart-config';
import {OAuthService} from '../../angular-oauth2-oidc/oauth-service';
import {NullValidationHandler} from '../../angular-oauth2-oidc/token-validation/null-validation-handler';
import {FhirApiEndpoint} from './fhir-api-endpoint';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicAuthService {
  serviceUri: '';

  constructor(public oauthService: OAuthService, private http: HttpClient) {
    this.configureWithNewConfigApi();
  }

  login(): void {
    this.oauthService.initAuthorizationCodeFlow();
  }

  getServiceUri(): string {
    return this.serviceUri;
  }

  getEndpoints(): Observable<FhirApiEndpoint[]> {
    const endpointJsonUrl = 'https://open.epic.com/MyApps/EndpointsJson';

    return new Observable<FhirApiEndpoint[]>(observer => {
      this.http.get(endpointJsonUrl).subscribe(data => {
        // const entries = data['Entries'];
        console.log('retrieved endpoint data');
        console.log(data);
      });
    });

  }

  completeLoginWithCode(): Promise<void> {
    // check if already logged in with valid access token
    if (!this.oauthService.hasValidAccessToken()) {
      return this.oauthService.tryLogin();
    }

    // if already logged in
    return new Promise<void>((resolve) => {
      resolve();
    });
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(epicSmartAuthConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setStorage(sessionStorage);
  }
}
