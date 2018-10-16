import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsSideMenuComponent } from './order-details-side-menu.component';

describe('OrderDetailsSideMenuComponent', () => {
  let component: OrderDetailsSideMenuComponent;
  let fixture: ComponentFixture<OrderDetailsSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
