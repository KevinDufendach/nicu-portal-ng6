import { Component, OnInit } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {Observable} from 'rxjs';
import {FhirService} from '../fhir/fhir.service';
import Observation = fhir.Observation;

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  patient: Patient;
  observationList: Observation[] = [];
  weightList: any[] = [];

  constructor(public epicAuthService: EpicAuthService, public fhirService: FhirService) {
  }

  ngOnInit() {
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient();
      }
    );
    this.fhirService.getObservations('29463-7').subscribe(
      obs => {
        this.observationList.push(obs);

        this.weightList.push(obs.valueQuantity);
      }
    );
  }
  getPatient() {
    this.fhirService.getPatient().subscribe( pt =>
      this.patient = pt
    );
  }

}
