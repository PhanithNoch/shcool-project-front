import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentsUpsertComponent } from './accidents-upsert.component';

describe('AccidentsUpsertComponent', () => {
  let component: AccidentsUpsertComponent;
  let fixture: ComponentFixture<AccidentsUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccidentsUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentsUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
