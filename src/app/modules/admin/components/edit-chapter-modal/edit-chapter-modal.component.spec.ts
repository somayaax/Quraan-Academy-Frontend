import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChapterMOdalComponent } from './edit-chapter-modal.component';

describe('EditChapterMOdalComponent', () => {
  let component: EditChapterMOdalComponent;
  let fixture: ComponentFixture<EditChapterMOdalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChapterMOdalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChapterMOdalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
