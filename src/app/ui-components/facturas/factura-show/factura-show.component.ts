import { Component, OnInit, Input } from '@angular/core';
import { Factura, Person } from '../../../interfaces/interfaces';

@Component({
  selector: 'factura-show',
  templateUrl: './factura-show.component.html',
  styleUrls: ['./factura-show.component.css']
})
export class FacturaShowComponent implements OnInit {

  @Input()
  factura:Factura;
  @Input()
  shipment:Factura;
 
  constructor() { }

  ngOnInit() {
    this.factura.name="TST-256";
    this.factura.consignee=this.shipment.consignee;
    this.factura.consignor=this.shipment.consignor;
  }

}
