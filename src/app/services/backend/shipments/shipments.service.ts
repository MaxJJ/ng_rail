import { Injectable } from '@angular/core';
import { Shipment, Invoice } from '../../interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../api_urls';

const API = "api/orders/"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  urls:Urls = new Urls();
  constructor(private http:HttpClient) { }

  createNewShipment(order_id):Observable<Shipment>{
    let url = API+order_id+'/shipments/create';
    // let new_sh = this.http.get<Shipment>(this.urls.create_shipment);
    return this.http.get(url);
  }

  getShipmentById(id):Observable<Shipment>{

    return this.http.get<Shipment>(this.urls.shipment+id);
  }

  saveShipment(order_id,s:Shipment):Observable<Shipment>{
    let url = API+order_id+'/shipments/'+s.id;
    return this.http.post(url,s,httpOptions);
  }
  
  getOrdersShipments(order_id):Observable<Shipment[]>{
    let url = API+order_id+'/shipments';
    return this.http.get<Shipment[]>(url);
  }

  createDeleteContainer(shipment_id,qry):Observable<Shipment>{

    /** qry=0 - create container /  qry!=0 delete container **/

    let url = 'api/shipments/'+shipment_id+'/container/'+qry;
    return this.http.get(url);
  }

  createInvoice(shipment_id):Observable<Invoice>{
    let url = 'api/shipments/'+shipment_id+'/invoices/create';
    return this.http.get<Invoice>(url);
  }

}
