import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../../services/interfaces';

@Component({
  selector: 'place-raw',
  templateUrl: './place-raw.component.html',
  styleUrls: ['./place-raw.component.css']
})
export class PlaceRawComponent implements OnInit {

  @Input()
  place:Place;
  @Input()
  title:string;

  constructor() { }

  ngOnInit() {
  }

}
