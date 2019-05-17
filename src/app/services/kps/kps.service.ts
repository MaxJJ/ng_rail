import { Injectable } from '@angular/core';
import { NgxSoapService, Client } from 'ngx-soap';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KpsService {


  constructor(private http: HttpClient) { }


  findStation(qry: string): Observable<any> {
    let url = 'api/kps/find_station'

    return this.http.get(url, { 'params': { "qry": qry } });

  }

}
