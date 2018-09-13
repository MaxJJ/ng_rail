import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';
import { Order, Cargo, Shipment } from '../../../services/interfaces';
import { OrderService } from '../../../services/backend/order.service';
import { MatDialog } from '@angular/material';
import { RtmeDatepickerComponent } from '../../date/rtme-datepicker/rtme-datepicker.component';
import { OrderIninfoComponent } from '../../dialogs/order-ininfo/order-ininfo.component';
import { OrderInboundCargoComponent } from '../../dialogs/order-inbound-cargo/order-inbound-cargo.component';
import { isNullOrUndefined } from 'util';
import { MenuService } from '../../../services/menu/menu.service';

import { Router } from '../../../../../node_modules/@angular/router';

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
  _model: any;
  inbound_cargo: Cargo[];
  new_cargo: Cargo;
  shipments: Shipment[];



  @Input()
  set model(model: any) {
    this._model = model;
    this.inbound_cargo = model.inbound_cargo;
    this.shipments = model.shipments;
  }
  get model() {
    return this._model;
  }



  getDate() {
    return this._model.will_arrive;
  }

  openInInfoDialog() {
    let dialogRef = this.dialog.open(OrderIninfoComponent, {
      height: '90vh',
      width: '400px',
      data: this.model,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('model :', result);
      this.order_service.postOrder(result).subscribe(res => this.model = res);

    });


  }

  

  constructor(private order_service: OrderService, private dialog: MatDialog,private menu:MenuService,private router:Router) { }



  ngOnInit() {
 
  }



}
