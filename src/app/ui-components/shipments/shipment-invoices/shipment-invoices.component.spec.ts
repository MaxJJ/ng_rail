import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentInvoicesComponent } from './shipment-invoices.component';

describe('ShipmentInvoicesComponent', () => {
  let component: ShipmentInvoicesComponent;
  let fixture: ComponentFixture<ShipmentInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
