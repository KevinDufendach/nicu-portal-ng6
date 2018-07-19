import {Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../auth/smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {FhirService} from '../auth/fhir/fhir.service';
import Observation = fhir.Observation;
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  patient: Patient;
  observationList: Observation[] = [];
  weightList: any[] = [];
  // medicationList: Medication[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private meta: Meta, public epicAuthService: EpicAuthService, public fhirService: FhirService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient();
        this.getObservations('29463-7');
        // this.getMedications();
        this.meta.addTag({ name: 'description', content: 'Contains your child\'s dashboard which is our main landing page' });
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

  // getMedications() {
  //   this.fhirService.getMedications().subscribe(
  //     med => {
  //       this.medicationList.push(med);
  //
  //     }
  //   );
  // }

  logOut() {
    this.epicAuthService.oauthService.logOut();
  }
}
