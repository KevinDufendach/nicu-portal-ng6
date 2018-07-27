
import { Injectable } from '@angular/core';
import {JourneyTile} from './journey-map-details/tileClass';
import {journeyTileInfo} from './journey-map-details/journeyTileInfo';
import {JourneyMapGoal} from './journey-map-goal';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JourneymapService {
  constructor(private http: HttpClient) {
  }
  getTiles(): Observable<JourneyTile[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(journeyTileInfo);
  }
  getTile(id: number): Observable<JourneyTile> {

    // TODO: send the message _after_ fetching the hero
    return of(journeyTileInfo.find(journeyInfo => journeyInfo.id === id));
  }


  getDesktopTileConfig(): Observable<JourneyMapGoal[]> {
    const configJsonUrl = '/assets/JSON-files/tilesConfig/journeymap-tiles-desktop.json';
    return this.http.get<JourneyMapGoal[]>(configJsonUrl);
  }

  getHandsetTileConfig(): Observable<JourneyMapGoal[]> {
    const configJsonUrl = '/assets/JSON-files/tilesConfig/journeymap-tiles-handset.json';

    return this.http.get<JourneyMapGoal[]>(configJsonUrl);
  }
  getColors(): Observable<JourneyMapGoal[]> {
    const configJsonUrl = '/assets/JSON-files/tilesConfig/journeymap-tiles-desktop.json';
    return this.http.get<JourneyMapGoal[]>(configJsonUrl);
  }
}
