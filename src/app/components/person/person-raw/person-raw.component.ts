import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../interfaces/interfaces';


@Component({
  selector: 'person-raw',
  templateUrl: './person-raw.component.html',
  styleUrls: ['./person-raw.component.css']
})
export class PersonRawComponent implements OnInit {
  @Input()
  person: Person;
  @Input()
  title: string;
  constructor() { }
  @Input()
  editable: boolean = true;

  @Output()
  change: EventEmitter<Person> = new EventEmitter<Person>();

  paddingRight = 0;

  ngOnInit() {
    if (this.editable) { this.paddingRight = 2 };
  }

  onEdit() {
    this.change.emit(this.person);
  }

}
