import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecourdedCoursesComponent } from './recourded-courses.component';

describe('RecourdedCoursesComponent', () => {
  let component: RecourdedCoursesComponent;
  let fixture: ComponentFixture<RecourdedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecourdedCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecourdedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
