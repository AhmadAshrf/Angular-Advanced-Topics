import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserProfileComponent } from './edituser-profile.component';

describe('EdituserProfileComponent', () => {
  let component: EdituserProfileComponent;
  let fixture: ComponentFixture<EdituserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
