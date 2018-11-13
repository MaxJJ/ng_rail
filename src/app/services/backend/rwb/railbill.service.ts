import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoadSection, Railbill } from '../../interfaces';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class RailbillService {

  constructor(private http:HttpClient) { }


  createRoadSection(rwb_id):Observable<RoadSection>{
    let url='api/shipments/'+rwb_id+'/rwb/road_sections/create';
    return this.http.get(url);
  }

  saveRailbill(rwb:Railbill):Observable<Railbill>{

    let sh_id=rwb.shipment;
    let url='api/shipments/'+sh_id+'/rwb';
    return this.http.post(url,rwb,httpOptions);

  }
}
