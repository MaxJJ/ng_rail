import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Person } from '../../../services/interfaces';
import { PersonsService } from '../../../services/backend/persons/persons.service';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {
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
  constructor(public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public p: Person,
  private service:PersonsService) { }

  ngOnInit() {
    this.setPersonFGvalues(this.p);
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

  onSubmit() {

    this.p=this.person_fg.getRawValue() as Person;
    
  this.service.savePerson(this.p).subscribe(p=>{
   this.dialogRef.close(p);
  });
     
  
    }

}
