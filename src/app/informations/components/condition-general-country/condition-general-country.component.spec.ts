import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionGeneralCountryComponent } from './condition-general-country.component';

describe('ConditionGeneralCountryComponent', () => {
  let component: ConditionGeneralCountryComponent;
  let fixture: ComponentFixture<ConditionGeneralCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionGeneralCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionGeneralCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
