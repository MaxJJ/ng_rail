import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';


import { SideMenuDirective } from '../directives/menu/side-menu/side-menu.directive';
import { OrdersSideMenuComponent } from '../orders-table/side-menu/orders-side-menu/orders-side-menu.component';
import { MenuService } from '../services/menu/menu.service';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
  
})
export class MyNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Tablet);
  sideMenu:any[];
  top:string;
data:any;
  @ViewChild(SideMenuDirective) side_menu_host:SideMenuDirective;

  constructor(private breakpointObserver: BreakpointObserver, 
              private menu:MenuService, 
             
              private resolver:ComponentFactoryResolver) {}
 
  ngOnInit() {
   
  this.menu.top_title.subscribe(t=>this.top=t);
    
   this.menu.side_menu.subscribe(n=>{
 
  this.side_menu_host.sideMenuContainerRef.clear();
   let cmp:any = this.side_menu_host.sideMenuContainerRef.createComponent(this.resolver.resolveComponentFactory(n));
   this.menu.data.subscribe(d=>{
     this.data=d;
     cmp.instance.data=this.data;
    });  
   
  }); 
  }


}
