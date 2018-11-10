import { Component, OnInit, Input } from '@angular/core';
import { Place, RoadSection, Shipment, Order } from '../../../services/interfaces';
import { PlaceService } from '../../../services/backend/place.service';
import { MatSelectChange } from '@angular/material';
import { RailbillService } from '../../../services/backend/rwb/railbill.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

export class RoadSectionItem {

  constructor() { }

}

@Component({
  selector: 'rwb-road-sections',
  templateUrl: './rwb-road-sections.component.html',
  styleUrls: ['./rwb-road-sections.component.css']
})



export class RwbRoadSectionsComponent implements OnInit {

  dispatch: Place;
  destination: Place;
  places: Place[];
  filtered_in_places: Place[];
  filtered_out_places: Place[];
  road_symbol: string;
  sections: RoadSection[] = [];
  section:RoadSection;
  rwb_id: number;

  roads: string[] = [];

  road_section_form: FormGroup = new FormGroup({
    id: new FormControl(),
    road: new FormControl(),
    in_station: new FormControl(),
    out_station: new FormControl(),
  });




  constructor(private place_service: PlaceService,
    private rwb_service: RailbillService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(res => {
      let order: Order;
      this.rwb_id = res.data.rwb.id;
      order = res.data.order;
      this.dispatch = order.dispatch_place;
      this.destination = order.destination_place;
      this.road_section_form.valueChanges.subscribe(res => console.log(res));

    });

    this.place_service.getPlaces().subscribe(pls => {
      this.places = pls;
      this.places.forEach((v, i, a) => {
        let r: string = '';
        r = v.road_name;
        if (this.roads.indexOf(r) < 0) { this.roads.push(r) };
      });
    });

    this.road_section_form.valueChanges.subscribe(res=>{
      this.section.in_station=res.in_station;
      this.section.out_station=res.out_station;
      this.section.road=res.road;
    })

  }


  filterPlaces(val: Place) {

    this.filtered_out_places = this.places.filter((v, i, a) => { return v.road_code == val.road_code && v.is_out == true });
    this.filtered_in_places = this.places.filter((v, i, a) => { return v.road_code == val.road_code && v.is_out == false });

  }

  createRoadSection(index: number) {
    this.rwb_service.createRoadSection(this.rwb_id).subscribe(res => {
      this.section = res;
      if (index < 0) { this.createDispatchSection(this.section); }
      if (index > 0) { this.createDestinationSection(this.section); }
      if (index == 0) { this.createInnerSection(this.section); }

    });
  }

  createDispatchSection(section) {
    section.in_station = this.dispatch;
    this.filterPlaces(this.dispatch);
    section.road = this.dispatch.road_name;
    this.sections.splice(0, 0, section);
    let def_place = this.filtered_in_places.find((v, i, a) => { return v.place_code == this.dispatch.place_code; });
    section.in_station = def_place;
    this.road_section_form.setValue(section);

    this.road_section_form.controls.road.disable();

  }

  createInnerSection(section) {
    this.enableFields();
    this.filtered_in_places = this.places;
    this.filtered_out_places = this.places;
    let length = this.sections.length;
    if (length > 0) {
      this.sections.splice(length - 1, 0, section);
    }


  }

  createDestinationSection(section) {
    section.out_station = this.destination;
    this.filterPlaces(this.destination);
    section.road = this.destination.road_name;
    let length = this.sections.length;
    this.sections.splice(length, 0, section);
    this.filtered_out_places.push(this.destination);
    section.out_station = this.destination;
    this.road_section_form.setValue(section);

    // this.road_section_form.controls.out_station.disable();

  }

  private enableFields() {

    this.road_section_form.controls.in_station.enable();
    this.road_section_form.controls.out_station.enable();
    this.road_section_form.controls.road.enable();

  }

  roadChange(ev) {
    let r = ev.value;
    this.filtered_out_places = this.places.filter((v, i, a) => { return v.road_name == r && v.is_out == true });
    this.filtered_in_places = this.places.filter((v, i, a) => { return v.road_name == r && v.is_out == false });
  }


}
