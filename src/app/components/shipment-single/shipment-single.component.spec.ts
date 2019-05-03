import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentSingleComponent } from './shipment-single.component';

describe('ShipmentSingleComponent', () => {
  let component: ShipmentSingleComponent;
  let fixture: ComponentFixture<ShipmentSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
