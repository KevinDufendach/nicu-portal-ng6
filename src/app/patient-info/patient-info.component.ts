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
  temperatureList: any[] = [];
  hemoglobinList: any[] = [];
  bilirubinList: any[] = [];
  smokingString: any[] = [];
  constructor(public epicAuthService: EpicAuthService, public fhirService: FhirService) {
  }

  ngOnInit() {
    // gets patient
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient();
      }
    );
    // code for weights
    this.fhirService.getObservations('29463-7').subscribe(
      obs => {
        this.observationList.push(obs);

        this.weightList.push(obs.valueQuantity);
      }
    );
    // code for temperature
    this.fhirService.getObservations('8310-5').subscribe(
      obs => {
        this.observationList.push(obs);

        this.temperatureList.push(obs.valueQuantity);
      }
    );
    // code for hemoglobin reading
    this.fhirService.getObservations('718-7').subscribe(
      obs => {
        this.observationList.push(obs);

        this.hemoglobinList.push(obs.valueQuantity);
      }
    );
    // code for bilirubin
    this.fhirService.getObservations('1975-2').subscribe(
      obs => {
        this.observationList.push(obs);

        this.bilirubinList.push(obs.valueQuantity);
      }
    );
    /* code for current smoking history (cant get it to work)
     this.fhirService.getObservations('72166-2').subscribe(
      obs => {
        this.observationList.push(obs);

        this.smokingString.push(obs._valueBoolean);
      }
    ); */
  }
  getPatient() {
    this.fhirService.getPatient().subscribe( pt =>
      this.patient = pt
    );
  }

}
