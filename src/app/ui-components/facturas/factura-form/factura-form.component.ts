import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import { Factura, Shipment } from '../../../services/interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {

  @Input()
  factura:Factura;
  @Input()
  shipment:Shipment;

  name_fc:FormControl = new FormControl('');
  doc_name_fc:FormControl = new FormControl('СЧЁТ-ФАКТУРА');
  sign_fc:FormControl = new FormControl('Д.Ромаш');

  constructor() { }

  ngOnInit() {
    this.factura.consignee=this.shipment.consignee;
    this.factura.consignor=this.shipment.consignor;
    this.factura.buyer=this.shipment.consignee;
    this.factura.seller=this.shipment.consignor;
 

    this.name_fc.valueChanges.subscribe(val=>this.factura.name=val);
    this.sign_fc.valueChanges.subscribe(val=>this.factura.sign =val);

  }


  setFacturasDate(val){
this.factura.date=val;
  }

  buyerHandler(val){
    this.factura.buyer = val;
  }
  sellerHandler(val){
    this.factura.seller = val;
  }
}
