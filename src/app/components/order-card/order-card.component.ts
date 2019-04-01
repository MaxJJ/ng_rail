import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../services/interfaces';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  @Input()
  order: Order;

  constructor() { }

  ngOnInit() {
  }

}
