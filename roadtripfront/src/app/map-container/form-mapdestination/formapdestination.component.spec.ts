import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapdestinationComponent } from './formapdestination.component';

describe('FormapdestinationComponent', () => {
  let component: FormapdestinationComponent;
  let fixture: ComponentFixture<FormapdestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapdestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapdestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
