import { Injectable } from '@angular/core';
import { FacturaService } from '../services/backend/factura/factura.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShipmentsService } from '../services/backend/shipments/shipments.service';
import { OrderService } from '../services/backend/order.service';
import { Observable, forkJoin } from 'rxjs';
import { Factura, Shipment, Order } from '../services/interfaces';
import { map } from 'rxjs/operators';

export interface FacturaViewData{
  shipment:Shipment;
  facturas:Factura[];
  thisFactura:Factura;
  order:Order;
  
}

@Injectable({
  providedIn: 'root'
})
export class FacturaViewResolver implements Resolve<any> {

  constructor(private http:HttpClient, 
              private shipment_service:ShipmentsService,
              private order_service:OrderService,
              private factura_service:FacturaService,
              
              ) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<FacturaViewData>{
    const id = route.paramMap.get('factura_id');
    const sh_id = route.paramMap.get('sh_id');
    const ord_id = route.paramMap.get('id');
    
    
    return forkJoin([
      this.shipment_service.getShipmentById(sh_id),
      this.shipment_service.getShipmentsFacturas(sh_id),
      this.factura_service.getFacturaById(parseInt(id)),
      this.order_service.getOrderById(ord_id),
      this.factura_service.getFacturasCargo(id),
      this.shipment_service.getShipmentInvoices(sh_id),
    
      
    ]).pipe(map((res)=>{
      return {shipment:res[0],
              facturas:res[1],
              thisFactura:res[2],
              order:res[3],
              cargo:res[4],
              invoices:res[5],
            
            };
       }));
    
  }
}
