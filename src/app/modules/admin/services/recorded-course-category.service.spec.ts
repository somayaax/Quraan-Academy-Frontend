import { TestBed } from '@angular/core/testing';

import { RecordedCourseCategoryService } from './recorded-course-category.service';

describe('RecordedCourseCategoryService', () => {
  let service: RecordedCourseCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordedCourseCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
