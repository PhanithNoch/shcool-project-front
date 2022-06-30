import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsDetailsComponent } from './greetings-details.component';

describe('GreetingsDetailsComponent', () => {
  let component: GreetingsDetailsComponent;
  let fixture: ComponentFixture<GreetingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
