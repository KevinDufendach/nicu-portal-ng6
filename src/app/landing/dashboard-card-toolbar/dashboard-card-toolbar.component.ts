import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-card-toolbar',
  templateUrl: './dashboard-card-toolbar.component.html',
  styleUrls: ['./dashboard-card-toolbar.component.css']
})
export class DashboardCardToolbarComponent {
  @Input() title: string;
  @Input() link: string;
}
