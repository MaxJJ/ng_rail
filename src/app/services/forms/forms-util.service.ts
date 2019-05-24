import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FormsUtilService {

  constructor() { }

  createFormGroup(obj: any): FormGroup {
    let fg: FormGroup = new FormGroup({});
    for (let [key, value] of Object.entries(obj)) {

      fg.setControl(key, new FormControl(''));

      if (!isNullOrUndefined(value)) {
        fg.get(key).setValue(value);
      };

    }

    return fg;
  }

}
