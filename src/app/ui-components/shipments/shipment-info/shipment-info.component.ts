import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentsService } from '../../../services/backend/shipments/shipments.service';
import { Shipment, Place, Order, Container } from '../../../services/interfaces';
import { isNullOrUndefined } from 'util';


export interface ShipmentInfo{
  name?:string;
  description?:string;
  isGeneral?:boolean;
  container?:Container;
}

@Component({
  selector: 'shipment-info',
  templateUrl: './shipment-info.component.html',
  styleUrls: ['./shipment-info.component.css']
})
export class ShipmentInfoComponent implements OnInit {

  shipment:Shipment;
  dispatch:Place;
  destination:Place;
  order:Order;
  isContainer: boolean = false;
  container:Container;

  info:ShipmentInfo={};
  

  constructor(private route:ActivatedRoute,private shipment_service:ShipmentsService) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.shipment = data.shipment.shipment;
     this.order = data.shipment.order;
     
     this.isContainer = !this.shipment.cargo_is_general;
     this.dispatch = this.order.dispatch_place;
     this.destination = this.order.destination_place;
     this.shipment.consignee=this.order.consignee;
     this.shipment.consignor=this.order.consignor;

     this.info.name=this.shipment.name;
     this.info.isGeneral=this.shipment.cargo_is_general;
     this.info.description=this.shipment.description;
     if(!isNullOrUndefined(this.shipment.container)){
      this.info.container=this.shipment.container;
     }else{
      this.info.container={}
     }
     
 });
  }


  
  infoSave(){
     this.shipment_service.saveInfo(this.shipment.id,this.info).subscribe(s=>{this.shipment=s;});
    
    // this.shipment_service.saveShipment(this.order.id,this.shipment).subscribe(s=>this.shipment=s);
  }

  infoGet(){
    this.route.params.subscribe(p=>{
     let sh_id:number;
     sh_id=p['sh_id'];
     this.shipment_service.getShipmentById(sh_id).subscribe(sh=>{
      this.isContainer = !sh.cargo_is_general;
       this.info.description=sh.description;
       this.info.isGeneral=sh.cargo_is_general;
       if(!isNullOrUndefined(sh.container)){
        this.isContainer=true;
        this.info.isGeneral=false;
        this.info.container=sh.container;
       }else{
        this.isContainer=false;
        this.info.isGeneral=true;
        this.info.container={};
       }

       this.info.name=sh.name;
     });
    });

  }

  isContainerChange(val) {
    if (val.checked) {
      this.info.container={id:0,}
      this.info.isGeneral=false;
      // this.shipment_service.createDeleteContainer(this.shipment.id, 0).subscribe(sh => this.shipment = sh);
      this.isContainer = val.checked;
    } else {
      // this.shipment_service.createDeleteContainer(this.shipment.id, 100).subscribe(sh => this.shipment = sh);
      this.info.isGeneral=true;
      this.info.container={id:-1,}
      this.isContainer = val.checked;
    }


  }

}
