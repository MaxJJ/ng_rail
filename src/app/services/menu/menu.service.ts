import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from '../../../../node_modules/rxjs';
import { Router } from '../../../../node_modules/@angular/router';
import { OrderService } from '../backend/order.service';
import { Order } from '../interfaces';

class SideMenuItem{
  title:string;
  action:A;
  constructor(title:string,action:any){
    this.title=title;
    this.action=action;
  }

}

export enum A{
  NEW_ORDER,
}

interface MenuReturnData{
  orders?:Order[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  side_menu: Observable<any[]>;
  next_menu: Subscriber<any[]>;
  top_title: Observable<string>;
  next_top_title: Subscriber<string>;
  menu_items: any;
  side_menu_items:SideMenuItem[] = [];
  data:Observable<MenuReturnData>;
  next_data:Subscriber<MenuReturnData>;



  constructor(private router: Router,
              public order_service:OrderService,
              ) {
    this.side_menu = new Observable(s => this.next_menu = s);
    this.data = new Observable(d => this.next_data= d);
    this.top_title = new Observable(tt => this.next_top_title= tt);
  }

  setSideMenu(next_val: any[]) {
    this.next_menu.next(next_val);
  }

  setTopTitle(val:string){
    this.next_top_title.next(val);
  }

  createAddMenuItemAndPush(title:string,action:A){

    let item = new SideMenuItem(title,action);
    this.side_menu_items.push(item);
    this.setSideMenu(this.side_menu_items);

  }

  cleanSideMenuItems(){

    this.side_menu_items = [];
  }

  createOrder(){
    this.order_service.getNewOrder().toPromise().then((res)=>{
      let order_item=res;
      this.router.navigate(['order',order_item.id]);});
  }



  printXZ(){

    console.log("HZ");
  }

  returnOrdersInWork(){
  
  }
}

