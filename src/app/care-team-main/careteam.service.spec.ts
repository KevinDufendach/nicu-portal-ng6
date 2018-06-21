import { TestBed, inject } from '@angular/core/testing';

import { CareteamService } from './careteam.service';

describe('CareteamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CareteamService]
    });
  });

  it('should be created', inject([CareteamService], (service: CareteamService) => {
    expect(service).toBeTruthy();
  }));
});
