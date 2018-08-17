import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from '../../../../node_modules/rxjs';
import { Router } from '../../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  side_menu: Observable<any[]>;
  next_menu: Subscriber<any[]>;
  menu_items: any;


  constructor(private router: Router) {
    this.side_menu = new Observable(s => this.next_menu = s);
    this._setMenuItems(router);
  }

  setSideMenu(next_val: any[]) {
    this.next_menu.next(next_val);
  }
 

  private _setMenuItems(router: Router) {
    this.menu_items = {
      orders: { title: 'Orders', 
                  action: function () { router.navigate(['/orders']) } },
      places: { title:"Places",
                action: function () { router.navigate(['/places'])}},

    };

  }

  setInInfoMenu(){
    let menu:any[]=[];
    let m:any=this.menu_items;
    menu.push(m.orders,
              m.places);
    
    this.setSideMenu(menu);
  }
}

