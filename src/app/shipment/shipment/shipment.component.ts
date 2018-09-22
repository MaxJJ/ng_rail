import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shipment, Person, Order, Factura, Cargo, Place } from '../../services/interfaces';
import { ShipmentsService } from '../../services/backend/shipments/shipments.service';
import { PersonsService } from '../../services/backend/persons/persons.service';
import { OrderService } from '../../services/backend/order.service';

class FacturasExPanelData {
  shipment_id: number;
  facturas: Factura[];
  cargo: Cargo[];

  constructor(id: number, f: Factura[], c: Cargo[]) {
    this.shipment_id = id;
    this.facturas = f;
    this.cargo = c;
  }
}

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {


  order: Order;

  shipment: Shipment;
  cargo: Cargo[];
  isContainer: boolean = false;
  dispatch: Place;
  destination: Place;

  constructor(private route: ActivatedRoute,
    private service: ShipmentsService,
    private person_service: PersonsService,
    private order_service: OrderService) { 


    }

    ngOnChanges(){
 
    
    }

  ngOnInit() {
 
this.route.data.subscribe((data) => {
  console.log("data is --------",data);
    this.shipment = data.shipment.shipment;
    this.order = data.shipment.order;
    
    this.isContainer = !this.shipment.cargo_is_general;
    this.dispatch = this.order.dispatch_place;
    this.destination = this.order.destination_place;
    this.shipment.consignee=this.order.consignee;
    this.shipment.consignor=this.order.consignor;
});
  }


  personById(id) {

    this.person_service.getPerson(id).subscribe(p => { return p });
  }


  cargoChangeHandler(val) {
    this.cargo = val;
  }

  isContainerChange(val) {
    if (val.checked) {
      this.service.createDeleteContainer(this.shipment.id, 0).subscribe(sh => this.shipment = sh);
      this.isContainer = val.checked;
    } else {
      this.service.createDeleteContainer(this.shipment.id, 100).subscribe(sh => this.shipment = sh);
      this.isContainer = val.checked;
    }


  }



  saveShipment(){
    this.service.saveShipment(this.order.id,this.shipment).subscribe(sh=>this.shipment=sh);
  }

}
