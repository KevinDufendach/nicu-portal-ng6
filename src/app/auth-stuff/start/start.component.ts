import { Component, OnInit } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import {FhirApiEndpoint} from '../smart-auth/fhir-api-endpoint';
import {AuthConfig} from '../../../angular-oauth2-oidc/auth.config';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  endpoints: FhirApiEndpoint[];
  selectedEndpoint: FhirApiEndpoint;
  endpointConfig: AuthConfig;

  loading = false;
  ready = false;

  constructor(public epicAuthService: EpicAuthService) { }

  ngOnInit() {
    this.epicAuthService.getEndpoints().subscribe(endpoints => this.endpoints = endpoints);
  }

  getEndpointConfig(endpoint: FhirApiEndpoint) {
    console.log('getting endpoint config for: ' + endpoint.FHIRPatientFacingURI);
    this.loading = true;
    this.ready = false;

    this.epicAuthService.generateAuthConfig(endpoint.FHIRPatientFacingURI).subscribe(config => {
      console.log('configuration information retrieved');
      this.endpointConfig = config;
      this.loading = false;
      this.ready = true;
    });
  }

  login(): void {
    this.epicAuthService.login();
  }
}
