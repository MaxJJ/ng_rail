import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Place } from '../../services/interfaces';
import { FormControl } from '@angular/forms';

const EXPEDITORS:string[]=[
  'LDZ CARGO',
  'ОАО «РЖД»',
  'АО "КТЖ-ГП"',
  'ЗАО "АЖД"',
];
interface RoadsProps{
  name:string;
  code:string;
  symbol:string;
  expeditor:string;
}

 export const ROADS:RoadsProps[] = [
  {name:'ЛАТВИЙСКАЯ Ж.Д.',code:'2125',symbol:'ЛДЗ',expeditor:'LDZ CARGO'},
  {name:'РОССИЙСКАЯ Ж.Д.',code:'0020',symbol:'РЖД',expeditor:'ОАО «РЖД»'},
  {name:'КАЗАХСТАНСКАЯ Ж.Д.',code:'27',symbol:'КЗХ',expeditor:'АО "КТЖ-ГП"'},
  {name:'АЗЕРБАДЖАНСКАЯ Ж.Д.',code:'57',symbol:'АЗ',expeditor:'ЗАО "АЖД"'},
  {name:'БЕЛОРУССКАЯ Ж.Д.',code:'0021',symbol:'БЧ',expeditor:'БЧ'},
  {name:'ГРУЗИНСКАЯ Ж.Д.',code:'0028',symbol:'ГР',expeditor:'ГР'},
  {name:'КИРГИЗСКАЯ Ж.Д.',code:'0059',symbol:'КРГ',expeditor:'КРГ'},
  {name:'ЛИТОВСКАЯ Ж.Д.',code:'0024',symbol:'ЛГ',expeditor:'ЛГ'},
  {name:'МОЛДАВСКАЯ Ж.Д.',code:'0023',symbol:'ЧФМ',expeditor:'ЧФМ'},
  {name:'ТАДЖИКСКАЯ Ж.Д.',code:'0066',symbol:'ТДЖ',expeditor:'ГУП "РОТ"'},
  {name:'ТУРКМЕНСКАЯ Ж.Д.',code:'0067',symbol:'ТРК',expeditor:'ТРК'},
];

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  place:Place;
  expeditors:string[]=EXPEDITORS;
  roads = ROADS;
  road_fc:FormControl=new FormControl('');

  constructor(public dialogRef: MatDialogRef<PlaceDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.place=data;
      
     }

  ngOnInit() {
    let fi=this.roads.filter((v,i,a)=>{return v.code==this.place.road_code;});
    
    this.road_fc.setValue(fi[0]); 
   
    
    this.road_fc.valueChanges.subscribe(res=>{


    });
  }

  road_props_handler(ev){
    let res = ev.value;
    this.place.road_code=res.code;
    this.place.road_name=res.name;
    this.place.road_name_abbr=res.symbol;
    this.place.road_operator_name=res.expeditor;


  }

}
