import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesUpsertComponent } from './testimonies-upsert.component';

describe('TestimoniesUpsertComponent', () => {
  let component: TestimoniesUpsertComponent;
  let fixture: ComponentFixture<TestimoniesUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimoniesUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniesUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
