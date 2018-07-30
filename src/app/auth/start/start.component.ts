import {Component, OnInit} from '@angular/core';
import {EpicAuthService} from '../smart-auth/epic-auth.service';
import {FhirApiEndpoint} from '../smart-auth/fhir-api-endpoint';
import {AuthConfig} from '../../../angular-oauth2-oidc/auth.config';
import {Meta} from '@angular/platform-browser';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ThemeService} from '../../theme.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  // options: string[] = [];

  filteredOptions: Observable<FhirApiEndpoint[]>;
  myControl = new FormControl();

  message: string;
  endpoints: FhirApiEndpoint[] = [];
  selectedEndpoint: FhirApiEndpoint;
  endpointConfig: AuthConfig;

  loading = false;
  ready = false;

  constructor(
    private themeservice: ThemeService,
    public epicAuthService: EpicAuthService,
    private meta: Meta,
    private overlayContainer: OverlayContainer,
  ) {
    overlayContainer.getContainerElement().classList.add('custom-theme');
  }

  ngOnInit() {
    this.epicAuthService.getEndpoints().subscribe(
      endpoints => this.endpoints = [...this.endpoints, ...endpoints],
      error => console.log(error),
      () => this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith<string | FhirApiEndpoint>(''),
          map(value => typeof value === 'string' ? value : value.OrganizationName),
          map(OrganizationName => OrganizationName ? this._filter(OrganizationName) : this.endpoints.slice())
        )
    );

    this.meta.addTag({
      name: 'description',
      content: 'Login in through your child\'s hospital (a portal account is needed)'
    });

    this.themeservice.currentMessage.subscribe(message => this.message = message);


  }

  getEndpointConfig(endpoint: FhirApiEndpoint) {
    console.log('getting endpoint config for: ' + endpoint.FHIRPatientFacingURI);
    this.loading = true;
    this.ready = false;

    this.epicAuthService.generateAuthConfig(endpoint).subscribe(config => {
      console.log('configuration information retrieved');
      this.endpointConfig = config;
      console.log(this.selectedEndpoint.OrganizationName);
      console.log(this.selectedEndpoint.FHIRPatientFacingURI);
      this.loading = false;
      this.ready = true;
    });
  }

  onSelectionChange(endpoint: FhirApiEndpoint) {
    this.getEndpointConfig(endpoint);
    this.themeservice.changeMessage(endpoint.OrganizationName);
  }

  login(): void {
    this.epicAuthService.login();
  }

  displayFn(endpoint?: FhirApiEndpoint): string | undefined {
    return endpoint ? endpoint.OrganizationName : undefined;
  }

  /**
   * Filters selection items
   *
   * @param value
   * @private
   */
  private _filter(value: string): FhirApiEndpoint[] {
    const filterValue = value.toLowerCase();

    return this.endpoints.filter(option => option.OrganizationName.toLowerCase().includes(filterValue));
  }

}
