import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInboundCargoComponent } from './order-inbound-cargo.component';

describe('OrderInboundCargoComponent', () => {
  let component: OrderInboundCargoComponent;
  let fixture: ComponentFixture<OrderInboundCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInboundCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInboundCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
