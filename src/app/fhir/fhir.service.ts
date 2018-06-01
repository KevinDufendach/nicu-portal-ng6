///<reference path="../../../node_modules/@types/fhir/index.d.ts"/>
import { Injectable } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import Patient = fhir.Patient;
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import Observation = fhir.Observation;

@Injectable({
  providedIn: 'root'
})
export class FhirService {

  constructor(public epicAuthService: EpicAuthService, private http: HttpClient) { }

  getPatient(): Observable<Patient> {
    if (!this.isLoggedIn()) {
      return throwError('no access token available to getPatient() in fhir.service');
    }

    const httpParams = new HttpParams()
      .set('patient', this.getPatientId());

    return this.http.get<Patient>(
      this.getIssuerUri() + 'Patient', {
        params: httpParams,
        headers: this.getHttpHeaders()
      }
    );
  }

  getObservations(code: string): Observable<Observation> {
    if (!this.isLoggedIn()) {
      return throwError('no access token available to getObservations() in fhir.service');
    }

    const httpParams = new HttpParams()
      .set('patient', this.getPatientId())
      .set('code', code);

    return this.http.get<Observation>(
      this.getIssuerUri() + 'Observation', {
        params: httpParams,
        headers: this.getHttpHeaders()
      }
    );
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
