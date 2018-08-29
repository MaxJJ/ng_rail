import { Injectable } from '@angular/core';
import { Shipment } from '../../interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../api_urls';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  urls:Urls = new Urls();
  constructor(private http:HttpClient) { }

  createNewShipment():Observable<Shipment>{
    let new_sh = this.http.get<Shipment>(this.urls.create_shipment);
    return new_sh;
  }

  getShipmentById(id):Observable<Shipment>{

    return this.http.get<Shipment>(this.urls.shipment+id);
  }


}
