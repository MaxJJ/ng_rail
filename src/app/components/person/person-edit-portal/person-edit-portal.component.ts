import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent } from '@angular/material';
import { Person } from '../../../interfaces/interfaces';
import { PersonsService } from '../../../services/backend/persons/persons.service';
import { $ } from 'protractor';
import { CountryService } from '../../../services/backend/countries/country.service';
import { Country } from '../../../interfaces/country';
import { Observable, BehaviorSubject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { PERSON, PortalsData } from '../../../services/portals/tokens';
import { timingSafeEqual } from 'crypto';
import { FormsUtilService } from '../../../services/forms/forms-util.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit-portal.component.html',
  styleUrls: ['./person-edit-portal.component.css']
})
export class PersonEditPortal implements OnInit {


  fg: FormGroup = new FormGroup({});
  list_of_countries: Country[] = [];
  filtered_list_of_countries: Observable<Country[]>;

  initial_person: Person;

  constructor(
    @Inject(PERSON) public p: PortalsData,
    private countries: CountryService,
    private service: PersonsService,
    private forms: FormsUtilService,
  ) { }

  ngOnInit() {
    this.initial_person = this.p.data;
    this.countries.fetchCountries().subscribe(ctry => this.list_of_countries = ctry);
    this.setFormGroup(this.p.data);
  }



  setFormGroup(data: Person) {
    this.fg = this.forms.createFormGroup(data);

    let cntrl: AbstractControl = this.fg.get("country");
    if (!isNullOrUndefined(data.country)) {
      cntrl.setValue(data.country.name_rus);
    };

    this.filtered_list_of_countries = cntrl.valueChanges.pipe(
      startWith(''),
      map(
        (qry: string) => {
          let cs: Country[] = this.list_of_countries;
          let lc_qry = qry.toString().toLowerCase();
          let fcs = cs.filter((v, i, a) =>
            v.name_rus.toLowerCase().includes(lc_qry)
            ||
            v.name_eng.toLowerCase().includes(lc_qry)
          );

          return fcs;
        })
    );


  }


  countrySelected(ev: MatAutocompleteSelectedEvent) {

    this.fg.get('country').setValue(ev.option.value.name_rus);
  }

  createPerson() {

    this.service.getPerson(0).subscribe(val => {
      this.setFormGroup(val);
    });
  }


  setGeneralFormField(key: string) {
    this.fg.addControl(key, new FormControl());
    this.fg.get(key).setValue(this.initial_person[key]);
    this.fg.get(key).valueChanges.subscribe(v => this.initial_person[key] = v);
  }


  onSave() {
  }


}
