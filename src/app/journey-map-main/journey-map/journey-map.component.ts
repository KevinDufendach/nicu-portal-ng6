import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JourneymapService} from '../journeymap.service';
import {JourneyTile} from '../journey-map-details/tileClass';
import {JourneyMapGoal} from '../journey-map-goal';

@Component({
  selector: 'app-journey-map',
  templateUrl: './journey-map.component.html',
  styleUrls: ['./journey-map.component.scss']
})
export class JourneyMapComponent implements OnInit {
  journeyTileInfo: JourneyTile[];
  desktopTiles: JourneyMapGoal[];
  handsetTiles: JourneyMapGoal[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private journeymap: JourneymapService) {}

  ngOnInit() {
    this.getTileInfo();
    this.getDesktopTileConfig();
    this.getHandsetTileConfig();
  }

  getTileInfo(): void {
    this.journeymap.getTiles()
      .subscribe(tileInfo => this.journeyTileInfo = tileInfo);
  }

  getDesktopTileConfig(): void {
    this.journeymap.getDesktopTileConfig()
      .subscribe(desktopTileConfig => this.desktopTiles = desktopTileConfig);
  }

  getHandsetTileConfig(): void {
    this.journeymap.getHandsetTileConfig()
      .subscribe(handsetTileConfig => this.handsetTiles = handsetTileConfig);
  }
}
