import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import { Factura, Shipment, Person, Order } from '../../../services/interfaces';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/backend/order.service';

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
  @Input()
  order:Order;
  
  
  consignee:Person;
  consignor:Person;

  name_fc:FormControl = new FormControl('');
  doc_name_fc:FormControl = new FormControl('СЧЁТ-ФАКТУРА');
  sign_fc:FormControl = new FormControl('Д.Ромаш');

  constructor() { }

  ngOnInit() {
       this.factura.consignee=this.order.consignee;
      this.factura.consignor=this.order.consignor;
 


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
