import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-chartsmain',
  templateUrl: './chartsmain.component.html',
  styleUrls: ['./chartsmain.component.css']
})
export class ChartsmainComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'This has visual graphs of your child\'s weights' });

  }

}
