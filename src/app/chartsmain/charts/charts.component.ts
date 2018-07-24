import {AfterContentInit, Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../../auth/smart-auth/epic-auth.service';
import {FhirService} from '../../auth/fhir/fhir.service';
import Patient = fhir.Patient;
import Observation = fhir.Observation;


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterContentInit {
  patient: Patient;
  observationList: Observation[] = [];
  weightList: any[] = [];

  // svgWidth;
  // margin;
  // width;
  // height;
  // svg;
  // svgHeight;
  // line;
  //
  // valueOne;
  // valueTwo;
  // valueThree;
  // valueFour;
  lineChartData: Array<any> = [
    {data: [1, 3, 5, 7, 9], label: 'Your Child'},
  ];
  public lineChartLabels: Array<any> = [];

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
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(public epicAuthService: EpicAuthService, public fhirService: FhirService) {
  }

  ngOnInit() {
    this.initiate();

    // this.getWeights();
    // this.putWeightsInArray();
    // console.log(this.weightList);
    // this.updateChart();
  }

  async initiate() {
    await this.epicAuthService.completeLoginWithCode();
    await this.getPatient();
    await this.getWeights();
  }

  ngAfterContentInit() {

  }

  async getPatient() {
    await this.fhirService.getPatient().subscribe(pt => this.patient = pt);
  }

  async getWeights() {
    await this.fhirService.getObservations('29463-7')
      .subscribe(
        obs => {
          this.observationList.push(obs);
          console.log('putting in an observation');
        },
        error => console.log(error),
        () => {
          this.putWeightsInArray();
          console.log('weight are now in array');
          console.log(this.weightList);
          this.updateChart();
        }
      );
  }

  putWeightsInArray() {
    for (let i = 0; i < this.observationList.length; i++) {
      this.weightList.push(this.observationList[i].valueQuantity.value);
      this.lineChartLabels.push(this.observationList[i].effectiveDateTime);
    }
    this.weightList.reverse();
    this.lineChartLabels.reverse();
  }

  public updateChart(): void {
    console.log('updating chart');

    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i] = this.weightList;
      }
    }
    // this.lineChartLabels = this.lineChartLabels2;
    // console.log(this.lineChartLabels2);
    this.lineChartData = _lineChartData[0];
  }
}

// CDC WHO FENTON
