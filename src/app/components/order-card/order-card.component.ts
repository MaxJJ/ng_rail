import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Order } from '../../services/interfaces';
import { OrderService } from '../../services/backend/order.service';
import { Observable, Subject } from 'rxjs';
import { StateService } from '../../services/state/state.service';
import { Router } from '@angular/router';
import { DASHBOARD_DATA, DashData, ORDERS } from '../../dashboard/tokens';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  order: Order;


  @Output()
  activateOrder: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(private service: OrderService,
    private state: StateService,
    private router: Router,
    @Inject(ORDERS) public d: Order
  ) { }

  ngOnInit() {
    this.order = <Order>{
      "short_description": "Order in work",
      "will_arrive": "Please select",

    };

    this.state.last_active_order$.subscribe(ao => {
      if (ao.id) {
        this.order = ao;
      }
    });

    this.order = this.d;
  }


  onSave() {
    this.service.postOrder(this.order).subscribe(res => {
      this.state.last_active_order = res;
      this.router.navigate(['orders_dash'], { queryParams: { active: res.id } });
    });
  }

}
