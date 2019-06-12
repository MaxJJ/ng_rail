import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../../../interfaces/interfaces';

const API = "api/cargo/"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};

@Injectable({
  providedIn: 'root'
})

export class CargoService {

  constructor(private http: HttpClient) { }

  getShipmentsCargo(id): Observable<Cargo[]> {

    let url = API + 'of_shipment/' + id;
    return this.http.get<Cargo[]>(url);
  }

  getCargoById(cargo_id, factura_id): Observable<Cargo> {
    let url = 'api/factura/' + factura_id + '/cargo/' + cargo_id;
    return this.http.get(url);
  }



  saveCargo(c: Cargo): Observable<Cargo> {
    let id = c.id;
    let url = API + id;
    return this.http.post(url, c, httpOptions);
  }

  deleteCargo(c: Cargo): Observable<Cargo> {
    let id = c.id;
    let url = API + id;
    return this.http.delete(url);
  }

  searchCargoByDescription(qry: string): Observable<Cargo[]> {
    let url = API + 'search';
    return this.http.get<Cargo[]>(url, { 'params': { "qry": qry } });
  }

  saveFacturasCargo(factura_id, cargo: Cargo[]): Observable<Cargo[]> {
    let url = 'api/factura/' + factura_id + '/cargo';
    return this.http.post<Cargo[]>(url, cargo, httpOptions);
  }

  getIndexedCargo(): Observable<Cargo[]> {
    let url = 'api/cargo/indexed';
    return this.http.get<Cargo[]>(url);
  }
}
