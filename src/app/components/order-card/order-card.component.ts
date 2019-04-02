import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../services/interfaces';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  @Input()
  order: Order;
  opened: boolean = false;

  @Output()
  activateOrder: EventEmitter<Order> = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }

  expand_card() {
    this.opened = this.opened ? false : true;
  }

  activate() {
    this.activateOrder.emit(this.order);
  }

}
