import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-learning-main',
  templateUrl: './learning-main.component.html',
  styleUrls: ['./learning-main.component.css']
})
export class LearningMainComponent implements OnInit {

  constructor(private meta: Meta) { }
  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'Where you will learn all about different aspects of the NICU and your child\'s journey' });

  }
}
