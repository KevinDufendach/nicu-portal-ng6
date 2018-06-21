import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CareteamService} from '../careteam.service';
import {CareTeamCard} from '../careteamcard';

@Component({
  selector: 'app-care-team',
  templateUrl: './care-team.component.html',
  styleUrls: ['./care-team.component.css']
})
export class CareTeamComponent implements OnInit {
  desktopCards: CareTeamCard[];
  handsetCards: CareTeamCard[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private careteamservice: CareteamService ) {}
  ngOnInit() {
    this.getDesktopCardConfig();
    this.getHandsetCardConfig();
  }
  getDesktopCardConfig(): void {
    this.careteamservice.getDesktopCardConfig()
      .subscribe(desktopTileConfig => this.desktopCards = desktopTileConfig);
  }
  getHandsetCardConfig(): void {
    this.careteamservice.getHandsetCardConfig()
      .subscribe(handsetTileConfig => this.handsetCards = handsetTileConfig);
  }

}
