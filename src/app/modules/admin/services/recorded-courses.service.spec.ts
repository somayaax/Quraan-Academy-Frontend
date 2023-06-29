import { TestBed } from '@angular/core/testing';

import { RecordedCoursesService } from './recorded-courses.service';

describe('RecordedCoursesService', () => {
  let service: RecordedCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordedCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
