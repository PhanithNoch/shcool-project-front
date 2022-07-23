import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesDetailsComponent } from './testimonies-details.component';

describe('TestimoniesDetailsComponent', () => {
  let component: TestimoniesDetailsComponent;
  let fixture: ComponentFixture<TestimoniesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimoniesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
