import {Injectable} from '@angular/core';
import {baseSmartAuthConfig, epicSmartAuthConfig} from './smart-config';
import {OAuthService} from '../../angular-oauth2-oidc/oauth-service';
import {NullValidationHandler} from '../../angular-oauth2-oidc/token-validation/null-validation-handler';
import {FhirApiEndpoint} from './fhir-api-endpoint';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthConfig} from '../../angular-oauth2-oidc/auth.config';
import CapabilityStatement = fhir.CapabilityStatement;

@Injectable({
  providedIn: 'root'
})
export class EpicAuthService {
  constructor(public oauthService: OAuthService, private http: HttpClient) {
    // this.configureWithNewConfigApi(epicSmartAuthConfig);

    console.log('issuer: ' + this.oauthService.issuer);
  }

  login(): void {
    this.oauthService.initAuthorizationCodeFlow();
  }

  getEndpoints(): Observable<FhirApiEndpoint[]> {
    const endpointJsonUrl = '/assets/EndpointsJson.json';

    return this.http.get<FhirApiEndpoint[]>(endpointJsonUrl);
  }

  generateAuthConfig(endpoint: string): Observable<AuthConfig> {
    // const origEndpoint = 'https://boomertest.cchmc.org/fhir/api/FHIR/DSTU2/';
    const origEndpoint = 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/';

    endpoint = '/assets/open-epic-metadata.json';

    return new Observable<AuthConfig>(subscriber => {
      // get auth config from URI
      const config: AuthConfig = Object.assign({}, baseSmartAuthConfig);

      this.http.get<CapabilityStatement>(endpoint).subscribe((data: CapabilityStatement) => {
        config.issuer = origEndpoint; // TODO: When pulling from endpoint, remove this

        try {

          for (const ext of data.rest[0].security.extension[0].extension) {
            // console.log(ext);

            switch (ext.url) {
              case 'authorize':
                config.loginUrl = ext.valueUri;
                // console.log('loginUrl: ' + ext.valueUri);
                break;
              case 'token':
                config.tokenEndpoint = ext.valueUri;
                // console.log('tokenUrl: ' + ext.valueUri);
                break;
            }
          }

          this.configureWithNewConfigApi(config);
        } catch (e) {
          console.log(e);
        }
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

  private configureWithNewConfigApi(config: AuthConfig) {
    console.log('CONFIGURATION: ');
    console.log(config);

    this.oauthService.configure(config);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setStorage(sessionStorage);
  }
}
