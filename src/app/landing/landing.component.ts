import {Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {FhirService} from '../fhir/fhir.service';
import Observation = fhir.Observation;
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(public epicAuthService: EpicAuthService, public fhirService: FhirService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient();
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

  logOut() {
    this.epicAuthService.oauthService.logOut();
  }
}
