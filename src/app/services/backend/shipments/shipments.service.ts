import { Injectable } from '@angular/core';
import { Shipment, Invoice, Factura, Railbill } from '../../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../api_urls';

const API = "api/orders/"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  urls: Urls = new Urls();
  constructor(private http: HttpClient) { }

  createNewShipment(order_id): Observable<Shipment> {
    let url = API + order_id + '/shipments/create';
    // let new_sh = this.http.get<Shipment>(this.urls.create_shipment);
    return this.http.get(url);
  }

  getShipmentById(id): Observable<Shipment> {

    return this.http.get<Shipment>(this.urls.shipment + id);
  }

  saveShipment(s: Shipment): Observable<Shipment> {
    let url = 'api/shipments/' + s.id;
    return this.http.post(url, s, httpOptions);
  }

  deleteShipment(id): Observable<any> {
    let url = 'api/shipments/' + id;
    return this.http.delete(url, httpOptions);
  }

  getOrdersShipments(order_id): Observable<Shipment[]> {
    let url = API + order_id + '/shipments';
    return this.http.get<Shipment[]>(url);
  }

  createDeleteContainer(shipment_id, qry): Observable<Shipment> {

    /** qry=0 - create container /  qry!=0 delete container **/

    let url = 'api/shipments/' + shipment_id + '/container/' + qry;
    return this.http.get(url);
  }


  getShipmentInvoices(shipment_id): Observable<Invoice[]> {
    let url = 'api/shipments/' + shipment_id + '/invoices';
    return this.http.get<Invoice[]>(url);
  }
  saveShipmentInvoices(shipment_id, invoices: Invoice[]): Observable<Invoice[]> {
    let url = 'api/shipments/' + shipment_id + '/invoices';
    return this.http.post<Invoice[]>(url, invoices, httpOptions);
  }
  createInvoice(shipment_id): Observable<Invoice> {
    let url = 'api/shipments/' + shipment_id + '/invoices/create';
    return this.http.get<Invoice>(url);
  }

  getShipmentsFacturas(shipment_id): Observable<Factura[]> {
    let url = 'api/shipments/' + shipment_id + '/facturas';

    return this.http.get<Factura[]>(url);
  }

  getShipmentsRailbill(shipment_id): Observable<Railbill> {
    let url = 'api/shipments/' + shipment_id + '/rwb';

    return this.http.get<Railbill>(url);
  }

  createRailbill(shipment_id): Observable<Railbill> {
    let url = 'api/shipments/' + shipment_id + '/rwb/create';

    return this.http.get<Railbill>(url);
  }

}
