import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PlaceTableDataSource } from './place-table-datasource';
import { PlaceService} from '../services/backend/place.service';
import {MatDialog} from '@angular/material';
import { PlaceDetailsComponent } from './place-details/place-details.component';
@Component({
  selector: 'place-table',
  templateUrl: './place-table.component.html',
  styleUrls: ['./place-table.component.css']
})
export class PlaceTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PlaceTableDataSource;

  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'place_name','place_code'];


constructor(private places_service:PlaceService,private dialog:MatDialog){}

  ngOnInit() {
      this.dataSource = new PlaceTableDataSource(this.paginator, this.sort,this.places_service);
  }

  rowClickHandler(row){
    
      let dialogRef = this.dialog.open(PlaceDetailsComponent, {
      height: '60vh',
      width: '95vw',
      data:row,
    });
}
