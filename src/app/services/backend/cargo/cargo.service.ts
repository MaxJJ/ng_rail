import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../../interfaces';

const API = "api/cargo/"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})

export class CargoService {

  constructor(private http:HttpClient) { }

  getShipmentsCargo(id):Observable<Cargo[]>{

    let url = API+'of_shipment/'+id;
    return this.http.get<Cargo[]>(url);
  }

  getCargoById(id):Observable<Cargo>{
    let url = API+id;
    return this.http.get(url);
  }

  saveCargo(c:Cargo):Observable<Cargo>{
    let id=c.id;
    let url = API+id;
    return this.http.post(url,c,httpOptions);
  }

  deleteCargo(c:Cargo):Observable<Cargo>{
    let id=c.id;
    let url = API+id;
    return this.http.delete(url);
  }

  searchCargoByDescription(qry:string):Observable<Cargo[]>{
    let url=API+'search';
    return this.http.get<Cargo[]>(url,{'params':{"qry":qry}});
  }
}
