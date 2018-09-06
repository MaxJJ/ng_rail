import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../interfaces';

const API = "api/persons/"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};


@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http:HttpClient) { }

getPerson(id):Observable<Person>{

  return this.http.get<Person>(API+id);
}

savePerson(person:Person):Observable<Person>{
  
  return this.http.post<Person>(API+'save',person,httpOptions);
}

searchPerson(qry):Observable<Person[]>{
  let url = API+'/search';
  return this.http.get<Person[]>(url,{'params':{"query":qry}});
}
}
