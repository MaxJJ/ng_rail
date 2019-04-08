import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  fetchCountries(): Observable<Country[]> {

    let url = 'api/directories/countries';
    return this.http.get<Country[]>(url);
  }

}
