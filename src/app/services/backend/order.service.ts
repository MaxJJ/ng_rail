import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Urls} from './api_urls';
import { Order } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   urls=new Urls();
  constructor (private http : HttpClient) {}

  getOrders():Observable<Order[]>{
  
    return this.http.get<Order[]>(this.urls.orders);
  }

  postOrder(order):Observable<Order>{
    return this.http.post<Order>(this.urls.orders,order,httpOptions);
  }

  getOrderById(id):Observable<Object>{
    let url = this.urls.orders+'/'+id;
    
    return this.http.get(url);
  }
}
