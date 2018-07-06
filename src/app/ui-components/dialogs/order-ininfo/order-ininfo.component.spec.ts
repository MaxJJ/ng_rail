import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIninfoComponent } from './order-ininfo.component';

describe('OrderIninfoComponent', () => {
  let component: OrderIninfoComponent;
  let fixture: ComponentFixture<OrderIninfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderIninfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
