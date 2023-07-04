import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCommentModalComponent } from './session-comment-modal.component';

describe('SessionCommentModalComponent', () => {
  let component: SessionCommentModalComponent;
  let fixture: ComponentFixture<SessionCommentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionCommentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
