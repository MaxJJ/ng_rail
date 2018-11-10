import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoadSection } from '../../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RailbillService {

  constructor(private http:HttpClient) { }


  createRoadSection(rwb_id):Observable<RoadSection>{
    let url='api/shipments/'+rwb_id+'/rwb/road_sections/create';
    return this.http.get(url);
  }

}
