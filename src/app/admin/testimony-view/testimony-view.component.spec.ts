import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyViewComponent } from './testimony-view.component';

describe('TestimonyViewComponent', () => {
  let component: TestimonyViewComponent;
  let fixture: ComponentFixture<TestimonyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
