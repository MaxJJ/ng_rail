import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura, Cargo } from '../../../interfaces/interfaces';
import { FillBillService } from '../../../services/output/build_xml/fill-bill.service';

@Component({
  selector: 'app-factura-view-side-menu',
  templateUrl: './factura-view-side-menu.component.html',
  styleUrls: ['./factura-view-side-menu.component.css']
})
export class FacturaViewSideMenuComponent implements OnInit {

  data: any;
  factura: Factura;
  cargo: Cargo[];
  constructor(private router: Router,
    private fb: FillBillService,
  ) { }

  ngOnInit() {
    this.factura = this.data.factura;
    this.cargo = this.data.cargo;
  }

  goToShipment() {
    console.log(this.data);
    this.router.navigate(['order', this.data.order.id, 'shipments', this.data.shipment.id]);

  }

  createFacturaXML() {
    this.fb.createFactura(this.factura, this.cargo);
  }
}
