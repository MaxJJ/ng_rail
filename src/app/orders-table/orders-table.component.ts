import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { OrdersTableDataSource } from './orders-table-datasource';
import { OrderService } from '../services/backend/order.service';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../interfaces/interfaces';
import { MenuService } from '../services/menu/menu.service';


@Component({
  selector: 'orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],

})
export class OrdersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: OrdersTableDataSource;
  orders_data: Order[];
  order_item: Order;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  displayedColumns = ['will_arrive', 'dispatch_place', 'destination_place', 'short_description', 'shipments'];

  rowClickHandler(row) {
    this.router.navigate(['order', row.id]);
  }

  constructor(private orders: OrderService,
    public dialog: MatDialog,
    private router: Router,
    private menu: MenuService,
    private route: ActivatedRoute, ) {

  }


  ngOnInit() {
    //  this.menu.setOrderTableSideMenu();
    this.route.data.subscribe((data) => {
      this.dataSource = new OrdersTableDataSource(this.paginator, this.sort, data.orders);
    });

    // this.orders.getOrders().toPromise().then((res)=>{this.orders_data=res;
    //                                                  this.dataSource=new OrdersTableDataSource(this.paginator,this.sort,this.orders_data);});

  }


}
