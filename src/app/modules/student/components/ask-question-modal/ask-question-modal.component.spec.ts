import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionModalComponent } from './ask-question-modal.component';

describe('AskQuestionModalComponent', () => {
  let component: AskQuestionModalComponent;
  let fixture: ComponentFixture<AskQuestionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskQuestionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
