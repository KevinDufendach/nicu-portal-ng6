import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-journey-map-main',
  templateUrl: './journey-map-main.component.html',
  styleUrls: ['./journey-map-main.component.css']
})
export class JourneyMapMainComponent implements OnInit{

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'The steps that it takes to get through your NICU journey are on this page' });
  }
}

