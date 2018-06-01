import {Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  token: string;
  claims: object;
  scopes: object;
  header: string;
  ptId: object;

  constructor(public epicAuthService: EpicAuthService) {
  }

  ngOnInit() {
    this.epicAuthService.completeLoginWithCode().then(_ => {
        this.token = this.epicAuthService.oauthService.getAccessToken();
        this.claims = this.epicAuthService.oauthService.getIdentityClaims();
        this.scopes = this.epicAuthService.oauthService.getGrantedScopes();
        this.epicAuthService.oauthService.getAuthorizationHeader().then(
          h => {
            this.header = h;
          }
        );

        this.ptId = this.epicAuthService.oauthService.getAdditionalParameters();
      }
    );
  }

  logOut() {
    this.epicAuthService.oauthService.logOut();
  }
}
