import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetSigninComponent } from './not-yet-signin.component';

describe('NotYetSigninComponent', () => {
  let component: NotYetSigninComponent;
  let fixture: ComponentFixture<NotYetSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotYetSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotYetSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
