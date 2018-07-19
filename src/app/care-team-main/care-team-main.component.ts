import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-care-team-main',
  templateUrl: './care-team-main.component.html',
  styleUrls: ['./care-team-main.component.css']
})
export class CareTeamMainComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'This has information about your NICU care team.' });
  }
}
