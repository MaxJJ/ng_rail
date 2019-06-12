import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderInboundCargoComponent } from '../../order-inbound-cargo/order-inbound-cargo.component';
import { CargoService } from '../../../../services/backend/cargo/cargo.service';
import { Cargo } from '../../../../interfaces/interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cargo-modal',
  templateUrl: './cargo-modal.component.html',
  styleUrls: ['./cargo-modal.component.css']
})
export class CargoModalComponent implements OnInit {
text:string = '';
copy:Cargo;

is_indexed_fc:FormControl=new FormControl();

  constructor(public dialogRef: MatDialogRef<OrderInboundCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public d: any,
    private cargo_s:CargoService,
    ) { }

  ngOnInit() {
    this.is_indexed_fc.setValue(this.d.item.is_indexed);
   this.is_indexed_fc.valueChanges.subscribe(v=>this.d.item.is_indexed=v);
  }

  unitHandler(val){
    this.d.item.unit=val;
  }
  packageHandler(val){
    this.d.item.package=val;
  }

  close(){
    let check = this.d.cargo.indexOf(this.d.item);
    if (check < 0) {
      this.d.cargo.push(this.d.item);
    }
    else{
      this.d.cargo[check]=this.d.item;
    }
    this.dialogRef.close(this.d);
  }
  copyItem(){
this.cargo_s.getCargoById(0,this.d.factura_id).subscribe(c=>{
  this.copy=c;
  this.copy.description=this.d.item.description;
  this.copy.tnved_code=this.d.item.tnved_code;
  this.copy.unit=this.d.item.unit;
  this.copy.package=this.d.item.package;
  this.d.item=this.copy;
  this.text="copy! "+this.copy.id;

});
  }

  deleteItem(){
    let check = this.d.cargo.indexOf(this.d.item);
    this.d.cargo.splice(check,1)
    this.cargo_s.deleteCargo(this.d.item).subscribe(res=>{

      this.dialogRef.close(this.d);
    });

  }

  searchHandler(val:Cargo){
    let m:Cargo = this.d.item;
    m.is_indexed=false;
    m.tnved_code=val.tnved_code;
    m.description=val.description;
    m.gng_code=val.gng_code;
    m.etsng_code=val.etsng_code;
    m.gng_description=val.gng_description;
    m.tved_description=val.tved_description;
    m.package=val.package;
    m.unit=val.unit;

  }

}
