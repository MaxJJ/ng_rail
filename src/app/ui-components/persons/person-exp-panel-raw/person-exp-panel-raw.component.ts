import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../interfaces/interfaces';

@Component({
  selector: 'person-exp-panel-raw',
  templateUrl: './person-exp-panel-raw.component.html',
  styleUrls: ['./person-exp-panel-raw.component.css']
})
export class PersonExpPanelRawComponent implements OnInit {

  @Input()
  person:Person

  @Input()
  title:string;

  constructor() { }

  ngOnInit() {
  }

}
