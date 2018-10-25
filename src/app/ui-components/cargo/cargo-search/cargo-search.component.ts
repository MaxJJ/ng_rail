import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cargo } from '../../../services/interfaces';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'cargo-search',
  templateUrl: './cargo-search.component.html',
  styleUrls: ['./cargo-search.component.css']
})
export class CargoSearchComponent implements OnInit {

  cargo_fc:FormControl=new FormControl({value:'',disabled:true,});
  is_search_enabled_fc:FormControl=new FormControl();

filteredCargo:Cargo[];

indexedCargo:Cargo[];

enabled:boolean=false;

selectedCargo:Cargo;

@Output()
select:EventEmitter<Cargo>=new EventEmitter<Cargo>();

  constructor(private service:CargoService) { }

  ngOnInit() {
    this.is_search_enabled_fc.valueChanges.subscribe(v=>{
      this.enabled=v;
      if (this.enabled){ this.loadAndEnable() }else{
        this.cargo_fc.disable();
      }
    });

   
  }


  optionSelectedHandler(ev:MatAutocompleteSelectedEvent){
    this.selectedCargo = ev.option.value;
    
    this.cargo_fc.setValue("Item selected!");
    this.select.emit(this.selectedCargo);

  }

  loadAndEnable(){
    this.service.getIndexedCargo().subscribe(res=>{
      this.indexedCargo=res;
      
      this.cargo_fc.enable();
      this.setCargoFc();
    });
    

  }

  setCargoFc(){

    this.cargo_fc.valueChanges.subscribe(val=>this.searchCargo(val));
  }

  searchCargo(val){
console.log(val);
    const qry = val;

    this.filteredCargo= this.indexedCargo.filter(c => c.description.toLowerCase().includes(qry) || c.tnved_code.toLowerCase().includes(qry) );

  }
}
