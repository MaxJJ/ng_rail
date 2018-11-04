import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { ShipmentsService } from '../services/backend/shipments/shipments.service';
import { Shipment, Railbill, Order } from '../services/interfaces';
import { map } from 'rxjs/operators';
import { OrderService } from '../services/backend/order.service';

interface RwbViewData {
  shipment?: Shipment;
  rwb?:Railbill;
  order?:Order;

}

@Injectable({
  providedIn: 'root'
})
export class RailbillViewResolver implements Resolve<any> {

  constructor(private shipment_service: ShipmentsService,
              private order_service:OrderService,


  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RwbViewData> {

    const sh_id = route.paramMap.get('sh_id');
    const ord_id = route.paramMap.get('id');

    return forkJoin([
      this.shipment_service.getShipmentById(sh_id),
      this.shipment_service.getShipmentsRailbill(sh_id),
      this.order_service.getOrderById(ord_id),



    ]).pipe(map((res) => {
      return {
        shipment: res[0],
        rwb:res[1],
        order:res[2],


      };
    }));
  }
}
