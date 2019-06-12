import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import { Factura, Shipment, Person, Order, Invoice, Cargo } from '../../../interfaces/interfaces';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/backend/order.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {

  @Input()
  factura: Factura;
  @Input()
  shipment: Shipment;
  @Input()
  order: Order;

  invoices: Invoice[];
cargo:Cargo[];



  consignee: Person;
  consignor: Person;

  name_fc: FormControl = new FormControl('');
  doc_name_fc: FormControl = new FormControl('СЧЁТ-ФАКТУРА');
  sign_fc: FormControl = new FormControl('Д.Ромаш');
  delivery_terms_str_code_fc: FormControl = new FormControl('CIP');
  delivery_terms_place_fc: FormControl = new FormControl('');
  currency_fc: FormControl = new FormControl('EUR');
  contract_name_fc: FormControl = new FormControl('ПО ИНВОЙСУ');
  footer_fc: FormControl = new FormControl('');
  extra_total_description_fc: FormControl = new FormControl('');
  extra_total_fc: FormControl = new FormControl();
  footer_first_str_fc: FormControl = new FormControl('СЧЕТ-ФАКТУРА СОГЛАСНО ИНВОЙСАМ: ');


  constructor(private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.factura.consignee = this.order.consignee;
    this.factura.consignor = this.order.consignor;
    this.route.data.subscribe(res => {
      this.invoices = res.data.invoices;
      this.cargo = res.data.cargo;
    });

    this.setFields();



  }

  setFields() {
    this.name_fc.setValue(this.factura.name);
    this.name_fc.valueChanges.subscribe(val => this.factura.name = val);

    this.sign_fc.setValue(this.factura.sign);
    this.sign_fc.valueChanges.subscribe(val => this.factura.sign = val);

    this.delivery_terms_str_code_fc.setValue(this.factura.delivery_terms_str_code);
    this.delivery_terms_str_code_fc.valueChanges.subscribe(val => this.factura.delivery_terms_str_code = val);

    this.delivery_terms_place_fc.setValue(this.factura.delivery_terms_place);
    this.delivery_terms_place_fc.valueChanges.subscribe(val => this.factura.delivery_terms_place = val);

    this.currency_fc.setValue(this.factura.currency);
    this.currency_fc.valueChanges.subscribe(val => this.factura.currency = val);

    this.contract_name_fc.setValue(this.factura.contract_name);
    this.contract_name_fc.valueChanges.subscribe(val => this.factura.contract_name = val);

    this.footer_fc.setValue(this.factura.footer);
    this.footer_fc.valueChanges.subscribe(val => this.factura.footer = val);

    this.extra_total_description_fc.setValue(this.factura.extra_total_description);
    this.extra_total_description_fc.valueChanges.subscribe(val => this.factura.extra_total_description = val);

    this.extra_total_fc.setValue(this.factura.extra_total);
    this.extra_total_fc.valueChanges.subscribe(val => this.factura.extra_total = val);

    if (!isNullOrUndefined(this.factura.footer_first_str)) {
      this.footer_first_str_fc.setValue(this.factura.footer_first_str);
    }
    this.footer_first_str_fc.valueChanges.subscribe(val => this.factura.footer_first_str = val);

  }


  setFacturasDate(val) {
    this.factura.date = val;
  }

  buyerHandler(val) {
    this.factura.buyer = val;
  }
  sellerHandler(val) {
    this.factura.seller = val;
  }

  addInvNum(inv) {
    let st = this.footer_first_str_fc.value;

    st = st + inv.number + ', ';

    this.footer_first_str_fc.setValue(st);
  }

  calculateTotals() {
    let nett = 0;
    let gross = 0;
    let packages = 0;
    let amount = 0;
    let g_amount = 0;

    this.cargo.forEach((v, i, a) => {
      
nett += v.nett_weight;
gross += v.gross_weight;
packages += v.package_quantity;
amount += v.total;

    });

    this.factura.gross=gross;
    this.factura.nett=nett;
    this.factura.places=packages;
    this.factura.total_amount=amount;
    this.factura.grand_total=amount+this.factura.extra_total;

  }

  
}
