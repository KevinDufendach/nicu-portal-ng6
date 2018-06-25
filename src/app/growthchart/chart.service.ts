import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ChartData} from './chartDef';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }
  getChartData(): Observable<ChartData[]> {
    const configJsonUrl = '/assets/JSON-files/percentileData.json';
    return this.http.get<ChartData[]>(configJsonUrl);
  }
}
