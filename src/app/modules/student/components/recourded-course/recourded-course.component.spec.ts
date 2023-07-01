import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecourdedCourseComponent } from './recourded-course.component';

describe('RecourdedCourseComponent', () => {
  let component: RecourdedCourseComponent;
  let fixture: ComponentFixture<RecourdedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecourdedCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecourdedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
