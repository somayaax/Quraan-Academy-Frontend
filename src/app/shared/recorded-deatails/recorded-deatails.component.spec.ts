import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedDeatailsComponent } from './recorded-deatails.component';

describe('RecordedDeatailsComponent', () => {
  let component: RecordedDeatailsComponent;
  let fixture: ComponentFixture<RecordedDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordedDeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordedDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
