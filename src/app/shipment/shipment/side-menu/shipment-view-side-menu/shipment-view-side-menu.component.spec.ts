import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentViewSideMenuComponent } from './shipment-view-side-menu.component';

describe('ShipmentViewSideMenuComponent', () => {
  let component: ShipmentViewSideMenuComponent;
  let fixture: ComponentFixture<ShipmentViewSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentViewSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentViewSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
