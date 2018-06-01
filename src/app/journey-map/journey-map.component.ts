import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-map',
  templateUrl: './journey-map.component.html',
  styleUrls: ['./journey-map.component.css']
})
export class JourneyMapComponent implements OnInit {
  tiles = [
    {text: '', cols: 1, rows: 2, color: 'lightblue', icon: 'person'},
    {text: 'Learn About the NICU', cols: 1, rows: 2, color: 'lightgreen', icon: ''},
    {text: 'Understand my role in NICU', cols: 1, rows: 2, color: 'lightpink', icon: ''},
    {text: 'Learn about my Child\'s disgnosis ', cols: 1, rows: 2, color: '#DDBDF1', icon: ''},
    {text: '', cols: 3, rows: 2, color: 'white'},
    {text: 'Understand my Child\'s healthcare needs', cols: 1, rows: 2, color: 'lightblue', icon: ''},
    {text: 'Learn about my Child\'s treatment', cols: 1, rows: 2, color: 'lightgreen', icon: ''},
    {text: 'Practice caregiver skills', cols: 1, rows: 2, color: 'lightpink', icon: ''},
    {text: 'Make a discharge plan', cols: 1, rows: 2, color: 'lightblue', icon: ''},
    {text: 'Finish my learning', cols: 1, rows: 2, color: 'lightgreen', icon: ''},
    {text: 'Prepare for home', cols: 1, rows: 2, color: 'lightpink', icon: ''},
    {text: '', cols: 3, rows: 2, color: 'white'},
    {text: 'demonstrate my skills', cols: 1, rows: 2, color: 'lightblue', icon: ''},
    {text: 'Fill my child\'s medicines at the pharmacy', cols: 1, rows: 2, color: 'lightgreen', icon: ''},
    {text: 'schedule follow up appointments', cols: 1, rows: 2, color: 'lightpink', icon: ''},
    {text: 'Learn who to call and when to call', cols: 1, rows: 2, color: 'lightblue', icon: ''},



  ];
  constructor() { }

  ngOnInit() {
  }

}
