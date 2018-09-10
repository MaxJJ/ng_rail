import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../services/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonsService } from '../../../services/backend/persons/persons.service';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'person-exp-panel-form',
  templateUrl: './person-exp-panel-form.component.html',
  styleUrls: ['./person-exp-panel-form.component.css']
})
export class PersonExpPanelFormComponent implements OnInit {

  @Input()
  person: Person

  @Input()
  title: string;

  @Output()
  new_person:EventEmitter<Person> = new EventEmitter<Person>();


  constructor(private service: PersonsService) { }

  ngOnInit() {

   
  }

  personChangeHandler(val){
    this.person=val;
    this.new_person.emit(val);
  }
}
