import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent } from '@angular/material';
import { Person } from '../../../services/interfaces';
import { PersonsService } from '../../../services/backend/persons/persons.service';
import { $ } from 'protractor';
import { CountryService } from '../../../services/backend/countries/country.service';
import { Country } from '../../../interfaces/country';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {


  fg: FormGroup = new FormGroup({});
  list_of_countries: Country[] = [];
  filtered_list_of_countries: Observable<Country[]>;

  initial_person: Person;

  constructor(public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public p: Person,
    private countries: CountryService,
    private service: PersonsService) { }

  ngOnInit() {
    this.initial_person = this.p;
    this.setFormGroup();
  }



  setFormGroup() {

    this.setGeneralFormField('id');
    this.setGeneralFormField('name');
    this.setGeneralFormField('inn');
    this.setGeneralFormField('okpo');
    this.setGeneralFormField('street_house');
    this.setGeneralFormField('city');
    this.setGeneralFormField('region');
    this.setGeneralFormField('postal_code');
    this.setGeneralFormField('phone');

    this.setCountryField('country');



  }
  setCountryField(key: string) {
    this.fg.addControl(key, new FormControl());
    let cntrl: AbstractControl = this.fg.get(key);

    this.countries.fetchCountries().subscribe(ctry => this.list_of_countries = ctry);
    if (!isNullOrUndefined(this.p.country)) {
      cntrl.setValue(this.p.country.name_rus);
    }

    this.filtered_list_of_countries = this.fg.get(key).valueChanges.pipe(
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


    this.p.country = ev.option.value;
    this.fg.get('country').setValue(ev.option.value.name_rus);
  }

  onSubmit() {
    this.service.savePerson(this.p).subscribe(res => {
      this.p = res;
      this.dialogRef.close(this.p);
    });


  }
  onCancel() {

    this.dialogRef.close(this.initial_person);

  }




  setGeneralFormField(key: string) {
    this.fg.addControl(key, new FormControl());
    this.fg.get(key).setValue(this.p[key]);
    this.fg.get(key).valueChanges.subscribe(v => this.p[key] = v);
  }


}
