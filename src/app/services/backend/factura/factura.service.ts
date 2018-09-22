import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../../interfaces';

const API:string = 'api/shipments/'

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient) { }

  createNewFactura(shipment_id:number):Observable<Factura>{

    let id = 0;
    let url = API+shipment_id+'/facturas/'+id;
    
    return this.http.get(url);

  }

  getShipmentsFacturas(shipment_id:number):Observable<Factura[]>{

    let url = API+shipment_id+'/facturas/all';
    
    return this.http.get<Factura[]>(url);
  }


}
