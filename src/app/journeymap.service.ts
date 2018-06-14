import { Injectable } from '@angular/core';
import {Hero} from './journey-map-details/hero';
import {HEROES} from './journey-map-details/mock-heroes';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class JourneymapService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    return of(HEROES.find(hero => hero.id === id));
  }
}
