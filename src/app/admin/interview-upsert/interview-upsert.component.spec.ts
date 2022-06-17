import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewUpsertComponent } from './interview-upsert.component';

describe('InterviewUpsertComponent', () => {
  let component: InterviewUpsertComponent;
  let fixture: ComponentFixture<InterviewUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
