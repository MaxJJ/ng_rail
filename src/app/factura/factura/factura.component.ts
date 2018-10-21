import { Component, OnInit } from '@angular/core';
import { Factura, Shipment, Order } from '../../services/interfaces';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from '../../services/backend/factura/factura.service';
import { FacturaViewData } from '../../resolvers/factura-view-resolver.service';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  factura:Factura;
  facturas:Factura[];
  shipment:Shipment;
  order:Order;

  constructor(private route:ActivatedRoute,
              private factura_service:FacturaService,
              private menu_service:MenuService) { }

  ngOnInit() {

    this.route.data.subscribe((res)=>{
      this.facturas=res.data.facturas;
      this.factura=res.data.thisFactura;
      this.shipment = res.data.shipment;
      this.order = res.data.order;

      this.menu_service.setFacturaViewSideMenu();
      this.menu_service.pushData({shipment:this.shipment,order:this.order,})
    });
  }

  saveFactura(){
    this.factura_service.saveFactura(this.factura).subscribe(f=>{
      this.factura=f;
    })
  }
}
