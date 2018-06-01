import { Injectable } from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class FhirService {

  constructor(public epicAuthService: EpicAuthService) { }
}
