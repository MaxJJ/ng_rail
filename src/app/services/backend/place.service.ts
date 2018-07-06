import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

import {Urls} from './api_urls';
import {Place} from '../interfaces';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};





@Injectable({
  providedIn: 'root'
})


export class PlaceService {
  urls=new Urls();

  constructor(private http : HttpClient) { }

getPlaces():Observable<Place[]>{

  return this.http.get<Place[]>(this.urls.places);
}

postPlace(place:Place):Observable<Place>{

  return this.http.post<Place>(this.urls.places,place,httpOptions);

}
}
