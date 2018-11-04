import { Injectable, Type } from '@angular/core';
import { Observable, Subject, Subscriber } from '../../../../node_modules/rxjs';
import { Router } from '../../../../node_modules/@angular/router';
import { OrderService } from '../backend/order.service';
import { Order } from '../interfaces';
import { OrdersSideMenuComponent } from '../../orders-table/side-menu/orders-side-menu/orders-side-menu.component';
import { OrderDetailsSideMenuComponent } from '../../order-details/side-menu/order-details-side-menu/order-details-side-menu.component';
import { ShipmentViewSideMenuComponent } from '../../shipment/shipment/side-menu/shipment-view-side-menu/shipment-view-side-menu.component';
import { FacturaViewSideMenuComponent } from '../../factura/factura-side-menu/factura-view-side-menu/factura-view-side-menu.component';
import { RailbillSideMenuComponent } from '../../rwb/railbill-side-menu/railbill-side-menu.component';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  side_menu: Observable<Type<any>>;
  next_menu: Subscriber<Type<any>>;
  top_title: Observable<string>;
  next_top_title: Subscriber<string>;
  menu_items: any;
  
  data:Observable<any>;
  next_data:Subscriber<any>;



  constructor(private router: Router,
             
              ) {
    this.side_menu = new Observable(s => this.next_menu = s);
    this.data = new Observable(d => this.next_data= d);
    this.top_title = new Observable(tt => this.next_top_title= tt);
  }

pushData(d:any){
this.next_data.next(d);
}  
setOrderTableSideMenu(){
  this.next_menu.next(OrdersSideMenuComponent);
}

setOrderDetailsSideMenu(){
  this.next_menu.next(OrderDetailsSideMenuComponent);
}

setShipmentViewSideMenu(){
  this.next_menu.next(ShipmentViewSideMenuComponent);
}

setFacturaViewSideMenu(){
  this.next_menu.next(FacturaViewSideMenuComponent);
}

setRwbViewSideMenu(){
  this.next_menu.next(RailbillSideMenuComponent);
}


  setTopTitle(val:string){
    this.next_top_title.next(val);
  }




}

