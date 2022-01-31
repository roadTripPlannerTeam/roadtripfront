import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGeneraleCityComponent } from './info-generale-city.component';

describe('InfoGeneraleCityComponent', () => {
  let component: InfoGeneraleCityComponent;
  let fixture: ComponentFixture<InfoGeneraleCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGeneraleCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGeneraleCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
