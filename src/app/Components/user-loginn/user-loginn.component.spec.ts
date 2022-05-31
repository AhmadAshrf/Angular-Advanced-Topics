import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginnComponent } from './user-loginn.component';

describe('UserLoginnComponent', () => {
  let component: UserLoginnComponent;
  let fixture: ComponentFixture<UserLoginnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
