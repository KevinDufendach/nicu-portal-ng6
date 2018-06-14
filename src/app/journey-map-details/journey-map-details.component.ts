import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {JourneymapService} from '../journeymap.service';
import {Hero} from './hero';
import {JourneyMapGoal} from '../journey-map-main/journey-map-goal';

@Component({
  selector: 'app-journey-map-details',
  templateUrl: './journey-map-details.component.html',
  styleUrls: ['./journey-map-details.component.css']
})
export class JourneyMapDetailsComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: JourneymapService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
