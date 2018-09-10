import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../services/interfaces';

@Component({
  selector: 'person-raw',
  templateUrl: './person-raw.component.html',
  styleUrls: ['./person-raw.component.css']
})
export class PersonRawComponent implements OnInit {
@Input()
  person:Person;
  constructor() { }

  ngOnInit() {
  }

}
