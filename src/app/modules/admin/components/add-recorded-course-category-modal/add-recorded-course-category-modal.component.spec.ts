import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordedCourseCategoryModalComponent } from './add-recorded-course-category-modal.component';

describe('AddRecordedCourseCategoryModalComponent', () => {
  let component: AddRecordedCourseCategoryModalComponent;
  let fixture: ComponentFixture<AddRecordedCourseCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecordedCourseCategoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecordedCourseCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
