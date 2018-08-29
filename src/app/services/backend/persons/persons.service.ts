import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../interfaces';

const API = "api/persons/"

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http:HttpClient) { }

getPerson(id):Observable<Person>{

  return this.http.get<Person>(API+id);
}
}
