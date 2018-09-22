import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { Cargo } from '../../../services/interfaces';

@Component({
  selector: 'cargo-combo',
  templateUrl: './cargo-combo.component.html',
  styleUrls: ['./cargo-combo.component.css']
})
export class CargoComboComponent implements OnInit {
cargo:string;
  

  item:Cargo={tnved_code:'0123456789',};
  cargoes:Cargo[]=[];
  addDisabled:boolean=false;

  constructor(private cargo_service:CargoService) { }
  ngOnInit() {
    
  }

  createItem(){
this.cargo_service.getCargoById(0).subscribe(c=>{
  this.item=c;
 
  this.addDisabled=true;

})
  }

  unitHandler(val){
    this.item.unit=val;
  }
  packageHandler(val){
    this.item.package=val;
  }
  submit(){
   let check =this.cargoes.indexOf(this.item);
   if(check<0){
    this.cargoes.push(this.item);
   }
   this.addDisabled=false;
  }

}
