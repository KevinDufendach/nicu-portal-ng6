import { Component, OnInit } from '@angular/core';
// import {ChartData} from './chartDef';
// import {ChartService} from './chart.service';
// import {BreakpointObserver} from '@angular/cdk/layout';
import {FhirService} from '../auth/fhir/fhir.service';
import {EpicAuthService} from '../auth/smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import Observation = fhir.Observation;

@Component({
  selector: 'app-growthchart',
  templateUrl: './growthchart.component.html',
  styleUrls: ['./growthchart.component.css']
})
export class GrowthchartComponent implements OnInit {
  patient: Patient;
  observationList: Observation[] = [];
  weightList: any[] = [];
  // chartData: ChartData[];
  lineChartData: Array<any> =
    [
      {
        data: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10], label: 'Your Child'
      },
      {
        data:
          [
            2.355450986,
            2.799548641,
            3.614688072,
            4.34234145,
            4.992897896,
            5.575169066,
            6.096775274,
            6.564430346,
            6.984123338,
            7.361236116,
            7.700624405,
            8.006677447,
            8.283364855,
            8.534275028,
            8.762648582,
            8.971407287,
            9.163180317,
            9.340328068,
            9.504964014,
            9.658974787,
            9.804039109,
            9.941644878,
            10.07310549,
            10.19957488,
            10.32206165,
            10.4414422,
            10.55847309,
            10.67380261,
            10.78798156,
            10.90147346,
            11.01466395,
            11.12786972,
            11.24134752,
            11.3552982,
            11.46987977,
            11.58520959,
            11.70137143,
            11.75978387,
          ], label: '3rd Percentile'
      },
      {
        data:
          [
            3.150611082,
            3.597395573,
            4.428872952,
            5.183377547,
            5.866806254,
            6.484969167,
            7.043626918,
            7.548345716,
            8.004398775,
            8.416718775,
            8.789881892,
            9.128109523,
            9.43527941,
            9.714941801,
            9.970337596,
            10.20441778,
            10.41986276,
            10.61910138,
            10.80432929,
            10.97752662,
            11.14047457,
            11.2947714,
            11.44184727,
            11.58297823,
            11.7192993,
            11.85181666,
            11.98141892,
            12.10888759,
            12.23490671,
            12.36007175,
            12.48489772,
            12.60982671,
            12.73523417,
            12.86143776,
            12.98869905,
            13.11723187,
            13.24720657,
            13.31277633,
          ], label: 'Percentile 25'
      },
      {
        data:
          [
            3.530203168,
            4.003106424,
            4.879525083,
            5.672888765,
            6.391391982,
            7.041836432,
            7.630425182,
            8.162951035,
            8.644832479,
            9.081119817,
            9.476500305,
            9.835307701,
            10.16153567,
            10.45885399,
            10.7306256,
            10.97992482,
            11.20955529,
            11.4220677,
            11.61977698,
            11.80477902,
            11.9789663,
            12.14404334,
            12.30154103,
            12.45283028,
            12.59913494,
            12.74154396,
            12.88102276,
            13.01842382,
            13.1544966,
            13.28989667,
            13.42519408,
            13.56088113,
            13.69737858,
            13.83504622,
            13.97418199,
            14.1150324,
            14.25779618,
            14.32994444,
          ], label: 'Percentile 50'
      },
      {
        data:
          [
            4.17249339,
            4.718161283,
            5.728152752,
            6.638979132,
            7.460702368,
            8.202193202,
            8.871384112,
            9.47546616,
            10.02101374,
            10.51406421,
            10.96017225,
            11.36445045,
            11.73160184,
            12.06594792,
            12.37145331,
            12.65174864,
            12.91015164,
            13.14968707,
            13.37310558,
            13.58290165,
            13.78133058,
            13.9704249,
            14.15200982,
            14.3277181,
            14.49900418,
            14.6671577,
            14.83331632,
            14.99847794,
            15.16351231,
            15.32917196,
            15.49610261,
            15.66485286,
            15.83588308,
            16.00957526,
            16.18623873,
            16.36611917,
            16.54940494,
            16.6423691,
          ], label: 'Percentile 90'
      },
    ];
  public lineChartLabels: Array<any> =
    [
      0,
      0.5,
      1.5,
      2.5,
      3.5,
      4.5,
      5.5,
      6.5,
      7.5,
      8.5,
      9.5,
      10.5,
      11.5,
      12.5,
      13.5,
      14.5,
      15.5,
      16.5,
      17.5,
      18.5,
      19.5,
      20.5,
      21.5,
      22.5,
      23.5,
      24.5,
      25.5,
      26.5,
      27.5,
      28.5,
      29.5,
      30.5,
      31.5,
      32.5,
      33.5,
      34.5,
      35.5,
      36,
    ];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {}
      }]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: '#00AEC7',
      borderColor: '#E0457B',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
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
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient();
      }
    );
    this.getWeights();
  }

  getPatient() {
    this.fhirService.getPatient().subscribe(pt =>
      this.patient = pt
    );
  }

  getWeights() {
    this.fhirService.getObservations('29463-7')
      .subscribe(
        obs => {
          this.observationList.push(obs);
          console.log(this.observationList[0]);
        });
    // getChartData(): void {
    //   this.chartService.getChartData()
    //     .subscribe(chartData => this.chartData = chartData);
    //   console.log('yo');
    // }
  }
  putWeightsInArray() {
    for (let i = 0; i < this.observationList.length; i++) {
      this.weightList.push(this.observationList[i].valueQuantity.value);
    }
    this.weightList.reverse();
  }
  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[0] = this.weightList;
        console.log(_lineChartData);
      }
    }
    // this.lineChartLabels = this.lineChartLabels2;
    // console.log(this.lineChartLabels2);
    console.log(this.lineChartLabels);
    this.lineChartData = _lineChartData[0];
  }
}
