import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../services/interfaces';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css']
})
export class OrderSingleComponent implements OnInit {
  @Input()
  order: Order;

  description: FormControl = new FormControl('');




  constructor() { }

  ngOnInit() {
    this.description.valueChanges.subscribe(v => this.order.description = v);
  }



}
