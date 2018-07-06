import { Component, OnInit ,Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment} from 'moment';
import { Order } from '../../../services/interfaces';
import { OrderService } from '../../../services/backend/order.service';
import { MatDialog } from '@angular/material';
import { RtmeDatepickerComponent } from '../../date/rtme-datepicker/rtme-datepicker.component';
import { OrderIninfoComponent } from '../../dialogs/order-ininfo/order-ininfo.component';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'in-info',
  templateUrl: './in-info.component.html',
  styleUrls: ['./in-info.component.css'],
})

export class InInfoComponent implements OnInit {
  _model:any;
  
  @Input() 
  set model(model:any){
    this._model=model;
   
  }
  get model(){
    return this._model;
  }

  getDate(){
    return this._model.will_arrive;
  }

  openInInfoDialog(){
    let dialogRef = this.dialog.open(OrderIninfoComponent, {
      height: '80vh',
      width: '400px',
      data:this.model,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('model :',result);
      this.order_service.postOrder(result).subscribe(res=>this._model = res);
      
    });


  }

  constructor(private order_service:OrderService,private dialog:MatDialog) { }



  ngOnInit() {
  
    
  }



}
