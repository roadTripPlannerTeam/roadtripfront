import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienInformationComponent } from './lien-information.component';

describe('LienInformationComponent', () => {
  let component: LienInformationComponent;
  let fixture: ComponentFixture<LienInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
