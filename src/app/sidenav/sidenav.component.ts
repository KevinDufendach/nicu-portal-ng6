import {Component, DoCheck, HostListener, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {EpicAuthService} from '../auth/smart-auth/epic-auth.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/index';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ThemeService} from '../theme.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, DoCheck {
  theme = 'cchmc-dev-theme';
  message: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private themeservice: ThemeService, private overlayContainer: OverlayContainer, private breakpointObserver: BreakpointObserver, public epicAuthService: EpicAuthService) {
      overlayContainer.getContainerElement().classList.add('cchmc-dev-theme');
  }

  ngOnInit() {
    this.theme = window.localStorage.getItem('selectedTheme');
    this.themeservice.currentMessage.subscribe(message => this.message = message);
    }
  ngDoCheck() {
    // The theme service grabs the current value of the select element in the start component and makes it a behavior subject here
    this.themeservice.currentMessage.subscribe(message => this.message = message);
    this.themeservice.currentMessage.subscribe(message => this.message = message);
    // If statements to change value of the theme string to determine what theme to make it on initialization
    // I have a notepad version with all of the if statements and theme names i want to use but I didnt want to add that yet
    // because it is about 100+ if statements
    if (this.message === 'CCHMC Dev Server') {
      this.theme = 'cchmc-dev-theme';
    }
    if (this.message === 'Open.Epic Argonaut Profile') {
      this.theme = 'open-epic-theme';
    }
    if (this.message === 'UC Dev Server') {
      this.theme = 'uc-dev-theme';
    }
    if (this.message === 'SMART Test Server') {
      this.theme = 'smart-test-theme';
    }
  }
  // Stores the string value of the theme under the key selectedTheme in the local storage
  @HostListener('window:unload', ['$event'])
  unloadHandler() {
      window.localStorage.setItem('selectedTheme', this.theme);
    }
  }
