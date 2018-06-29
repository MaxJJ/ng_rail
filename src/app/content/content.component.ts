import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  @Input("test") 
  test: any;

  @Input("l") 
  lk: number;

  displayedColumns=["id","customer"];
  dataSource = new MatTableDataSource();
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  applyFilter(filterValue: string) {
    
    console.log('test in apply filter',this.test)
    
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  };
  
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    console.log(this.dataSource.data)
    console.log('test in content init',this.test)
  }

ngOnChanges(){
    this.dataSource.data=this.test;
    console.log('test in content on changes',this.test)
  }

}

export interface MyTable{
  id:number;
  customer:string;
}

