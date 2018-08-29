import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatRadioChange } from '@angular/material';
import { OrderService } from '../../../services/backend/order.service';
import { Cargo } from '../../../services/interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-inbound-cargo',
  templateUrl: './order-inbound-cargo.component.html',
  styleUrls: ['./order-inbound-cargo.component.css']
})
export class OrderInboundCargoComponent implements OnInit {

  cargo:Cargo[];
  cargo_item:{'item':Cargo,'is_deleted':boolean};
  cargo_form:FormGroup;

  constructor(public dialogRef: MatDialogRef<OrderInboundCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private order_service: OrderService) {

      this.cargo_item=data;
      
      this.cargo_form = new FormGroup({
        id:new FormControl(),
        is_container:new FormControl(),
        description:new FormControl(),
        container_tare:new FormControl(),
        tnved_code:new FormControl(),
        tved_description:new FormControl(),
        gng_code:new FormControl(),
        gng_description:new FormControl(),
        etsng_code:new FormControl(),
        package:new FormControl(),
        package_quantity:new FormControl(),
        unit:new FormControl(),
        unit_quantity:new FormControl(),
        nett_weight:new FormControl(),
        gross_weight:new FormControl()


      });
      this.cargo_form.setValue(this.cargo_item.item);
      this.cargo_form.valueChanges.subscribe((res)=>{this.cargo_item.item=res; } );
      
      
     }

     formTypeChange(e:MatRadioChange){
       console.log(e.value);
       if(e.value==='1'){

        this.cargo_form.get('is_container').setValue(true);
       } else {this.cargo_form.get('is_container').setValue(false);}
     };

     deleteItem(){
       
       this.order_service.deleteCargo(this.cargo_item.item.id).subscribe(res=>this.cargo_item.is_deleted=true);
       console.log(this.cargo_item);
       
       return this.cargo_item;
     }

     onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
