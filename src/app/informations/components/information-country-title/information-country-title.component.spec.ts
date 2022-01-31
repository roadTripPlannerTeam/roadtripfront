import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCountryTitleComponent } from './information-country-title.component';

describe('InformationCountryTitleComponent', () => {
  let component: InformationCountryTitleComponent;
  let fixture: ComponentFixture<InformationCountryTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCountryTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCountryTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
