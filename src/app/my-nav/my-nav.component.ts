import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MenuService, A } from '../services/menu/menu.service';
import { OrderService } from '../services/backend/order.service';
import { OrderComment } from '../services/interfaces';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
  
})
export class MyNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Tablet);
  sideMenu:any[];
  top:string;

  constructor(private breakpointObserver: BreakpointObserver, private menu:MenuService, private order_service:OrderService) {}
 
  ngOnInit() {
  this.menu.top_title.subscribe(t=>this.top=t);

   this.menu.side_menu.subscribe(n=>{
     this.sideMenu=n;
     console.log(n);});
  }

  dosom(a:A){
    
    switch(a){
      case(A.NEW_ORDER):{this.menu.createOrder()}

    }
  }
}
