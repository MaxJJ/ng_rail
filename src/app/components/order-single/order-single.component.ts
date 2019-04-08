import { Component, OnInit, Input } from '@angular/core';
import { Order, Person, Shipment } from '../../services/interfaces';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipmentsService } from '../../services/backend/shipments/shipments.service';

@Component({
  selector: 'order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css']
})
export class OrderSingleComponent implements OnInit {
  @Input()
  order: Order;

  @Input()
  $obs_order: Observable<Order>;

  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');

  orders_shipments: Shipment[];



  constructor(private shipments: ShipmentsService) { }

  ngOnInit() {

    this.$obs_order.subscribe(ord => {
      this.order = ord;
      this._setControls();
      this.shipments.getOrdersShipments(ord.id).subscribe(ss => this.orders_shipments = ss);

    });


  }

  private _setControls(): any {
    this._title_fc();
    this._description_fc();

  }

  private _title_fc() {
    this.title.setValue(this.order.short_description);
    this.title.valueChanges.subscribe(val => this.order.short_description = val);
  }

  private _description_fc() {
    this.description.setValue(this.order.description);
    this.description.valueChanges.subscribe(val => this.order.description = val);
  }

  private onDispatchSelected(place) {
    this.order.dispatch_place = place;
  }

  private onDestinationSelected(place) {
    this.order.destination_place = place;
  }

  private onConsignorSelected(person) {
    this.order.consignor = person;
  }
  private onConsigneeSelected(person) {
    this.order.consignee = person;
  }



}
