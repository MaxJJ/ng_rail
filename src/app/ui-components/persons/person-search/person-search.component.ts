import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../services/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonsService } from '../../../services/backend/persons/persons.service';
import { isNullOrUndefined } from 'util';
import { MatDialog } from '@angular/material';
import { PersonDialogComponent } from '../../dialogs/person-dialog/person-dialog.component';

@Component({
  selector: 'person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  @Input()
  person: Person

  @Input()
  title: string;

  @Output()
  new_person:EventEmitter<Person> = new EventEmitter<Person>();

  persons_fc: FormControl = new FormControl();
  filteredPersons: Observable<Person[]>;
  
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

  constructor(private service: PersonsService,public dialog: MatDialog) { }

  ngOnInit() {

    if (!isNullOrUndefined(this.person)) {
     
      this.selectedPerson = this.person;
    };

    this.persons_fc.setValue(this.selectedPerson.name);
    this.persons_fc.valueChanges.subscribe(prs => { this.filteredPersons = this.service.searchPerson(prs) });


  }

  optionSelectedHandler(v) {
    
    this.selectedPerson = v.option.value;
    this.persons_fc.setValue(this.selectedPerson.name.toUpperCase());
    this.new_person.emit(this.selectedPerson);
  }


  editHandler() {
    this.openDialog(this.selectedPerson)
   

  }

  createHandler() {
this.service.getPerson(0).subscribe(p=>{this.selectedPerson=p;
  this.openDialog(p);
});


  }




  openDialog(p:Person){
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      width: '320px',
      data: p,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedPerson=result;
      this.new_person.emit(this.selectedPerson);
    });
  }
}
