import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderInboundCargoComponent } from '../../order-inbound-cargo/order-inbound-cargo.component';
import { CargoService } from '../../../../services/backend/cargo/cargo.service';
import { Cargo } from '../../../../services/interfaces';

@Component({
  selector: 'app-cargo-modal',
  templateUrl: './cargo-modal.component.html',
  styleUrls: ['./cargo-modal.component.css']
})
export class CargoModalComponent implements OnInit {
text:string = '';
copy:Cargo;
  constructor(public dialogRef: MatDialogRef<OrderInboundCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public d: any,
    private cargo_s:CargoService,
    ) { }

  ngOnInit() {
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
this.cargo_s.getCargoById(0).subscribe(c=>{
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

}
