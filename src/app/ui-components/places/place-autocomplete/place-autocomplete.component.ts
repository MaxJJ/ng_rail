import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '../../../../../node_modules/@angular/forms';
import { Place } from '../../../services/interfaces';

import { PlaceService } from '../../../services/backend/place.service';
import { Observable } from '../../../../../node_modules/rxjs';
import { MatAutocompleteSelectedEvent, MatDialog } from '../../../../../node_modules/@angular/material';
import { OrderIninfoComponent } from '../../dialogs/order-ininfo/order-ininfo.component';
import { AddPlaceDialogComponent } from '../../dialogs/add-place-dialog/add-place-dialog.component';


@Component({
  selector: 'place-autocomplete',
  templateUrl: './place-autocomplete.component.html',
  styleUrls: ['./place-autocomplete.component.css']
})
export class PlaceAutocompleteComponent implements OnInit {

  @Input()
  placeholder:string;

  placeFormControl:FormControl;
  places:Observable<Place[]>;

  @Output()
  selected_place = new EventEmitter<Place>();


  constructor(private service:PlaceService,private dialog: MatDialog) { }

  filteredPlaces(qry:string){
    
    this.places= this.service.searchPlaces(qry);
  }

  placeChange(event:MatAutocompleteSelectedEvent){
    let selected:Place;
    selected=event.option.value;
    let selected_str=selected.place_name+' / '+selected.place_code;
    this.placeFormControl.setValue(selected_str);
    this.selected_place.emit(selected);
  }

  clear(){
    this.placeFormControl.reset();
  }

  openAddPlaceDialog(){
    let dialogRef = this.dialog.open(AddPlaceDialogComponent, {
      height: '90vh',
      width: '400px',
      data: "test",
    });

    dialogRef.afterClosed().subscribe(result => {
      
      

    });


  }

  ngOnInit() {
    this.placeFormControl=new FormControl();

    this.placeFormControl.valueChanges.subscribe(v=>this.filteredPlaces(v));


  
  }

 

}
