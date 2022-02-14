import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewManageComponent } from './tabview-manage.component';

describe('TabviewManageComponent', () => {
  let component: TabviewManageComponent;
  let fixture: ComponentFixture<TabviewManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabviewManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
