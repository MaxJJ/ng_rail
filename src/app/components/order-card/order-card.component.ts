import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Order, Shipment } from '../../interfaces/interfaces';
import { OrderService } from '../../services/backend/order.service';
import { Observable, Subject } from 'rxjs';
import { StateService } from '../../services/state/state.service';
import { Router } from '@angular/router';
import { DASHBOARD_DATA, DashData, ORDER } from '../../services/portals/tokens';
import { ShipmentsService } from '../../services/backend/shipments/shipments.service';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  order: Order;
  shipments: Shipment[];

  @Output()
  activateOrder: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(
    private service: OrderService,
    private shipments_service: ShipmentsService,
    private router: Router,
    @Inject(ORDER) public d: Order
  ) { }

  ngOnInit() {

    this.order = this.d;
    this.shipments_service.
      getOrdersShipments(this.order.id).
      subscribe(v => this.shipments = v);
  }

  goToShipment(id) {
    this.router.navigate(['order', this.order.id, 'shipments', id]);
  }

  goToOrder() {
    this.router.navigate(['order', this.order.id]);
  }

}
