import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUpsertComponent } from './plan-upsert.component';

describe('PlanUpsertComponent', () => {
  let component: PlanUpsertComponent;
  let fixture: ComponentFixture<PlanUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
