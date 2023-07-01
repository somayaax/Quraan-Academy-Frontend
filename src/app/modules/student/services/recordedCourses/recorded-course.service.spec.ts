import { TestBed } from '@angular/core/testing';

import { RecordedCourseService } from './recorded-course.service';

describe('RecordedCourseService', () => {
  let service: RecordedCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordedCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
