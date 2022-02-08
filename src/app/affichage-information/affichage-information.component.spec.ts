import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageInformationComponent } from './affichage-information.component';

describe('AffichageInformationComponent', () => {
  let component: AffichageInformationComponent;
  let fixture: ComponentFixture<AffichageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
