import { Component, OnInit, Inject } from '@angular/core';
import { PLACE, PortalsData } from '../../../services/portals/tokens';
import { Place } from '../../../services/interfaces';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsUtilService } from '../../../services/forms/forms-util.service';
import { KpsService } from '../../../services/kps/kps.service';

@Component({
  selector: 'app-place-edit-portal',
  templateUrl: './place-edit-portal.component.html',
  styleUrls: ['./place-edit-portal.component.css']
})
export class PlaceEditPortalComponent implements OnInit {

  place: Place;
  change: BehaviorSubject<Place>;

  fg: FormGroup;

  kpss: any[];

  constructor(
    @Inject(PLACE) public place_data: PortalsData,
    private forms: FormsUtilService,
    private kps: KpsService,
  ) { }

  ngOnInit() {
    this.place = this.place_data.data;
    this.change = this.place_data.change;
    this.fg = this.forms.createFormGroup(this.place);
    this.fg.valueChanges.subscribe(v => console.log(v));
  }

  getFromKps() {
    this.kps.findStation(this.place.place_code).subscribe(v => {
      this.fg.get('place_name').setValue(v[0].Name);
    },
      err => console.log(err),
      () => console.log('completed'));
  };

  findStationsInKps(key) {
    let qry = this.fg.get(key).value;
    this.kps.findStation(qry).subscribe(v => this.kpss = v);
  }

}
