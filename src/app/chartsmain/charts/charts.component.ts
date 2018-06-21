import {AfterContentInit, Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../../auth-stuff/smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {FhirService} from '../../auth-stuff/fhir/fhir.service';
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
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.getPatient();
      }
    );
  }

  ngAfterContentInit() {
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
  }

  putWeightsInArray() {
    for (let i = 0; i < this.observationList.length; i++) {
      this.weightList.push(this.observationList[i].valueQuantity.value);
      this.lineChartLabels.push(this.observationList[i].effectiveDateTime);
    }
    this.weightList.reverse();
    this.lineChartLabels.reverse();
    console.log(this.weightList);
  }
  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i] = this.weightList;
        console.log(_lineChartData);
      }
    }
    // this.lineChartLabels = this.lineChartLabels2;
    // console.log(this.lineChartLabels2);
    console.log(this.lineChartLabels);
    this.lineChartData = _lineChartData[0];
  }
  // createLine(data) {
  //   data = this.weightList;
  //   this.svgWidth = 600, this.svgHeight = 400;
  //   this.margin = {top: 20, right: 20, bottom: 30, left: 50};
  //   this.width = this.svgWidth - this.margin.left - this.margin.right;
  //   this.height = this.svgHeight - this.margin.top - this.margin.bottom;
  //   this.svg = d3.select('svg')
  //     .attr('width', this.svgWidth)
  //     .attr('height', this.svgHeight);
  //   const g = this.svg.append('g')
  //     .attr('transform',
  //       'translate(' + this.margin.left + ',' + this.margin.top + ')'
  //     );
  //   const x = d3.scaleTime().rangeRound([0, this.width]);
  //   const y = d3.scaleLinear().rangeRound([this.height, 0]);
  //   this.line = d3.line()
  //     // .x(function (d) {
  //     //   return x(d.date);
  //     // })
  //     .y(function (d) {
  //       return y(d.value);
  //     });
  //   // x.domain(d3.extent(data, function (d) {
  //   //   return d.date;
  //   // }));
  //   y.domain(d3.extent(data, function (d) {
  //     return d.value;
  //   }));
  //   g.append('g')
  //     .attr('transform', 'translate(0,' + this.height + ')')
  //     .call(d3.axisBottom(x))
  //     .select('.domain');
  //   g.append('g')
  //     .call(d3.axisLeft(y))
  //     .append('text')
  //     .attr('fill', '#000')
  //     .attr('transform', 'rotate(-90)')
  //     .attr('y', 6)
  //     .attr('dy', '10px')
  //     .attr('text-anchor', 'end')
  //     .text('Price ($)');
  //   g.append('path')
  //     .datum(data)
  //     .attr('fill', 'none')
  //     .attr('stroke', 'steelblue')
  //     .attr('stroke-linejoin', 'round')
  //     .attr('stroke-linecap', 'round')
  //     .attr('stroke-width', 1.5)
  //     .attr('d', this.line);
  // }
  //   convert() {
  //     this.valueOne = this.weightList[0];
  //     console.log(typeof this.valueOne);
  //     this.valueTwo = this.weightList[1];
  //     this.valueThree = this.weightList[2];
  //     this.valueFour = this.weightList[3]; // convert string to number
  // }
}
// this.weightList.push(obs.valueQuantity);
