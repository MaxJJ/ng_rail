import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../../interfaces/interfaces';

@Component({
  selector: 'rwb-destination',
  templateUrl: './rwb-destination.component.html',
  styleUrls: ['./rwb-destination.component.css']
})
export class RwbDestinationComponent implements OnInit {
  @Input()
  station: Place;

  constructor() { }

  ngOnInit() {
  }

}
