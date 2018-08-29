import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderComment } from '../../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  COMMENTS: string = 'api/comments/'
  constructor(private http: HttpClient) { }

  getComment(order_id, id): Observable<OrderComment> {
    const url = this.COMMENTS + order_id + '/comment/' + id;
    return this.http.get<OrderComment>(url);
  }

  deleteComment(order_id, id): Observable<OrderComment> {
    const url = this.COMMENTS + order_id + '/comment/' + id;
    return this.http.delete<OrderComment>(url);
  }

  getCommentsToOrder(order_id): Observable<OrderComment[]> {
    const url = this.COMMENTS + order_id + '/order_comments' ;
    return this.http.get<OrderComment[]>(url);
  }

  saveComment(comment:OrderComment): Observable<OrderComment>{
    let order_id=comment.order;
    let id=comment.id;
    const url = this.COMMENTS + order_id + '/comment/' + id;
    return this.http.post<OrderComment>(url,comment,httpOptions);
    
  }
}
