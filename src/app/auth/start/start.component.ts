import {Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import {FhirApiEndpoint} from '../smart-auth/fhir-api-endpoint';
import {AuthConfig} from '../../../angular-oauth2-oidc/auth.config';
import {Meta} from '@angular/platform-browser';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ThemeService} from '../../theme.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  message: string;
  endpoints: FhirApiEndpoint[] = [];
  selectedEndpoint: FhirApiEndpoint;
  endpointConfig: AuthConfig;

  loading = false;
  ready = false;

  constructor(
    private themeservice: ThemeService,
    public epicAuthService: EpicAuthService,
    private meta: Meta,
    private overlayContainer: OverlayContainer,
  ) {
    overlayContainer.getContainerElement().classList.add('custom-theme');
  }

  ngOnInit() {
    this.epicAuthService.getEndpoints().subscribe(endpoints => {
      console.log('adding endpoints');
      console.log(endpoints);
      this.endpoints = [...this.endpoints, ...endpoints];
    });
    this.meta.addTag({
      name: 'description',
      content: 'Login in through your child\'s hospital (a portal account is needed)'
    });
    this.themeservice.currentMessage.subscribe(message => this.message = message);
  }

  getEndpointConfig(endpoint: FhirApiEndpoint) {
    console.log('getting endpoint config for: ' + endpoint.FHIRPatientFacingURI);
    this.loading = true;
    this.ready = false;

    this.epicAuthService.generateAuthConfig(endpoint.FHIRPatientFacingURI).subscribe(config => {
      console.log('configuration information retrieved');
      this.endpointConfig = config;
      console.log(this.selectedEndpoint.OrganizationName);
      console.log(this.selectedEndpoint.FHIRPatientFacingURI);
      this.themeservice.changeMessage(this.selectedEndpoint.OrganizationName);
      this.loading = false;
      this.ready = true;
    });
  }

  login(): void {
    this.epicAuthService.login();
  }
}
