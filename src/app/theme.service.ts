import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {FhirApiEndpoint} from './auth/smart-auth/fhir-api-endpoint';

@Injectable()
export class ThemeService {
  private messageSource = new BehaviorSubject('default-message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

}
