import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;
  @Input("datas")
  datas: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
/**
 * name
 */
constructor(){
  console.log('from constructor datas = ',this.datas);
  
}
public getdatas() {
  return this.datas;
}
  ngOnInit() {
    console.log('data table component datas = ',this.getdatas());
    
    this.dataSource = new DataTableDataSource(this.datas,this.paginator, this.sort);
  }
}
