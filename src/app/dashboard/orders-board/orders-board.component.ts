import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/backend/order.service';
import { Order, Person } from '../../services/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, of, Subject } from 'rxjs';
import { AotCompiler } from '@angular/compiler';
import { map } from 'rxjs/operators';








@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.css']
})
export class OrdersBoardComponent implements OnInit {

  orders: Order[];
  active_order: Order;
  $active: Subject<Order> = new Subject<Order>();



  constructor(private serv_orders: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.route.data.subscribe((data) => {
      this.orders = data.orders;
    });




    // this.serv_orders.getOrders().subscribe(o => { this.orders = o });

  }

  ngAfterViewInit() {


  }

  onOrderActivated(event) {

    this.active_order = event;
    this.$active.next(event);

  }
}
