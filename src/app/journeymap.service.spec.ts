import { TestBed, inject } from '@angular/core/testing';

import { JourneymapService } from './journeymap.service';

describe('JourneymapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JourneymapService]
    });
  });

  it('should be created', inject([JourneymapService], (service: JourneymapService) => {
    expect(service).toBeTruthy();
  }));
});
