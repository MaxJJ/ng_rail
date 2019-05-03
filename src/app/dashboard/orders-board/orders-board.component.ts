import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/backend/order.service';
import { Order, Person } from '../../services/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, of, Subject } from 'rxjs';
import { AotCompiler } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { StateService } from '../../services/state/state.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';








@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.css']
})
export class OrdersBoardComponent implements OnInit {

  orders: Order[] = [];
  active_order: Order;

  constructor(private serv_orders: OrderService,
    private route: ActivatedRoute,
    private state: StateService,
  ) { }

  ngOnInit() {
    this.state.last_active_order$.subscribe(ord => {
      this.active_order = ord;
    });
    this.route.queryParamMap.subscribe(params => {
      if (params.has('active')) {
        let order_id = params.get('active');
        this.serv_orders.getOrderById(order_id).subscribe(ao => this.state.last_active_order = ao);
      }
    });


  }

  ngAfterViewInit() {


  }

  onOrderActivated(event) {

    this.orders = [];

    this.state.last_active_order = event;

  }

  getAllOrders() {

    this.route.data.subscribe((data) => {
      this.orders = data.orders;
    });

  }
}
