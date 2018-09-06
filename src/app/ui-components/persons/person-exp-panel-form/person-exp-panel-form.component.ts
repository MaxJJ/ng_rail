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

  persons_fc: FormControl = new FormControl();
  filteredPersons: Observable<Person[]>;
  selected: boolean = false;
  selectedPerson: Person;

  show_form: boolean = false;
  person_fg: FormGroup = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl(''),
    inn: new FormControl(''),
    okpo: new FormControl(''),
    street_house: new FormControl(''),
    city: new FormControl(''),
    region: new FormControl(''),
    postal_code: new FormControl(''),
    country: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(private service: PersonsService) { }

  ngOnInit() {

    if (!isNullOrUndefined(this.person)) {
      this.selected = true;
      this.selectedPerson = this.person;
    };

    this.persons_fc.setValue(this.person.name);
    this.persons_fc.valueChanges.subscribe(prs => { this.filteredPersons = this.service.searchPerson(prs) });


  }

  optionSelectedHandler(v) {
    this.selected = true;
    this.selectedPerson = v.option.value;
    this.persons_fc.setValue(this.selectedPerson.name.toUpperCase());

  }

  private setPersonFGvalues(p: Person) {
    this.person_fg.setValue({
      id:p.id,
      name: p.name,
      inn: p.inn,
      okpo: p.okpo,
      street_house: p.street_house,
      city: p.city,
      region: p.region,
      postal_code: p.postal_code,
      country: p.country,
      phone: p.phone,
    });

  }

  saveHandler() {
   this.new_person.emit(this.selectedPerson);

  }

  editHandler() {
    this.show_form = true;
    this.selected = false;
    this.setPersonFGvalues(this.selectedPerson);
    this.persons_fc.setValue('');

  }

  createHandler() {
this.service.getPerson(0).subscribe(p=>{this.selectedPerson=p;
  this.setPersonFGvalues(this.selectedPerson);
  this.show_form=true;
  this.selected=false;
});


  }

  onSubmit() {

  this.selectedPerson=this.person_fg.getRawValue() as Person;
  
this.service.savePerson(this.selectedPerson).subscribe(p=>{
  
  this.persons_fc.setValue(this.selectedPerson.name);
  this.selected=true;
  this.show_form=false;
});
   

  }
}
