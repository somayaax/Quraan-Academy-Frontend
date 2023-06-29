import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordedCourseComponent } from './list-recorded-course.component';

describe('ListRecordedCourseComponent', () => {
  let component: ListRecordedCourseComponent;
  let fixture: ComponentFixture<ListRecordedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecordedCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecordedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
