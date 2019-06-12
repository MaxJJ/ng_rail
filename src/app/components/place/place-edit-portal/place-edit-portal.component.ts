import { Component, OnInit, Inject } from '@angular/core';
import { PLACE, PortalsData } from '../../../services/portals/tokens';
import { Place } from '../../../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsUtilService } from '../../../services/forms/forms-util.service';
import { KpsService } from '../../../services/kps/kps.service';
import { KpsStation } from '../../../interfaces/kps_interfaces';
import { PlaceService } from '../../../services/backend/place.service';

@Component({
  selector: 'app-place-edit-portal',
  templateUrl: './place-edit-portal.component.html',
  styleUrls: ['./place-edit-portal.component.css']
})
export class PlaceEditPortalComponent implements OnInit {

  place: Place;
  change: BehaviorSubject<Place>;

  fg: FormGroup;

  kps_stations: KpsStation[];
  kpss: any[];

  constructor(
    @Inject(PLACE) public place_data: PortalsData,
    private forms: FormsUtilService,
    private kps: KpsService,
    private service: PlaceService,
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
    this.kps.findStation(qry).subscribe(v => this.kps_stations = v);

  }

  placeSelected(val) {

    this.fg = this.forms.createFormGroup(val);


  }

  kpsStationHandler(item: KpsStation) {

    this.fg.get('place_name').setValue(item.Name);
    this.fg.get('place_code').setValue(item.Code);
    this.fg.get('kps_fields').setValue(item);
    this.fg.get('road_name').setValue(item.RailwayName);
    this.fg.get('road_name_abbr').setValue(item.AdministrationShortname);

    console.log(item);
  }

  createPlace() {
    this.service.createPlace().subscribe(v => {
      this.fg = this.forms.createFormGroup(v);
    })

  }

  submitChanges() {

    this.change.next(this.fg.getRawValue());
  }

  cancelChanges() {
    this.change.next(this.place);
  }
}
