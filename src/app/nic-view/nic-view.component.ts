import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-nic-view',
  templateUrl: './nic-view.component.html',
  styleUrls: ['./nic-view.component.css']
})
export class NicViewComponent implements OnInit {

  constructor(private meta: Meta) { }
  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'Come to this page to see your kkd on a screen' });

  }

}
