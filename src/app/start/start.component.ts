import { Component, OnInit } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import {FhirApiEndpoint} from '../smart-auth/fhir-api-endpoint';
import {AuthConfig} from '../../angular-oauth2-oidc/auth.config';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  endpoints: FhirApiEndpoint[];
  selectedEndpoint: FhirApiEndpoint;
  endpointConfig: AuthConfig;

  constructor(public epicAuthService: EpicAuthService) { }

  ngOnInit() {
    this.epicAuthService.getEndpoints().subscribe(endpoints => this.endpoints = endpoints);
  }

  getEndpointConfig(endpoint: FhirApiEndpoint) {
    console.log('getting endpoint config for: ' + endpoint.FHIRPatientFacingURI);

    this.epicAuthService.generateAuthConfig(endpoint.FHIRPatientFacingURI).subscribe(config => this.endpointConfig = config);
  }

  login(): void {
    this.epicAuthService.login();
  }
}
