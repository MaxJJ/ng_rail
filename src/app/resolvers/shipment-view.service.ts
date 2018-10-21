import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable,forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShipmentsService } from '../services/backend/shipments/shipments.service';
import { Shipment, Order } from '../services/interfaces';
// import 'rxjs/add/observable/forkJoin';
import { OrderService } from '../services/backend/order.service';
import { map } from 'rxjs/operators';
interface ShipmentViewData{
  shipment:Shipment;
  order:Order;
}

@Injectable({
  providedIn: 'root'
})
export class ShipmentViewResolver implements Resolve<any> {

  constructor(private http:HttpClient, private shipment_service:ShipmentsService,private order_service:OrderService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<ShipmentViewData>{
    const id = route.paramMap.get('sh_id');
    const ord_id = route.paramMap.get('id');
    
    return forkJoin([
      this.shipment_service.getShipmentById(id),
      this.order_service.getOrderById(ord_id),
      this.shipment_service.getShipmentInvoices(id),
      this.shipment_service.getShipmentsFacturas(id),
    ]).pipe(map((res)=>{
      return {shipment:res[0],order:res[1],invoices:res[2],facturas:res[3]};
       }));
    
  }
}
