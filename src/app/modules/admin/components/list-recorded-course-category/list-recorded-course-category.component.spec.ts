import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordedCourseCategoryComponent } from './list-recorded-course-category.component';

describe('ListRecordedCourseCategoryComponent', () => {
  let component: ListRecordedCourseCategoryComponent;
  let fixture: ComponentFixture<ListRecordedCourseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecordedCourseCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecordedCourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
