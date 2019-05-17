import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { KpsService } from '../../../services/kps/kps.service';

@Component({
  selector: 'kps-find-station',
  templateUrl: './kps-find-station.component.html',
  styleUrls: ['./kps-find-station.component.css']
})
export class KpsFindStationComponent implements OnInit {

  code_input: FormControl = new FormControl('');
  constructor(private kps: KpsService) { }

  stations: Observable<any[]>;

  ngOnInit() {

    this.code_input.valueChanges.subscribe(val => {
      if (val.length > 3) {
        console.log(val);
        this.stations = this.kps.findStation(val.toLowerCase());
      }
    });
  }

}
