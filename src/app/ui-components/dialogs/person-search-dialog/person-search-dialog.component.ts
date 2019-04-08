import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Person } from '../../../services/interfaces';
import { PersonsService } from '../../../services/backend/persons/persons.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';


const checkQry = (query: string, compare: string): boolean => {

  return compare.toLowerCase().includes(query.toLowerCase());

}

@Component({
  selector: 'app-person-search-dialog',
  templateUrl: './person-search-dialog.component.html',
  styleUrls: ['./person-search-dialog.component.css']
})
export class PersonSearchDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PersonSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private p: Person,
    private person_service: PersonsService) { }

  persons: Person[];
  filtered_persons: Observable<Person[]>;
  fc: FormControl = new FormControl('');


  ngOnInit() {

    this.person_service.fetchAllPersons().subscribe(prs => {
      this.persons = prs;
      this.setSearchField();
    });

  }

  setSearchField(): void {

    this.filtered_persons = this.fc.valueChanges.pipe(
      startWith(''),
      map(qry => {
        return this.persons.filter((v, i, a) => (

          checkQry(qry, v.name) ||
          checkQry(qry, v.rail_code)
        ));

      })
    );
  }

  onClick(person: Person) {

    this.dialogRef.close(person);
  }



}
