import {Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {Observable} from 'rxjs';
import {FhirService} from '../fhir/fhir.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  patient: Patient;

  constructor(public epicAuthService: EpicAuthService, public fhirService: FhirService) {
  }

  ngOnInit() {
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient().subscribe(pt => this.patient = pt);
      }
    );
  }

  getPatient(): Observable<Patient> {
    return this.fhirService.getPatient();
  }

  logOut() {
    this.epicAuthService.oauthService.logOut();
  }
}
