import { Component, OnInit, Input } from '@angular/core';
import { Shipment } from '../../services/interfaces';
import { Router } from '@angular/router';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'shipment-card',
  templateUrl: './shipment-card.component.html',
  styleUrls: ['./shipment-card.component.css']
})
export class ShipmentCardComponent implements OnInit {

  @Input()
  shipment: Shipment;

  constructor(
    private router: Router,
    private state: StateService
  ) { }

  ngOnInit() {
  }

  edit_shipment() {
    console.log('shipment - ', this.shipment.id);
    console.log('order - ', this.state.last_active_order.id);
    let sh_id = this.shipment.id;
    let ord_id = this.state.last_active_order.id;

    this.router.navigate(['order', ord_id, 'shipments', sh_id]);
  }
}
