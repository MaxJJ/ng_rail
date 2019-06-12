import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Urls } from './api_urls';
import { Place } from '../../interfaces/interfaces';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};





@Injectable({
  providedIn: 'root'
})


export class PlaceService {
  urls = new Urls();

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {

    return this.http.get<Place[]>(this.urls.places);
  }

  searchPlaces(qry: string): Observable<Place[]> {
    let url;
    url = this.urls.places + '/search';
    return this.http.get<Place[]>(url, { 'params': { "qry": qry } });
  }

  postPlace(place: Place): Observable<Place> {

    return this.http.post<Place>(this.urls.places, place, httpOptions);

  }

  /**
   * Creates new Place on backend
   * @param none
   * @returns Observable<Place>
   */

  createPlace(): Observable<Place> {
    let url = 'api/places/create';
    return this.http.get<Place>(url);
  }
}
