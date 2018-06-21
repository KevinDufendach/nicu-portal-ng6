import { Injectable } from '@angular/core';
import {CareTeamCard} from './careteamcard';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CareteamService {

  constructor(private http: HttpClient) { }
  getDesktopCardConfig(): Observable<CareTeamCard[]> {
    const configJsonUrl = '/assets/JSON-files/cardsConfig/careteam-cards-desktop.json';

    return this.http.get<CareTeamCard[]>(configJsonUrl);
  }
  getHandsetCardConfig(): Observable<CareTeamCard[]> {
    const configJsonUrl = '/assets/JSON-files/cardsConfig/careteam-cards-handset.json';

    return this.http.get<CareTeamCard[]>(configJsonUrl);
  }
}
