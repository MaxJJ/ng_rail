import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { OrdersTableItem } from '../../orders-table/orders-table-datasource';
import {Urls} from './api_urls';

// enum URLS{
//   GET_ORDERS = 'http://localhost:8000/orders',
  

// }

interface Order{
  id:string;
  short_description:string;
  sdf:"sdf";

}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   urls=new Urls();
  constructor (private http : HttpClient) {}

  getOrders():Observable<OrdersTableItem[]>{
  
    return this.http.get<OrdersTableItem[]>(this.urls.orders);
  }

  getOrderById(id):Observable<Object>{
    let url = this.urls.orders+'/'+id;
    
    return this.http.get(url);
  }
}
