import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person, Order } from '../../services/interfaces';
import { MatDialog } from '@angular/material';
import { PersonDialogComponent } from '../../ui-components/dialogs/person-dialog/person-dialog.component';
import { Observable } from 'rxjs';
import { PersonSearchComponent } from '../../ui-components/persons/person-search/person-search.component';
import { PersonSearchDialogComponent } from '../../ui-components/dialogs/person-search-dialog/person-search-dialog.component';
import { PersonsService } from '../../services/backend/persons/persons.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person: Person;

  @Input()
  title: string;

  @Input()
  is_raw: boolean = false;

  @Output()
  onPerson: EventEmitter<Person> = new EventEmitter<Person>()

  opened: boolean = false;

  constructor(public dialog: MatDialog,
    private service: PersonsService) { }

  ngOnInit() {


  }


  expand_card() {
    this.opened = this.opened ? false : true;
  }

  openPersonDialog() {
    this.service.getPerson(0).subscribe(p => {
      let new_person_to_edit = this._updatePerson(this.person, p);

      const dialogRef = this.dialog.open(PersonDialogComponent, {
        width: '420px',
        data: new_person_to_edit
      });

      dialogRef.afterClosed().subscribe(result => {
        this.person = result;
        this.onPerson.emit(this.person)
      }
      );
    });




  }

  openSearchPersonDialog() {
    const dialogRef = this.dialog.open(PersonSearchDialogComponent, {
      width: '420px',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(p => {
      if (!isNullOrUndefined(p)) {
        this.person = p;
        this.onPerson.emit(this.person);
      }
    });

  }

  private _updatePerson(p_in: Person, p_to_update: Person): Person {

    for (const key in p_in) {
      if (p_in.hasOwnProperty(key) && key != 'id') {
        p_to_update[key] = p_in[key];

      }
    }
    return p_to_update;
  }


}
