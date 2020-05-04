import { TestBed } from '@angular/core/testing';

import { InstitutesService } from './institutes.service';

describe('InstitutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstitutesService = TestBed.get(InstitutesService);
    expect(service).toBeTruthy();
  });
});
