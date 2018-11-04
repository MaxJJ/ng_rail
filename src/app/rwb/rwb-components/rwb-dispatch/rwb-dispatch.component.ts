import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../../services/interfaces';

@Component({
  selector: 'rwb-dispatch',
  templateUrl: './rwb-dispatch.component.html',
  styleUrls: ['./rwb-dispatch.component.css']
})
export class RwbDispatchComponent implements OnInit {
  @Input()
  station:Place;

  constructor() { }

  ngOnInit() {
  }

}
