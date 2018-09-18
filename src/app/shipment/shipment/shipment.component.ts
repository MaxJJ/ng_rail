import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shipment, Person, Order, Factura, Cargo, Place } from '../../services/interfaces';
import { ShipmentsService } from '../../services/backend/shipments/shipments.service';
import { PersonsService } from '../../services/backend/persons/persons.service';
import { OrderService } from '../../services/backend/order.service';

class FacturasExPanelData {
  shipment_id:number;
  facturas:Factura[];
  cargo:Cargo[];

  constructor(id:number,f:Factura[],c:Cargo[]) {
    this.shipment_id=id;
    this.facturas=f;
    this.cargo=c;
  }
}

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  
  order:Order;

  shipment:Shipment;
  cargo:Cargo[];
  isContainer:boolean = false;
  dispatch:Place;
  destination:Place;

  constructor(private route: ActivatedRoute,
              private service:ShipmentsService,
              private person_service:PersonsService,
              private order_service:OrderService) { }

  ngOnInit() {

    let id: string;
    this.route.params.subscribe(param => id = param.sh_id);
    this.service.getShipmentById(id).subscribe(res =>{
      this.shipment = res;
      this.isContainer=!this.shipment.cargo_is_general;
    
    });
    this.setOrder();

    
  }

  private setOrder(){
let order_id;
this.route.params.subscribe(prms=>order_id=prms['id']);
this.order_service.getOrderById(order_id).subscribe(ord=>{
  this.order=ord;
  this.dispatch=this.order.dispatch_place;
  this.destination=this.order.destination_place;
});
    
  }

  personById(id){

    this.person_service.getPerson(id).subscribe(p=>{return p});
  }


  cargoChangeHandler(val){
    this.cargo=val;
  }

  isContainerChange(val){
    if (val.checked){
      this.service.createDeleteContainer(this.shipment.id,0).subscribe(sh=>this.shipment=sh);
      this.isContainer=val.checked;
    }else{
      this.service.createDeleteContainer(this.shipment.id,100).subscribe(sh=>this.shipment=sh);
      this.isContainer=val.checked;
    }
    
  
  }

}
