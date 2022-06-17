import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUpsertComponent } from './administration-upsert.component';

describe('AdministrationUpsertComponent', () => {
  let component: AdministrationUpsertComponent;
  let fixture: ComponentFixture<AdministrationUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
