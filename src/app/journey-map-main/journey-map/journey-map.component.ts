import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JourneymapService} from '../journeymap.service';
import {Hero} from '../journey-map-details/hero';
import {JourneyMapGoal} from '../journey-map-goal';

@Component({
  selector: 'app-journey-map',
  templateUrl: './journey-map.component.html',
  styleUrls: ['./journey-map.component.scss']
})
export class JourneyMapComponent implements OnInit {
  heroes: Hero[];
  desktopTiles: JourneyMapGoal[];
  handsetTiles: JourneyMapGoal[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private heroService: JourneymapService) {}

  ngOnInit() {
    this.getHeroes();
    this.getDesktopTileConfig();
    this.getHandsetTileConfig();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  getDesktopTileConfig(): void {
    this.heroService.getDesktopTileConfig()
      .subscribe(desktopTileConfig => this.desktopTiles = desktopTileConfig);
  }
  getHandsetTileConfig(): void {
    this.heroService.getHandsetTileConfig()
      .subscribe(handsetTileConfig => this.handsetTiles = handsetTileConfig);
  }
}
