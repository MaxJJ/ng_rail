import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { Order, Place } from '../../../services/interfaces';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment} from 'moment';
import { PlaceService } from '../../../services/backend/place.service';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const moment = _rollupMoment || _moment;



@Component({
  selector: 'app-order-ininfo',
  templateUrl: './order-ininfo.component.html',
  styleUrls: ['./order-ininfo.component.css'],

})
export class OrderIninfoComponent implements OnInit {
  order: Order;

  date:Moment;
  places:Place[];
  stOfDispCtrl:FormControl;
  filteredPlaces: Observable<Place[]>;
  
  constructor(public dialogRef: MatDialogRef<OrderIninfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private place_service:PlaceService) {

      this.order = data;
      this.stOfDispCtrl=new FormControl(this.order.dispatch_place);
  }

  private _places(){
    this.place_service.getPlaces().toPromise().then(res=>{this.places=res;
                                                          this.setFp();});
  }

  setEta(e){
    this.date=e.value;
   
    this.order.will_arrive = this.date.format("DD-MM-YYYY");

  }

  setFp(){
    this.filteredPlaces = this.stOfDispCtrl.valueChanges
    .pipe(
      startWith(''),
      map(pln => pln ? this._filterPlaces(pln) : this.places.slice())
    );
  }

  private _filterPlaces(value: string): Place[] {
    const filterValue = value.toLowerCase();
 
    return this.places.filter(pl => pl.place_name.toLowerCase().indexOf(filterValue) >= 0 || pl.place_code.toLowerCase().indexOf(filterValue) === 0  );
  }

  ngOnInit() {
    this._places();
    
    
    this.date=moment(this.order.will_arrive,"DD-MM-YYYY");
    


  }

}
