import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipment, Cargo } from '../../../../services/interfaces';
import { ShipmentsService } from '../../../../services/backend/shipments/shipments.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'order-details-shipments',
  templateUrl: './order-details-shipments.component.html',
  styleUrls: ['./order-details-shipments.component.css']
})
export class OrderDetailsShipmentsComponent implements OnInit {
  @Input()
  orders_shipments:Shipment[];
  @Input()
  inbound_cargo:Cargo[];

 

  @Output()
  updated:EventEmitter<Shipment[]> = new EventEmitter<Shipment[]>();

  constructor(private serv:ShipmentsService,private nav:Router) { }

  ngOnInit() {

  }

  addShipmentHandler(){
  
  this.serv.createNewShipment().subscribe(sh=>this.orders_shipments.push(sh));
 this.updated.emit(this.orders_shipments);
  }

  editShipmentHandler(id){
     
this.nav.navigate([this.nav.url,'shipments',id]);
    
  }
}
