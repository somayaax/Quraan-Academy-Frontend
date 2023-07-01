import { TestBed } from '@angular/core/testing';

import { RecordedDetailsService } from './recorded-details.service';

describe('RecordedDetailsService', () => {
  let service: RecordedDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordedDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
