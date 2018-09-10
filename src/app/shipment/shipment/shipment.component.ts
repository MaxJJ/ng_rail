import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shipment, Person, Order, Factura, Cargo } from '../../services/interfaces';
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

  constructor(private route: ActivatedRoute,
              private service:ShipmentsService,
              private person_service:PersonsService,
              private order_service:OrderService) { }

  ngOnInit() {

    let id: string;
    this.route.params.subscribe(param => id = param.sh_id);
    this.service.getShipmentById(id).subscribe(res => this.shipment = res);
    this.setOrder();

    
  }

  private setOrder(){
let order_id;
this.route.params.subscribe(prms=>order_id=prms['id']);
this.order_service.getOrderById(order_id).subscribe(ord=>this.order=ord);
    
  }

  personById(id){

    this.person_service.getPerson(id).subscribe(p=>{return p});
  }

  sellerHandler(val){

    this.shipment.seller=val;
  }

  buyerHandler(val){
    this.shipment.buyer = val;
  }

  cargoChangeHandler(val){
    this.cargo=val;
  }

}
