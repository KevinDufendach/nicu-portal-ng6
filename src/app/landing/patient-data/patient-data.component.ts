import {Component, Input, OnInit} from '@angular/core';
import Patient = fhir.Patient;

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {
  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
