import {Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../auth-stuff/smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {FhirService} from '../auth-stuff/fhir/fhir.service';
import Observation = fhir.Observation;
import Medication = fhir.Medication;
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  patient: Patient;
  observationList: Observation[] = [];
  weightList: any[] = [];
  medicationList: Medication[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(public epicAuthService: EpicAuthService, public fhirService: FhirService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient();
        this.getObservations('29463-7');
        this.getMedications();
      }
    );
  }

  getPatient() {
    this.fhirService.getPatient().subscribe( pt =>
      this.patient = pt
    );
  }

  getObservations(code) {
    this.fhirService.getObservations(code).subscribe(
      obs => {
        this.observationList.push(obs);

        this.weightList.push(obs.valueQuantity);
      }
    );
  }

  getMedications() {
    this.fhirService.getMedications().subscribe(
      med => {
        this.medicationList.push(med);

        // this.medicationList.push(obs.valueQuantity);
      }
    );
  }

  logOut() {
    this.epicAuthService.oauthService.logOut();
  }
}
