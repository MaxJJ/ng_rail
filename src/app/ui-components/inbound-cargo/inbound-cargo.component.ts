import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cargo } from '../../services/interfaces';
import { isNullOrUndefined } from 'util';
import { OrderInboundCargoComponent } from '../dialogs/order-inbound-cargo/order-inbound-cargo.component';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { OrderService } from '../../services/backend/order.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inbound-cargo',
  templateUrl: './inbound-cargo.component.html',
  styleUrls: ['./inbound-cargo.component.css']
})
export class InboundCargoComponent implements OnInit {

  @Input() in_cargo: Cargo[];

  
 

  @Output() cargo_items = new EventEmitter<Cargo[]>();

  constructor(private dialog: MatDialog, private order_service: OrderService, ) { }


  ngOnInit() {



  }




  editCargoItem(crg) {
    let item_id = crg.id;
    let dialogRef = this.dialog.open(OrderInboundCargoComponent, {

      width: '450px',
      data: { 'item': crg, 'is_deleted': false }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (!isNullOrUndefined(result)) {
        let index = this.in_cargo.findIndex(c => c['id'] === result.item.id);

        if (index >= 0) {
          if (result.is_deleted == true) {
            this.in_cargo.splice(index, index);
          } else {
            this.in_cargo[index] = result.item;
          }

        } else {
          this.in_cargo.push(result.item)
        }
      }
     
      this.cargo_items.emit(this.in_cargo);
    });


  }

  addNewCargoItem() {
    this.order_service.getNewCargo().subscribe(res => this.editCargoItem(res));

  }

 
}
