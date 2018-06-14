import { Injectable } from '@angular/core';
import {Hero} from './journey-map-details/hero';
import {HEROES} from './journey-map-details/mock-heroes';
import {JourneyMapGoal} from './journey-map-main/journey-map-goal';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JourneymapService {

  constructor(private http: HttpClient) { }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    return of(HEROES.find(hero => hero.id === id));
  }
  getDesktopTileConfig(): Observable<JourneyMapGoal[]> {
    const configJsonUrl = '/assets/journeymap-tiles-desktop.json';

    return this.http.get<JourneyMapGoal[]>(configJsonUrl);
  }
  getHandsetTileConfig(): Observable<JourneyMapGoal[]> {
    const configJsonUrl = '/assets/journeymap-tiles-handset.json';

    return this.http.get<JourneyMapGoal[]>(configJsonUrl);
  }
}
