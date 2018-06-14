import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JourneymapService} from '../../journeymap.service';
import {Hero} from '../../journey-map-details/hero';

@Component({
  selector: 'app-journey-map',
  templateUrl: './journey-map.component.html',
  styleUrls: ['./journey-map.component.scss']
})
export class JourneyMapComponent implements OnInit {
  heroes: Hero[];
  handsetTiles = [
    {text: '', cols: 1, rows: 1, img: '/assets/cchmc_building.jpg'},
    {text: 'Learn About the NICU', cols: 1, rows: 1, color: '#C6579A', icon: '', id: 1},
    {text: 'Understand my role in NICU', cols: 1, rows: 1, color: '#C6579A', icon: '', id: 2},
    {text: 'Learn about my Child\'s disgnosis ', cols: 1, rows: 1, color: '#C6579A', icon: '', id: 3},
    {text: 'Understand my Child\'s healthcare needs', cols: 1, rows: 1, color: '#00AEC7', icon: '', id: 4},
    {text: 'Learn about my Child\'s treatment', cols: 1, rows: 1, color: '#00AEC7', icon: '', id: 5},
    {text: 'Practice caregiver skills', cols: 1, rows: 1, color: '#00AEC7', icon: '', id: 6},
    {text: 'Make a discharge plan', cols: 1, rows: 1, color: '#00AEC7', icon: '', id: 7},
    {text: 'Finish my learning', cols: 1, rows: 1, color: '#C6579A', icon: '', id: 8},
    {text: 'Prepare for home', cols: 1, rows: 1, color: '#C6579A', icon: '', id: 9},
    {text: 'demonstrate my skills', cols: 1, rows: 1, color: '#C6579A', icon: '', id: 10},
    {text: 'Fill my child\'s medicines at the pharmacy', cols: 1, rows: 1, color: '#78BE20', icon: '', id: 11},
    {text: 'schedule follow up appointments', cols: 1, rows: 1, color: '#78BE20', icon: '', id: 12},
    {text: 'Learn who to call and when to call', cols: 1, rows: 1, color: '#78BE20', icon: '', id: 13},
    {text: '', cols: 1, rows: 1, color: '', icon: '/assets/Go-home.svg'},
  ];

  desktopTiles = [
    {text: '', cols: 1, rows: 2, color: '', img: '/assets/cchmc_building_square.jpg', icon: ''},
    {text: 'Learn About the NICU', cols: 1, rows: 2, color: '#C6579A', icon: '', id: 1},
    {text: 'Understand my role in NICU', cols: 1, rows: 2, color: '#C6579A', icon: '', id: 2},
    {text: 'Learn about my Child\'s disgnosis ', cols: 1, rows: 2, color: '#C6579A', icon: '', id: 3},
    {text: '', cols: 3, rows: 2, color: ''},
    {text: 'Understand my Child\'s healthcare needs', cols: 1, rows: 2, color: '#00AEC7', icon: '', id: 4},
    {text: 'Finish My Learning', cols: 1, rows: 2, color: '#A42C6C', icon: '', id: 5},
    {text: 'Make a discharge plan', cols: 1, rows: 2, color: '#00AEC7', icon: '', id: 6},
    {text: 'Practice caregiver skills', cols: 1, rows: 2, color: '#00AEC7', icon: '', id: 7},
    {text: 'Learn about my child\'s treatment', cols: 1, rows: 2, color: '#00AEC7', icon: '', id: 8},
    {text: 'Prepare for home', cols: 1, rows: 2, color: '#A42C6C', icon: '', id : 9},
    {text: '', cols: 2, rows: 2, color: ''},
    {text: '', cols: 1, rows: 2, color: '', icon: '/assets/Go-home.svg'},
    {text: 'demonstrate my skills', cols: 1, rows: 2, color: '#A42C6C', icon: '', id: 10},
    {text: 'Fill my child\'s medicines at the pharmacy', cols: 1, rows: 2, color: '#78BE20', icon: '', id: 11},
    {text: 'schedule follow up appointments', cols: 1, rows: 2, color: '#78BE20', icon: '', id: 12},
    {text: 'Learn who to call and when to call', cols: 1, rows: 2, color: '#78BE20', icon: '', id: 13},
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private heroService: JourneymapService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
