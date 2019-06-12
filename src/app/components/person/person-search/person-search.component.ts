import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Person } from '../../../interfaces/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonsService } from '../../../services/backend/persons/persons.service';
import { isNullOrUndefined } from 'util';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit, AfterViewChecked {

  @Input()
  person: Person;

  @Input()
  title: string;

  @Output()
  new_person: EventEmitter<Person> = new EventEmitter<Person>();

  persons_fc: FormControl = new FormControl();
  persons: Person[];
  filteredPersons: Person[];

  selectedPerson: Person;

  constructor(private service: PersonsService) { }

  ngOnInit() {
    this.service.fetchAllPersons().subscribe(v => {
      this.persons = v;
      this.persons_fc.valueChanges.subscribe(prs => {
        if (typeof (prs) == 'string') {
          this.filteredPersons = this.persons.filter((v, i, a) => {
            return this.filterPersons(v, prs);
          });
        };

      });

    });

    // if (!isNullOrUndefined(this.person)) {

    //   this.selectedPerson = this.person;
    //   this.persons_fc.setValue(this.selectedPerson.name);
    // };




  }

  ngAfterViewChecked(): void {



  }

  filterPersons(v: Person, qry: string): boolean {
    let check: boolean = (qry.length > 1);
    let q: boolean = v.name.toLowerCase().includes(qry.toLowerCase()) ||
      v.rail_code.toLowerCase().includes(qry.toLowerCase());

    return q && check;
  }

  optionSelectedHandler(v) {

    this.selectedPerson = v.option.value;
    this.persons_fc.setValue(this.selectedPerson.name.toUpperCase());
    this.new_person.emit(this.selectedPerson);
  }


}
