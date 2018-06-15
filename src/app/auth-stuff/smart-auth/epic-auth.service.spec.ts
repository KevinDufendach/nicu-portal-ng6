import { TestBed, inject } from '@angular/core/testing';

import { EpicAuthService } from './epic-auth.service';

describe('EpicAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpicAuthService]
    });
  });

  it('should be created', inject([EpicAuthService], (service: EpicAuthService) => {
    expect(service).toBeTruthy();
  }));
});
