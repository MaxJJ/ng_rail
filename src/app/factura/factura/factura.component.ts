import { Component, OnInit } from '@angular/core';
import { Factura, Shipment, Order, Cargo, Invoice } from '../../services/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaService } from '../../services/backend/factura/factura.service';
import { FacturaViewData } from '../../resolvers/factura-view-resolver.service';
import { MenuService } from '../../services/menu/menu.service';
import { FillBillService } from '../../services/output/build_xml/fill-bill.service';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  factura: Factura;
  facturas: Factura[];
  shipment: Shipment;
  order: Order;
  cargo: Cargo[];
  invoices: Invoice[];

  inv_gross: number = 0;
  inv_nett: number = 0;
  inv_packages: number = 0;
  inv_total: number = 0;
  inv_extra: number = 0;
  inv_grand: number = 0;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private factura_service: FacturaService,
    private menu_service: MenuService,
    private fb: FillBillService,
    public snackBar: MatSnackBar,

  ) { }

  ngOnInit() {

    this.route.data.subscribe((res) => {
      this.facturas = res.data.facturas;
      this.factura = res.data.thisFactura;
      this.shipment = res.data.shipment;
      this.order = res.data.order;
      this.cargo = res.data.cargo;
      this.invoices = res.data.invoices;
      this.calculateInvoices();
      this.menu_service.setFacturaViewSideMenu();
      this.menu_service.pushData({ shipment: this.shipment, order: this.order, factura: this.factura, cargo: this.cargo })
    });


  }

  saveFactura() {
    
    this.factura_service.saveFactura(this.factura).subscribe(f => {
      this.factura = f;
      this.menu_service.pushData({ shipment: this.shipment, order: this.order, factura: this.factura, cargo: this.cargo })
      this.calculateTotals();
      this.snackBar.open("Factura " + this.factura.name + " saved !!!");
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 800);
    })
  }

  deleteFactura(){
    this.factura_service.deleteFactura(this.factura.id).subscribe(f=>{
      console.log(f);
      this.router.navigate(['order',this.order.id,'shipments',this.shipment.id])
    }); 
  }

  calculateTotals() {
    let nett: number = 0;
    let gross: number = 0;
    let packages: number = 0;
    let amount: number = 0;
    let g_amount = 0;

    this.cargo.forEach((v, i, a) => {

      nett += v.nett_weight;
      gross += v.gross_weight;
      packages += v.package_quantity;
      amount += v.total;

    });



    this.factura.gross = gross;
    this.factura.nett = nett;
    this.factura.places = packages;
    this.factura.total_amount = amount;
    this.factura.grand_total = amount + this.factura.extra_total;

  }

  calculateInvoices(){
    this.invoices.forEach((v, i, a) => {
     
      this.inv_nett += v.nett_kgs;
      this.inv_gross += v.gross_kgs;
      this.inv_packages += v.packages_qty;
      this.inv_total += v.total;
      this.inv_extra += v.extra_cost;
      this.inv_grand += v.grand_total;
    });

  }

}
