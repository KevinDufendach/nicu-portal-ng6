import {Injectable} from '@angular/core';
import {baseSmartAuthConfig} from './smart-config';
import {OAuthService} from '../../angular-oauth2-oidc/oauth-service';
import {NullValidationHandler} from '../../angular-oauth2-oidc/token-validation/null-validation-handler';
import {FhirApiEndpoint} from './fhir-api-endpoint';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthConfig} from '../../angular-oauth2-oidc/auth.config';
import CapabilityStatement = fhir.CapabilityStatement;

@Injectable({
  providedIn: 'root'
})
export class EpicAuthService {
  constructor(public oauthService: OAuthService, private http: HttpClient) {
    const storedConfig = this.checkStorageForConfiguration();
    console.log(storedConfig);

    if (storedConfig) {
      this.configureWithNewConfigApi(storedConfig);
    }

    // this.configureWithNewConfigApi(epicSmartAuthConfig);

    console.log('issuer: ' + this.oauthService.issuer);

    console.log('state: ' + this.oauthService.state);
  }

  login(): void {
    this.oauthService.initAuthorizationCodeFlow();
  }

  getEndpoints(): Observable<FhirApiEndpoint[]> {
    const endpointJsonUrl = '/assets/EndpointsJson.json';

    return this.http.get<FhirApiEndpoint[]>(endpointJsonUrl);
  }

  getConfigMetadata(endpoint: string): Observable<CapabilityStatement> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json');

    return this.http.get<CapabilityStatement>(endpoint + 'metadata', {headers});
  }

  generateAuthConfig(endpoint: string): Observable<AuthConfig> {
    return new Observable<AuthConfig>(subscriber => {
      // get auth config from URI
      const config: AuthConfig = Object.assign({}, baseSmartAuthConfig);

      config.issuer = endpoint;

      this.getConfigMetadata(endpoint).subscribe((data: CapabilityStatement) => {
        try {
          for (const ext of data.rest[0].security.extension[0].extension) {
            switch (ext.url) {
              case 'authorize':
                config.loginUrl = ext.valueUri;
                break;
              case 'token':
                config.tokenEndpoint = ext.valueUri;
                break;
            }
          }

          this.configureWithNewConfigApi(config);
          subscriber.next(config);
          subscriber.complete();
        } catch (e) {
          console.log(e);
        }
      });
    });
  }

  completeLoginWithCode(): Promise<void> {
    console.log('trying login with code');

    // check if already logged in with valid access token
    if (!this.oauthService.hasValidAccessToken()) {
      return this.oauthService.tryLogin();
    }

    // if already logged in
    return new Promise<void>((resolve) => {
      resolve();
    });
  }

  private checkStorageForConfiguration(): AuthConfig | null {
    const configString = sessionStorage.getItem('nicu-portal-config');
    if (configString) {
      const authConfig: AuthConfig = Object.assign({}, JSON.parse(configString));
      return authConfig;
    }

    return null;
  }

  private storeConfiguraion(config: AuthConfig) {
    sessionStorage.setItem('nicu-portal-config', JSON.stringify(config));
  }

  private configureWithNewConfigApi(config: AuthConfig) {
    this.oauthService.configure(config);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setStorage(sessionStorage);

    this.storeConfiguraion(config);
  }

  protected createNonce(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 40; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
