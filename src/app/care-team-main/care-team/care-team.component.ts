import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-care-team',
  templateUrl: './care-team.component.html',
  styleUrls: ['./care-team.component.css']
})
export class CareTeamComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver) {}
  desktopCards = [
    { cols: 1,
      rows: 1,
      color: 'lightblue',
      title: 'attending physician',
      subtitle: 'Neonatologist',
      content: 'the AP is an MD/DO who does stuff. A neonatologist has completed medical school, pedi...',
      image: '',
    },
    { cols: 1,
      rows: 1,
      color: 'lightgreen',
      title: 'Neonatologist',
      subtitle: 'MD',
      content: 'Doctor with pediatric training who is completing a subspecialty fellowship',
    },
    { title: 'Card 3', cols: 1, rows: 1, color: 'lightpink' },
    { title: 'Card 4', cols: 1, rows: 1, color: 'lightblue' },
    { title: 'Card 5', cols: 1, rows: 1, color: 'lightpink' },
    { title: 'Card 6', cols: 1, rows: 1, color: 'lightblue' },
  ];

  handsetCards = [
    { cols: 1,
      rows: 1,
      color: 'lightblue',
      title: 'attending physician',
      subtitle: 'Neonatologist',
      content: 'the AP is an MD/DO who does stuff. A neonatologist has completed medical school, pedi...',
      image: '',
    },
    { cols: 1,
      rows: 1,
      color: 'lightgreen',
      title: 'Neonatologist',
      subtitle: 'MD',
      content: 'Doctor with pediatric training who is completing a subspecialty fellowship',
    },
    { title: 'Card 3', cols: 1, rows: 1, color: 'lightpink' },
    { title: 'Card 4', cols: 1, rows: 1, color: 'lightblue' },
    { title: 'Card 5', cols: 1, rows: 1, color: 'lightpink' },
    { title: 'Card 6', cols: 1, rows: 1, color: 'lightblue' }
  ];
  ngOnInit() {
  }

}
