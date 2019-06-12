import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shipment, Order, Railbill, Invoice, Factura } from '../../interfaces/interfaces';

@Component({
  selector: 'shipment-single',
  templateUrl: './shipment-single.component.html',
  styleUrls: ['./shipment-single.component.css']
})
export class ShipmentSingleComponent implements OnInit {
  shipment: Shipment;
  order: Order;
  rwb: Railbill;
  invoices: Invoice[];
  facturas: Factura[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.shipment = data.data.shipment;
      this.order = data.data.order;
      this.rwb = data.data.rwb;
      this.invoices = data.data.invoices;
      this.facturas = data.data.facturas;

    });
  }

  toOrder() {
    let id = this.order.id;
    this.router.navigate(['orders_dash'], { queryParams: { active: id } });

  }

  toFactura(id) {



    this.router.navigate(['order', this.order.id, 'shipments', this.shipment.id, 'facturas', id]);
  }
}
