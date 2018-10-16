import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../services/interfaces';
import { OrderService } from '../services/backend/order.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsResolver implements Resolve<any> {

  constructor(private order_service:OrderService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Order>{
    const order_id = route.paramMap.get('id');
    return this.order_service.getOrderById(order_id).pipe(map(ord=>{return ord;}));
  }
}
