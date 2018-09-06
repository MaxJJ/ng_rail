import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DirectoriesService } from '../../../../services/backend/directories/directories.service';
import { Observable } from 'rxjs';
import { Unit } from '../../../../services/interfaces';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'units-autocomplete',
  templateUrl: './units-autocomplete.component.html',
  styleUrls: ['./units-autocomplete.component.css']
})
export class UnitsAutocompleteComponent implements OnInit {
@Input()
value:Unit;
units:Observable<Unit[]>;
fc:FormControl=new FormControl('');

@Output()
valueChange:EventEmitter<Unit> = new EventEmitter<Unit>()

  constructor(private service:DirectoriesService) { }

  ngOnInit() {
    if(!isNullOrUndefined(this.value)){
      this.fc.setValue(this.value.name_short);
    }
    
    this.fc.valueChanges.subscribe(v=>{
      this.searchUnit(v);});
  }

searchUnit(qry:string){

 this.units= this.service.searchUnit(qry);
}

selectionHandler(ev){
  let unit = ev.option.value;
  this.fc.setValue(unit.name_short);
  this.valueChange.emit(unit);

}

}
