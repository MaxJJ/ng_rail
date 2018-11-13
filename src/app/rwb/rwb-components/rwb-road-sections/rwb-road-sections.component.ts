import { Component, OnInit, Input } from '@angular/core';
import { Place, RoadSection, Shipment, Order, Railbill } from '../../../services/interfaces';
import { PlaceService } from '../../../services/backend/place.service';
import { MatSelectChange } from '@angular/material';
import { RailbillService } from '../../../services/backend/rwb/railbill.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

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
  sections: RoadSection[];
  section: RoadSection;
  @Input()
  rwb: Railbill;

  dispatch_disabled: boolean = true;
  inner_disabled: boolean = true;
  destination_disabled: boolean = true;
  create_disabled: boolean = false;

  roads: string[] = [];
  filtered_roads:string[];

  road_section_form: FormGroup = new FormGroup({
    id: new FormControl(),
    road: new FormControl(),
    in_station: new FormControl(),
    out_station: new FormControl(),
  });

  road_c: AbstractControl;
  in_station_c: AbstractControl;
  out_station_c: AbstractControl;



  constructor(private place_service: PlaceService,
    private rwb_service: RailbillService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(res => {
      let order: Order;
      order = res.data.order;
      this.sections = this.rwb.road_sections;
      this.dispatch = order.dispatch_place;
      this.destination = order.destination_place;

      this.in_station_c = this.road_section_form.controls.in_station;

      this.road_section_form.valueChanges.subscribe(res => {
        console.log('value changes -- '+JSON.stringify(res));
        if(!isNullOrUndefined(res.road)){this.section.road = res.road; this.roadChange(res.road);} 
        if(!isNullOrUndefined(res.in_station)){this.section.in_station = res.in_station; this.roadChange(res.in_station.road_name);} 
        if(!isNullOrUndefined(res.out_station)){this.section.out_station = res.out_station; this.roadChange(res.in_station.road_name);} 
        if(!isNullOrUndefined(res.id)){this.section.id=res.id;} 
        this.rwb.road_sections = this.sections;
        

      });

    });

    this.place_service.getPlaces().subscribe(pls => {
      this.places = pls;
      this.places.forEach((v, i, a) => {
        let r: string = '';
        r = v.road_name;
        if (this.roads.indexOf(r) < 0) { this.roads.push(r) };
      });
    });


  }


  filterPlaces(val: Place) {

    this.filtered_out_places = this.places.filter((v, i, a) => { return v.road_code == val.road_code && v.is_out == true });
    this.filtered_in_places = this.places.filter((v, i, a) => { return v.road_code == val.road_code && v.is_out == false });

  }

  createRoadSection(index: number) {
    this.rwb_service.createRoadSection(this.rwb.id).subscribe(res => {
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
    this.filtered_in_places=[def_place];
    this.filtered_roads=[def_place.road_name];
    this.road_section_form.setValue(section);

    this.disable_enable(true,true,true,false);

    

  }

  createInnerSection(section) {
this.clearForm();
    let length = this.sections.length;
    if (length > 0) {
      this.sections.splice(length - 1, 0, section);
    }
this.filtered_in_places=this.places.filter((v,i,a)=>{return v.road_code !== this.dispatch.road_code || v.road_code !== this.destination.road_code;});
this.filtered_out_places=this.places.filter((v,i,a)=>{return v.road_code !== this.destination.road_code;});
this.filtered_roads=this.roads.filter((v,i,a)=>{return (v !== this.destination.road_name) && (v !== this.dispatch.road_name);});
this.road_section_form.setValue(section);


  }

  createDestinationSection(section) {
    this.clearForm();
    
    this.filterPlaces(this.destination);
    section.road = this.destination.road_name;
    let length = this.sections.length;
    this.sections.splice(length, 0, section);
    section.out_station = this.destination;
    this.filtered_out_places=[this.destination];
    this.road_section_form.setValue(section);
    this.disable_enable(true,true,false,true);

  

  }


  roadChange(r) {
    
    this.filtered_out_places = this.places.filter((v, i, a) => { return v.road_name == r && v.is_out == true });
    this.filtered_in_places = this.places.filter((v, i, a) => { return v.road_name == r && v.is_out == false });
  }
  roadSelectionChange(ev){
    let r=ev.value;
    this.filtered_out_places = this.places.filter((v, i, a) => { return v.road_name == r && v.is_out == true });
    this.filtered_in_places = this.places.filter((v, i, a) => { return v.road_name == r && v.is_out == false });
  }

  createSections() {
    this.sections = [];
    this.rwb.road_sections = [];
    this.disable_enable(true,false,true,true);
  }

  edit(s: RoadSection) {
   
    let ix = this.sections.indexOf(s);

    this.clearForm();

    
 this.section=this.sections[ix]; 
  this.setFormValues(this.section);
  console.log('after set values section -- '+JSON.stringify(s));
  }

  disable_enable(create:boolean,dispatch:boolean,inner:boolean,destination:boolean){
    this.dispatch_disabled = dispatch;
    this.inner_disabled = inner;
    this.destination_disabled = destination;
    this.create_disabled = create;

  }

  clearForm(){
    // this.road_section_form.setValue({id:'',road:'',in_station:undefined,out_station:undefined,});
    this.road_section_form.reset();
    
    this.filtered_in_places=this.places;
    this.filtered_out_places=this.places;
    this.filtered_roads=this.roads;
  }

  setFormValues(s:RoadSection){
 
 let value:RoadSection=this.road_section_form.value;
 if(!isNullOrUndefined(s.id)){value.id=s.id};
 if(!isNullOrUndefined(s.in_station)){value.in_station=this.filtered_in_places.find((v,i,a)=>{return v.place_code==s.in_station.place_code;}); s.road=s.in_station.road_name;};
 if(!isNullOrUndefined(s.out_station)){value.out_station=this.filtered_out_places.find((v,i,a)=>{return v.place_code==s.out_station.place_code;}); s.road=s.out_station.road_name;};
 if(!isNullOrUndefined(s.road)){value.road=this.roads.find((v,i,a)=>{return v ==s.road;})};

this.road_section_form.setValue(value);
  }
}
