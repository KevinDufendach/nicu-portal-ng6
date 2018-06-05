import { Component, OnInit } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import {FhirApiEndpoint} from '../smart-auth/fhir-api-endpoint';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  endpoints: FhirApiEndpoint[];

  constructor(public epicAuthService: EpicAuthService) { }

  ngOnInit() {
  }

  getEndpoints(): void {
    this.epicAuthService.getEndpoints().subscribe(endpoints => this.endpoints = endpoints);
  }

  login(): void {
    this.epicAuthService.login();
  }
}
