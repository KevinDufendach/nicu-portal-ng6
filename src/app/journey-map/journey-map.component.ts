import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-journey-map',
  templateUrl: './journey-map.component.html',
  styleUrls: ['./journey-map.component.css']
})
export class JourneyMapComponent implements OnInit {
  handsetTiles = [
    {text: '', cols: 1, rows: 1, color: 'white', icon: 'person'},
    {text: 'Learn About the NICU', cols: 1, rows: 1, color: '#C6579A', icon: ''},
    {text: 'Understand my role in NICU', cols: 1, rows: 1, color: '#C6579A', icon: ''},
    {text: 'Learn about my Child\'s disgnosis ', cols: 1, rows: 1, color: '#C6579A', icon: ''},
    {text: 'Understand my Child\'s healthcare needs', cols: 1, rows: 1, color: '#00AEC7', icon: ''},
    {text: 'Learn about my Child\'s treatment', cols: 1, rows: 1, color: '#00AEC7', icon: ''},
    {text: 'Practice caregiver skills', cols: 1, rows: 1, color: '#00AEC7', icon: ''},
    {text: 'Make a discharge plan', cols: 1, rows: 1, color: '#00AEC7', icon: ''},
    {text: 'Finish my learning', cols: 1, rows: 1, color: '#C6579A', icon: ''},
    {text: 'Prepare for home', cols: 1, rows: 1, color: '#C6579A', icon: ''},
    {text: 'demonstrate my skills', cols: 1, rows: 1, color: '#C6579A', icon: ''},
    {text: 'Fill my child\'s medicines at the pharmacy', cols: 1, rows: 1, color: '#78BE20', icon: ''},
    {text: 'schedule follow up appointments', cols: 1, rows: 1, color: '#78BE20', icon: ''},
    {text: 'Learn who to call and when to call', cols: 1, rows: 1, color: '#78BE20', icon: ''},
  ];

  desktopTiles = [
    {text: '', cols: 1, rows: 2, color: 'white', icon: 'person'},
    {text: 'Learn About the NICU', cols: 1, rows: 2, color: '#C6579A', icon: ''},
    {text: 'Understand my role in NICU', cols: 1, rows: 2, color: '#C6579A', icon: ''},
    {text: 'Learn about my Child\'s disgnosis ', cols: 1, rows: 2, color: '#C6579A', icon: ''},
    {text: '', cols: 3, rows: 2, color: 'white'},
    {text: 'Understand my Child\'s healthcare needs', cols: 1, rows: 2, color: '#00AEC7', icon: ''},
    {text: 'Finish My Learning', cols: 1, rows: 2, color: '#C6579A', icon: ''},
    {text: 'Make a discharge plan', cols: 1, rows: 2, color: '#00AEC7', icon: ''},
    {text: 'Practice caregiver skills', cols: 1, rows: 2, color: '#00AEC7', icon: ''},
    {text: 'Learn about my child\'s treatment', cols: 1, rows: 2, color: '#00AEC7', icon: ''},
    {text: 'Prepare for home', cols: 1, rows: 2, color: '#C6579A', icon: ''},
    {text: '', cols: 3, rows: 2, color: 'white'},
    {text: 'demonstrate my skills', cols: 1, rows: 2, color: '#C6579A', icon: ''},
    {text: 'Fill my child\'s medicines at the pharmacy', cols: 1, rows: 2, color: '#78BE20', icon: ''},
    {text: 'schedule follow up appointments', cols: 1, rows: 2, color: '#78BE20', icon: ''},
    {text: 'Learn who to call and when to call', cols: 1, rows: 2, color: '#78BE20', icon: ''},



  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }
}
