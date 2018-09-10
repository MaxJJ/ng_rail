import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentFacturasComponent } from './shipment-facturas.component';

describe('ShipmentFacturasComponent', () => {
  let component: ShipmentFacturasComponent;
  let fixture: ComponentFixture<ShipmentFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
