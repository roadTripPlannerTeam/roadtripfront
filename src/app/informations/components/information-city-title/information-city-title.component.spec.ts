import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCityTitleComponent } from './information-city-title.component';

describe('InformationCityTitleComponent', () => {
  let component: InformationCityTitleComponent;
  let fixture: ComponentFixture<InformationCityTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCityTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCityTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
