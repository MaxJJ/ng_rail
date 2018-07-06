import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PlaceTableDataSource } from './place-table-datasource';
import { PlaceService} from '../services/backend/place.service';
import {MatDialog} from '@angular/material';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'place-table',
  templateUrl: './place-table.component.html',
  styleUrls: ['./place-table.component.css']
})
export class PlaceTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PlaceTableDataSource;
  route:ActivatedRoute;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['place_name','place_code','road_name_abbr', 'road_operator_name','road_code'];


constructor(private places_service:PlaceService,
            private dialog:MatDialog,
            private router:Router){}

  ngOnInit() {
      this.dataSource = new PlaceTableDataSource(this.paginator, this.sort,this.places_service);
  }

  rowClickHandler(row){
    
      let dialogRef = this.dialog.open(PlaceDetailsComponent, {
      height: '80vh',
      width: '400px',
      data:row,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.places_service.postPlace(result).subscribe(res=>this.dataSource = new PlaceTableDataSource(this.paginator,this.sort,this.places_service));
      
    });
  }

  newplace(){
    let dialogRef = this.dialog.open(PlaceDetailsComponent, {
      height: '80vh',
      width: '400px',
      data:{'id':-1},
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.places_service.postPlace(result).subscribe((res)=>{this.dataSource = new PlaceTableDataSource(this.paginator,this.sort,this.places_service)});
      
    });

  }

}
