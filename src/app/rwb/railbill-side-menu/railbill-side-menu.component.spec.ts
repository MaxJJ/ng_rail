import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailbillSideMenuComponent } from './railbill-side-menu.component';

describe('RailbillSideMenuComponent', () => {
  let component: RailbillSideMenuComponent;
  let fixture: ComponentFixture<RailbillSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailbillSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailbillSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
