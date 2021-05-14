import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionDetailComponent } from './training-session-detail.component';

describe('TrainingSessionDetailComponent', () => {
  let component: TrainingSessionDetailComponent;
  let fixture: ComponentFixture<TrainingSessionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
