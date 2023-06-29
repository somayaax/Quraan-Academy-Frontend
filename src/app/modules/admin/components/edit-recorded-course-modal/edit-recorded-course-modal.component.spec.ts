import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordedCourseModalComponent } from './edit-recorded-course-modal.component';

describe('EditRecordedCourseModalComponent', () => {
  let component: EditRecordedCourseModalComponent;
  let fixture: ComponentFixture<EditRecordedCourseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecordedCourseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecordedCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
