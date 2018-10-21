import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipment, Invoice, Unit } from '../../../services/interfaces';
import { ShipmentsService } from '../../../services/backend/shipments/shipments.service';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../../services/backend/shipments/invoice.service';


@Component({
  selector: 'shipment-invoices',
  templateUrl: './shipment-invoices.component.html',
  styleUrls: ['./shipment-invoices.component.css']
})
export class ShipmentInvoicesComponent implements OnInit {


  invoices: Invoice[];
  shipment_id: number;

  closed:boolean=true;


  constructor(private service: ShipmentsService, private invoice_serv: InvoiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.invoices=data.shipment.invoices;
      this.shipment_id=data.shipment.shipment.id;
      
    })
  }

  addInvoice() {
    this.service.createInvoice(this.shipment_id).subscribe(i => {
      this.invoices.push(i);
    });
  }

  saveInvoices(ev:MouseEvent){
 this.closed=false;
      this.service.saveShipmentInvoices(this.shipment_id,this.invoices).subscribe(inv=>console.log(inv));
  
  }

  iBuyerHandler(val, i) {
    let ix = this.invoices.indexOf(i);
    this.invoices[ix].buyer = val;
  }
  iSellerHandler(val, i) {
    console.log(val);
    let ix = this.invoices.indexOf(i);
    this.invoices[ix].seller = val;
  }

  deleteInvoice(ev, val) {
    this.invoice_serv.deleteInvoice(val.id).subscribe(i => {
      let ix = this.invoices.indexOf(val);
      this.invoices.splice(ix,1);
    });
  }



}
