import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsShipmentsComponent } from './order-details-shipments.component';

describe('OrderDetailsShipmentsComponent', () => {
  let component: OrderDetailsShipmentsComponent;
  let fixture: ComponentFixture<OrderDetailsShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
