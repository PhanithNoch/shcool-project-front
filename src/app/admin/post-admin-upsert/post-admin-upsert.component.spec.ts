import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminUpsertComponent } from './post-admin-upsert.component';

describe('PostAdminUpsertComponent', () => {
  let component: PostAdminUpsertComponent;
  let fixture: ComponentFixture<PostAdminUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdminUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
