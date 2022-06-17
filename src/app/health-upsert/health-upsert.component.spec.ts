import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthUpsertComponent } from './health-upsert.component';

describe('HealthUpsertComponent', () => {
  let component: HealthUpsertComponent;
  let fixture: ComponentFixture<HealthUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
