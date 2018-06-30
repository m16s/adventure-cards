import { TestBed, inject } from '@angular/core/testing';

import { AdventuresService } from './adventures.service';

describe('AdventuresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdventuresService]
    });
  });

  it('should be created', inject([AdventuresService], (service: AdventuresService) => {
    expect(service).toBeTruthy();
  }));
});
