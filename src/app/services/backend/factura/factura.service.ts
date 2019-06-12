import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura, Cargo } from '../../../interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};

const API: string = 'api/shipments/'

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  createNewFactura(shipment_id: number): Observable<Factura> {


    let url = 'api/shipments/' + shipment_id + '/facturas/create';

    return this.http.get(url);

  }

  getShipmentsFacturas(shipment_id: number): Observable<Factura[]> {

    let url = API + shipment_id + '/facturas/all';

    return this.http.get<Factura[]>(url);
  }

  getFacturaById(id: number): Observable<Factura> {
    let url = 'api/factura/' + id;
    return this.http.get<Factura>(url);
  }
  saveFactura(factura: Factura): Observable<Factura> {
    let url = 'api/factura/' + factura.id;
    return this.http.post<Factura>(url, factura, httpOptions);
  }
  deleteFactura(id) {
    let url = 'api/factura/' + id;
    return this.http.delete<Factura>(url, httpOptions);
  }

  getFacturasCargo(factura_id): Observable<Cargo[]> {
    let url = 'api/factura/' + factura_id + '/cargo';
    return this.http.get<Cargo[]>(url);
  }


}
