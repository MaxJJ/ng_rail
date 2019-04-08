import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../../services/interfaces';
import { MatDialog, MatAutocompleteSelectedEvent } from '@angular/material';
import { PlaceService } from '../../services/backend/place.service';
import { DirectoriesService } from '../../services/backend/directories/directories.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';



const checkIf = (query: string, compare: string): boolean => {
  let q = query.toString().toLowerCase();
  let c = compare.toString().toLowerCase();

  return c.includes(q);
}

@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  @Input()
  place: Place;

  @Input()
  title: string;

  @Output()
  onPlace: EventEmitter<Place> = new EventEmitter<Place>();

  opened: boolean = false;

  places: Place[];
  filtered_places: Observable<Place[]>;

  fc: FormControl = new FormControl('');

  constructor(private service: DirectoriesService) { }

  ngOnInit() {
    this.service.fetchPlaces().subscribe(pls => {
      this.places = pls;
      this.filtered_places = this.fc.valueChanges.pipe(
        // startWith(''),
        map(
          qry => {
            return this.places.filter((v, i, a) => checkIf(qry, v.place_name) || checkIf(qry, v.place_code))
          }
        )

      );
    });

  }


  expand_card() {
    this.opened = this.opened ? false : true;
  }


  onPlaceSelected(ev: MatAutocompleteSelectedEvent) {

    this.place = ev.option.value;
    this.fc.setValue('');
    this.onPlace.emit(this.place);

  }


}
