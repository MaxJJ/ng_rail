import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Place } from '../../../interfaces/interfaces';

import { PlaceService } from '../../../services/backend/place.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatAutocompleteSelectedEvent, MatDialog } from '@angular/material';
import { PLACE, PortalsData } from '../../../services/portals/tokens';



@Component({
  selector: 'place-autocomplete',
  templateUrl: './place-autocomplete.component.html',
  styleUrls: ['./place-autocomplete.component.css']
})
export class PlaceAutocompleteComponent implements OnInit {

  @Input()
  placeholder: string = 'place';

  @Input()
  value: Place;

  placeFormControl: FormControl;
  places: Observable<Place[]>;
  v: string;
  @Output()
  selected_place = new EventEmitter<Place>();


  constructor(private service: PlaceService, private dialog: MatDialog, @Inject(PLACE) public place: PortalsData) { }

  filteredPlaces(qry: string) {

    this.places = this.service.searchPlaces(qry);
  }

  placeChange(event: MatAutocompleteSelectedEvent) {
    let selected: Place;
    selected = event.option.value;
    let selected_str = this.placeToString(selected);
    this.placeFormControl.setValue(selected_str);
    this.selected_place.emit(selected);
  }

  clear() {
    this.placeFormControl.reset();
  }

  placeToString(pl: Place) {
    return pl.place_name + ' (' + pl.place_code + ')';
  }

  ngOnInit() {
    this.value = this.place.data;
    this.placeFormControl = new FormControl(this.placeToString(this.value));

    this.placeFormControl.valueChanges.subscribe(v => {
      this.filteredPlaces(v);
      this.v = v;
    });



  }



}
