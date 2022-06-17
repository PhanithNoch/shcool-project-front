import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUpsertComponent } from './payment-upsert.component';

describe('PaymentUpsertComponent', () => {
  let component: PaymentUpsertComponent;
  let fixture: ComponentFixture<PaymentUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
