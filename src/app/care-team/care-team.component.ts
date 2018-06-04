import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care-team',
  templateUrl: './care-team.component.html',
  styleUrls: ['./care-team.component.css']
})
export class CareTeamComponent implements OnInit {
  constructor() { }
  cards = [
    { cols: 2,
      rows: 2,
      color: 'lightblue',
      title: 'attending physician',
      subtitle: 'Neonatologist',
      content: 'the AP is an MD/DO who does stuff. A neonatologist has completed medical school, pedi...',
      image: '',
    },
    { cols: 2,
      rows: 2,
      color: 'NICU fellow',
      title: 'Neonatologist',
      subtitle: 'MD',
      content: 'Doctor with pediatric training who is completing a subspecialty fellowship',
    },
    { title: 'Card 3', cols: 2, rows: 2, color: 'lightpink' },
    { title: 'Card 4', cols: 2, rows: 2, color: 'lightblue' }
  ];
  ngOnInit() {
  }

}
