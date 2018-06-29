import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {Urls} from './api_urls';
import {Place} from '../interfaces';


@Injectable({
  providedIn: 'root'
})


export class PlaceService {
  urls=new Urls();
  constructor(private http : HttpClient) { }

getPlaces(){

  return this.http.get<Place[]>(this.urls.places);
}
}
