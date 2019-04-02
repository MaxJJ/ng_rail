import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/backend/order.service';
import { Order } from '../../services/interfaces';








@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.css']
})
export class OrdersBoardComponent implements OnInit {

  orders: Order[];
  active_order: Order;

  constructor(private serv_orders: OrderService) { }

  ngOnInit() {
    this.serv_orders.getOrders().subscribe(o => { this.orders = o });

  }

  onOrderActivated(event) {
    this.active_order = event;
  }
}
