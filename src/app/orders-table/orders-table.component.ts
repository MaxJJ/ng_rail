import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import { OrdersTableDataSource } from './orders-table-datasource';
import { OrderService } from '../services/backend/order.service';
import {MatDialog} from '@angular/material';
import { Router } from '@angular/router';
import { Order } from '../services/interfaces';
import { MenuService, A } from '../services/menu/menu.service';

@Component({
  selector: 'orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],

})
export class OrdersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // expandedElement:OrdersTableItem;
  dataSource: OrdersTableDataSource;
  orders_data:Order[];
  order_item:Order;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 
  displayedColumns = ['will_arrive','dispatch_place','destination_place','short_description','shipments'];

  rowClickHandler(row){
    this.router.navigate(['order',row.id]);
  }

  constructor(private orders:OrderService,public dialog: MatDialog,private router:Router,private menu:MenuService){
    
  }
  

addNew(){
  this.orders.getNewOrder().toPromise().then((res)=>{this.order_item=res;
                                                     this.router.navigate(['order',this.order_item.id]);});
}
 
  ngOnInit() {
    // this.menu.setInInfoMenu();
   
  this.orders.getOrders().toPromise().then((res)=>{this.orders_data=res;
                                                   this.dataSource=new OrdersTableDataSource(this.paginator,this.sort,this.orders_data);})

  this.setMenu();                                                 
  }

setMenu(){
  this.menu.cleanSideMenuItems();
  this.menu.setTopTitle(" Orders ");
  this.menu.createAddMenuItemAndPush('Create New Order',A.NEW_ORDER);

}

}
