import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../../../services/backend/factura/factura.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Factura, Railbill } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-shipment-view-side-menu',
  templateUrl: './shipment-view-side-menu.component.html',
  styleUrls: ['./shipment-view-side-menu.component.css']
})
export class ShipmentViewSideMenuComponent implements OnInit {

  data: any;
  shipment_id: number;
  order_id: number;


  constructor(private factura_service: FacturaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.shipment_id = this.data.shipment.id;
    this.order_id = this.data.order.id;

  }

  createFactura() {
    this.factura_service.createNewFactura(this.shipment_id).subscribe(f => {
      this.router.navigate(['order', this.order_id, 'shipments', this.shipment_id, 'facturas', f.id])
    })
  }

  toFactura(f: Factura) {
    this.router.navigate(['order', this.order_id, 'shipments', this.shipment_id, 'facturas', f.id])
  }

  toShipment() {
    this.router.navigate(['order', this.order_id]);
  }

  toRwb() {
    this.router.navigate(['order', this.order_id, 'shipments', this.shipment_id, 'rwb'])
  }
}

// 'order/:id/shipments/:sh_id/facturas/:factura_id'