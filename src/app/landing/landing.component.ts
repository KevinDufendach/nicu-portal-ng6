import { Component, OnInit } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  token: string;

  constructor(private epicAuthService: EpicAuthService) { }

  ngOnInit() {
    this.epicAuthService.completeLoginWithCode()
      .then(_ => this.token = this.epicAuthService.getToken());
  }

}
