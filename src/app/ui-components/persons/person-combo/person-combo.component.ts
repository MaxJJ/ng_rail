import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../interfaces/interfaces';

@Component({
  selector: 'person-combo',
  templateUrl: './person-combo.component.html',
  styleUrls: ['./person-combo.component.css']
})
export class PersonComboComponent implements OnInit {
@Input()
title:string;
@Input()
person:Person;
@Output()
change:EventEmitter<Person>=new EventEmitter<Person>();



  constructor() { }

  ngOnInit() {
  }

  personHandler(val){
    this.person=val;
    this.change.emit(val)

  }

}
