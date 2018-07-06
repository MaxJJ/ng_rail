import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import { OrdersTableDataSource } from './orders-table-datasource';
import { OrderService } from '../services/backend/order.service';
import {MatDialog} from '@angular/material';
import { Router } from '@angular/router';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 
  displayedColumns = ['will_arrive','dispatch_place','destination_place','short_description','shipments'];

  rowClickHandler(row){
    
    this.router.navigate(['order',row.id]);

  }

  

  constructor(private orders:OrderService,public dialog: MatDialog,private router:Router){
    
  }

 

  ngOnInit() {
  this.dataSource = new OrdersTableDataSource(this.paginator,this.sort,this.orders);
 
  }


}
