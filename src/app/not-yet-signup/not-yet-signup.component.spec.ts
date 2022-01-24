import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetSignupComponent } from './not-yet-signup.component';

describe('NotYetSignupComponent', () => {
  let component: NotYetSignupComponent;
  let fixture: ComponentFixture<NotYetSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotYetSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotYetSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
