import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Urls } from './api_urls';
import { Order, Cargo, InboundDoc } from '../../interfaces/interfaces';
import { map, mergeMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  urls = new Urls();
  constructor(private http: HttpClient) { }

  getNewOrder(): Observable<Order> {

    return this.http.get<Order>(this.urls.new_order);
  }

  getOrders(): Observable<Order[]> {

    return this.http.get<Order[]>(this.urls.orders);
  }

  postOrder(order): Observable<Order> {

    return this.http.post<Order>(this.urls.orders, order, httpOptions);
  }

  deleteOrder(order_id): Observable<Order> {
    const url = 'api/orders/' + order_id + '/delete';
    //  let result:Observable<Order>; 
    //  return this.getOrderById(order_id).pipe(mergeMap(order=>
    //    <Observable<Order>>this.http.post<Order>(url,order,httpOptions)
    //   ));

    return this.http.delete<Order>(url);

  }

  getOrderById(id): Observable<Order> {
    let url = this.urls.orders + '/' + id;

    return this.http.get<Order>(url);
  }

  getNewCargo(): Observable<Cargo> {
    let url = this.urls.newcargo;
    return this.http.get(url);

  }
  deleteCargo(id): Observable<Object> {
    let url = this.urls.deletecargo + id;

    return this.http.delete(url);

  }

  createInboundDoc(id): Observable<InboundDoc[]> {
    let url = 'api/orders/' + id + '/indocs/' + 0;
    return this.http.get<InboundDoc[]>(url);
  }

  deleteInboundDoc(id, doc_id): Observable<InboundDoc[]> {
    let url = 'api/orders/' + id + '/indocs/' + doc_id;
    return this.http.get<InboundDoc[]>(url);
  }
}
