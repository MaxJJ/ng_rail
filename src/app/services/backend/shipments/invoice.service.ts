import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http:HttpClient) { }

  deleteInvoice(id):Observable<any>{
    let url='api/invoice/'+id;
    return this.http.delete(url);

  }
}
