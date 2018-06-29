import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import { OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';
import { OrderService } from '../services/backend/order.service';
import {MatDialog} from '@angular/material';
import { OrderInfoComponent } from './order-info/order-info.component';

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
  ds: OrdersTableItem[];
  animal:any;
  addi:string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 
  displayedColumns = ['will_arrive','dispatch_place','destination_place','short_description','shipments'];

  rowClickHandler(row){
    console.log('clicked :',row.id);
    let dialogRef = this.dialog.open(OrderInfoComponent, {
      height: '60vh',
      width: '95vw',
      data:row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ',result);
      this.animal = result;
      
      this.dataSource.data.concat(result);
    });
  }

  constructor(private orders:OrderService,public dialog: MatDialog){
    
  }

 

  ngOnInit() {
  
  //  this.orders.getOrders().subscribe( res=>{ console.log('from subscription! : ',res); ds=res});
   this.orders.getOrders().subscribe( res=>{ 
                                            this.ds=res;
                                            this.dataSource = new OrdersTableDataSource(this.paginator, this.sort,this.ds); 
                                                  }
                                            );

  }


}
