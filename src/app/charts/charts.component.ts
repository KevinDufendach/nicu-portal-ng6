import { Component, OnInit } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {FhirService} from '../fhir/fhir.service';
import Observation = fhir.Observation;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public lineChartLegend = true;
  public lineChartType = 'line';
  weightListValueOne;
  weightListValueTwo;
  weightListValueThree;
  weightListValueFour;
  patient: Patient;
  observationList: Observation[] = [];
  weightList: any[] = [];

  public lineChartData: Array<any> = [
    {data: [9, 9.5, 10.5, 11.7], label: 'Weights'},
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  constructor(public epicAuthService: EpicAuthService, public fhirService: FhirService) { }

  ngOnInit() {
    this.fhirService.getObservations('29463-7').subscribe(
      obs => {
        this.observationList.push(obs);

        this.weightList.push(obs.valueQuantity.value);
        console.log(this.weightList);
      }
    );
    console.log(this.weightList);
    this.weightListValueOne = this.weightList[0];
    console.log(this.weightListValueOne);
  }
}
