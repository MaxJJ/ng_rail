import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../../../interfaces/interfaces';

@Component({
  selector: 'place-raw',
  templateUrl: './place-raw.component.html',
  styleUrls: ['./place-raw.component.css']
})
export class PlaceRawComponent implements OnInit {

  @Input()
  place: Place;
  @Input()
  title: string;
  @Input()
  editable: boolean = true;

  @Output()
  change: EventEmitter<Place> = new EventEmitter<Place>();

  paddingRight = 0;

  constructor() { }

  ngOnInit() {
    if (this.editable) { this.paddingRight = 2 };
  }

  onEdit() {
    this.change.emit(this.place);
  }
}
