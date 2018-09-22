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

  @Input()
  invoices: Invoice[];
  shipment_id: number;

  @Output()
  change: EventEmitter<Invoice[]> = new EventEmitter<Invoice[]>()

  constructor(private service: ShipmentsService, private invoice_serv: InvoiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.shipment_id = p.sh_id);
  }

  addInvoice() {
    this.service.createInvoice(this.shipment_id).subscribe(i => {
      this.invoices.push(i);
    });
  }

  iBuyerHandler(val, i) {
    let ix = this.invoices.indexOf(i);
    this.invoices[ix].buyer = val;
  }
  iSellerHandler(val, i) {
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
