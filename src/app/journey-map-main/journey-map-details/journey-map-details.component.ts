import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {JourneymapService} from '../journeymap.service';
import {JourneyTile} from './tileClass';
import {journeyTileInfo} from './journeyTileInfo';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-journey-map-details',
  templateUrl: './journey-map-details.component.html',
  styleUrls: ['./journey-map-details.component.css']
})
export class JourneyMapDetailsComponent implements OnInit {
  @Input() hero: JourneyTile;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private journeymap: JourneymapService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTileInfo();
  }

  getTileInfo(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.journeymap.getTile(this.id)
      .subscribe(tileInfo => this.hero = tileInfo);
  }

  goBack(): void {
    this.location.back();
  }

   getHeroDetail(id: number): Observable<JourneyTile> {
    return of(journeyTileInfo[id]);
  }
}
