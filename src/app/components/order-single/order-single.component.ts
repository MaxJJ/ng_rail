import { Component, OnInit, Input } from '@angular/core';
import { Order, Person, Shipment } from '../../services/interfaces';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipmentsService } from '../../services/backend/shipments/shipments.service';
import { StateService } from '../../services/state/state.service';
import { StorageService } from '../../services/state/storage.service';
import { MatDialog } from '@angular/material';
import { ShipmentDialogComponent } from '../../ui-components/dialogs/shipment-dialog/shipment-dialog.component';

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



  constructor(private shipments: ShipmentsService,
    private state: StateService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.state.last_active_order$.subscribe(ord => {
      if (ord.id) {
        this.order = ord;
        this._setControls();
        this.shipments.getOrdersShipments(ord.id).subscribe(ss => this.orders_shipments = ss);
      }


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

  private onETAChanged(date) {
    this.order.will_arrive = date;
  }

  private onNewShipment() {

    let dialogRef = this.dialog.open(ShipmentDialogComponent,
      {
        width: '300px',
        data: this.order.id
      });

    dialogRef.afterClosed().subscribe(data => {
      this.orders_shipments.push(data);
    });


  }


}
