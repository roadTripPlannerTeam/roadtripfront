import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotsClesComponent } from './mots-cles.component';

describe('MotsClesComponent', () => {
  let component: MotsClesComponent;
  let fixture: ComponentFixture<MotsClesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotsClesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotsClesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
