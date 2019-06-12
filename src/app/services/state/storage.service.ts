import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _last_active_order: Order;
  constructor() { }


  public get last_active_order(): Order {
    return this._last_active_order;
  }


  public set last_active_order(v: Order) {
    this._last_active_order = v;
  }




}
