import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment} from 'moment';
import { Order } from '../../../services/interfaces';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'rtme-datepicker',
  templateUrl: './rtme-datepicker.component.html',
  styleUrls: ['./rtme-datepicker.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})


export class RtmeDatepickerComponent implements OnInit {
  _date:any;
  dateFc:FormControl;

  date_val:any
  @Input() 
  set date(date:any){
    this._date=date;
    this.dateFc=new FormControl(moment(this._date,"DD-MM-YYYY"));
    this.dateFc.statusChanges.subscribe(res=>this.date_val=res);
  }
  get date(){
    return this._date;
  }

  @Input()
  placeholder:string;
  
  @Output()
  new_date:EventEmitter<string> = new EventEmitter<string>();
  
  startat(){
   
    return moment(this._date);


  }

  dateChangeHandler(event: MatDatepickerInputEvent<Moment>){
    this.new_date.emit(
     moment(event.value).format("DD-MM-YYYY")
    );
  }
  constructor() { }

  ngOnInit() {
  }

}
