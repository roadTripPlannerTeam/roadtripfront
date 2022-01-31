import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGeneralesCountryComponent } from './info-generales-country.component';

describe('InfoGeneralesCountryComponent', () => {
  let component: InfoGeneralesCountryComponent;
  let fixture: ComponentFixture<InfoGeneralesCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGeneralesCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGeneralesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
