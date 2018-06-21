import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {JourneymapService} from '../journeymap.service';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-journey-map-details',
  templateUrl: './journey-map-details.component.html',
  styleUrls: ['./journey-map-details.component.css']
})
export class JourneyMapDetailsComponent implements OnInit {
  @Input() hero: Hero;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: JourneymapService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(this.id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

   getHeroDetail(id: number): Observable<Hero> {
    return of(HEROES[id]);
  }
}
