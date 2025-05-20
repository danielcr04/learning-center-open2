import { TestBed } from '@angular/core/testing';

import { DomainAnalysesService } from './domain-analyses.service';

describe('DomainAnalysesService', () => {
  let service: DomainAnalysesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainAnalysesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
