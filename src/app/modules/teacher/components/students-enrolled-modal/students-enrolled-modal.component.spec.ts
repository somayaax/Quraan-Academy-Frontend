import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEnrolledModalComponent } from './students-enrolled-modal.component';

describe('StudentsEnrolledModalComponent', () => {
  let component: StudentsEnrolledModalComponent;
  let fixture: ComponentFixture<StudentsEnrolledModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsEnrolledModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsEnrolledModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
