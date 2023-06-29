import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaptersModalComponent } from './add-chapters-modal.component';

describe('AddChaptersModalComponent', () => {
  let component: AddChaptersModalComponent;
  let fixture: ComponentFixture<AddChaptersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChaptersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChaptersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
