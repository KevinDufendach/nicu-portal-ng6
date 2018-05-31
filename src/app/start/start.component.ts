import { Component, OnInit } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private epicAuthService: EpicAuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.epicAuthService.login();
  }
}
