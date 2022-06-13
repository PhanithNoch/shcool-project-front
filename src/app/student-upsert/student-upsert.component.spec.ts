import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpsertComponent } from './student-upsert.component';

describe('StudentUpsertComponent', () => {
  let component: StudentUpsertComponent;
  let fixture: ComponentFixture<StudentUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
