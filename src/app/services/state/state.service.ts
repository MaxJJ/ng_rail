import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Order } from '../../interfaces/interfaces';
import { StorageService } from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly _last_active_order = new BehaviorSubject<Order>(<Order>{});

  readonly last_active_order$ = this._last_active_order.asObservable();


  public get last_active_order(): Order {
    return this._last_active_order.getValue();
  }


  public set last_active_order(order: Order) {
    this._last_active_order.next(order);
  }


  constructor() { }


}
