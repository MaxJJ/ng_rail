import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/interfaces';
import { OrderService } from '../services/backend/order.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersTableViewResolver implements Resolve<any>{

  constructor(private orders:OrderService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Order[]>{
    let orders:Order[];
    return this.orders.getOrders().pipe(map(res=>{return res;}));
    
  }
}
