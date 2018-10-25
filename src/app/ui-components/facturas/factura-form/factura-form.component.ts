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
  delivery_terms_str_code_fc:FormControl=new FormControl('CIP');
  delivery_terms_place_fc:FormControl=new FormControl('');
  currency_fc:FormControl=new FormControl('EUR');
  contract_name_fc:FormControl=new FormControl('ПО ИНВОЙСУ');
  footer_fc:FormControl=new FormControl('');

  constructor() { }

  ngOnInit() {
       this.factura.consignee=this.order.consignee;
      this.factura.consignor=this.order.consignor;


this.setFields();
    
    

  }

  setFields(){
    this.name_fc.setValue(this.factura.name);
    this.name_fc.valueChanges.subscribe(val=>this.factura.name=val);

    this.sign_fc.setValue(this.factura.sign);
    this.sign_fc.valueChanges.subscribe(val=>this.factura.sign =val);

    this.delivery_terms_str_code_fc.setValue(this.factura.delivery_terms_str_code);
    this.delivery_terms_str_code_fc.valueChanges.subscribe(val=>this.factura.delivery_terms_str_code=val);

    this.delivery_terms_place_fc.setValue(this.factura.delivery_terms_place);
    this.delivery_terms_place_fc.valueChanges.subscribe(val=>this.factura.delivery_terms_place=val);

    this.currency_fc.setValue(this.factura.currency);
    this.currency_fc.valueChanges.subscribe(val=>this.factura.currency=val);

    this.contract_name_fc.setValue(this.factura.contract_name);
    this.contract_name_fc.valueChanges.subscribe(val=>this.factura.contract_name=val);

    this.footer_fc.setValue(this.factura.footer);
    this.footer_fc.valueChanges.subscribe(val=>this.factura.footer=val);

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
