///<reference path="../../../node_modules/@types/fhir/index.d.ts"/>
import { Injectable } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FhirService {

  constructor(public epicAuthService: EpicAuthService, private http: HttpClient) { }

  getPatient(): Observable<Patient> {
    // console.log('attempting to get patient: ');
    //
    // if (!this.sb) {
    //   // return Observable.throw('no access token');
    //   // return ErrorObservable.create('no access token');
    //   console.log('no access token');
    //   return throwError('no access token in smart-auth.service.ts');
    // }

    console.log('IssuerUri ' + this.getIssuerUri());

    if (this.isLoggedIn()) {
      return this.http.get<Patient>(
        this.getIssuerUri() + '/Patient/' + this.getPatientId(), {
          headers: this.getHttpHeaders()
        }
      );
    }

    return null;
  }

  private getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.epicAuthService.oauthService.getAccessToken());
  }

  private isLoggedIn(): boolean {
    return this.epicAuthService.oauthService.hasValidAccessToken();
  }

  private getPatientId(): string {
    if (!this.isLoggedIn()) {
      return null;
    }

    return this.epicAuthService.oauthService.getAdditionalParameters()['patient'];
  }

  private getIssuerUri(): string {
    return this.epicAuthService.oauthService.issuer;
  }
}
