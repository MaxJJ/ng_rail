import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unit, Package } from '../../interfaces';
import { Observable } from 'rxjs';

const API = "api/directories/";

@Injectable({
  providedIn: 'root'
})
export class DirectoriesService {

  constructor(private http:HttpClient) { }


  searchUnit(qry):Observable<Unit[]>{
   let url=API+'units';
   return this.http.get<Unit[]>(url,{'params':{"query":qry}});
  }
 
  searchPackage(qry):Observable<Package[]>{
    let url=API+'packages';
    return this.http.get<Package[]>(url,{'params':{"query":qry}});
   }

}

