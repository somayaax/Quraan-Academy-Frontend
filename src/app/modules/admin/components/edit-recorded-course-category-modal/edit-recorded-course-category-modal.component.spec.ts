import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordedCourseCategoryModalComponent } from './edit-recorded-course-category-modal.component';

describe('EditRecordedCourseCategoryModalComponent', () => {
  let component: EditRecordedCourseCategoryModalComponent;
  let fixture: ComponentFixture<EditRecordedCourseCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecordedCourseCategoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecordedCourseCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
