import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedCoursesComponent } from './recorded-courses.component';

describe('RecordedCoursesComponent', () => {
  let component: RecordedCoursesComponent;
  let fixture: ComponentFixture<RecordedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordedCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
