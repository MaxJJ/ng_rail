import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, } from '@angular/material';
import { Order, Place } from '../../../interfaces/interfaces';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';
import { PlaceService } from '../../../services/backend/place.service';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MenuService } from '../../../services/menu/menu.service';


const moment = _rollupMoment || _moment;



@Component({
  selector: 'app-order-ininfo',
  templateUrl: './order-ininfo.component.html',
  styleUrls: ['./order-ininfo.component.css'],

})
export class OrderIninfoComponent implements OnInit {
  order: Order;

  date: Moment;
  places: Place[];
  placeDispatch:Place;
  placeDestination:Place;
  stOfDispCtrl: FormControl;
  stOfDestpCtrl: FormControl;
  filteredPlaces: Observable<Place[]>;
  dispatch_station_str:string;
  

  constructor(public dialogRef: MatDialogRef<OrderIninfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private place_service: PlaceService,private menu:MenuService) {

    this.order = data;
    
    this.stOfDispCtrl = new FormControl(this._place_to_string(this.order.dispatch_place));
    this.stOfDestpCtrl = new FormControl(this._place_to_string(this.order.destination_place));
    
  }

  private _place_to_string(pl:Place){
    return pl.place_name+' / '+pl.place_code;
  }

  private _places() {
    this.place_service.getPlaces().toPromise().then(res => {
      this.places = res;
      this.setFp();
    });
  }

  setEta(e) {
    this.date = e.value;
    this.order.will_arrive = this.date.format("DD-MM-YYYY");
  }

  setFp() {
    this.filteredPlaces = this.stOfDispCtrl.valueChanges
      .pipe(
        startWith(''),
        map(check=> typeof check === "string" ? check : this._place_to_string(check) ),
        map(pln => pln ? this._filterPlaces(pln) : this.places.slice())
      );  
  }



  diChange(e:MatAutocompleteSelectedEvent){
   this.order.dispatch_place=e.option.value;
   this.dispatch_station_str=this._place_to_string(this.order.dispatch_place);
   this.stOfDispCtrl.setValue(this.dispatch_station_str);
  }

  private _filterPlaces(value: string): Place[] {
    const filterValue = value.toLowerCase();
    return this.places.filter(pl => pl.place_name.toLowerCase().indexOf(filterValue) >= 0 || pl.place_code.toLowerCase().indexOf(filterValue) === 0);
  }

  plChange(place:Place){
    console.log(place.place_name)
  }

  ngOnInit() {
    this._places();


    this.date = moment(this.order.will_arrive, "DD-MM-YYYY");



  }

}
