import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shipment, Person, Order, Factura, Cargo, Place, Container, Invoice, Railbill } from '../../services/interfaces';
import { ShipmentsService } from '../../services/backend/shipments/shipments.service';
import { PersonsService } from '../../services/backend/persons/persons.service';
import { OrderService } from '../../services/backend/order.service';
import { MenuService } from '../../services/menu/menu.service';
import { isNullOrUndefined } from 'util';

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
  container:Container={id:0,};
  dispatch: Place;
  destination: Place;
  facturas:Factura[];
  rwb:Railbill;

  constructor(private route: ActivatedRoute,
    private service: ShipmentsService,
    private person_service: PersonsService,
    private order_service: OrderService,
    private menu: MenuService,
    private router:Router,
    ) { 


    }

    ngOnChanges(){
 
    
    }

  ngOnInit() {
 
this.route.data.subscribe((data) => {
     this.shipment = data.shipment.shipment;
    this.order = data.shipment.order;
    this.facturas=data.shipment.facturas;
    this.rwb=data.shipment.rwb;
    
    this.isContainer = !this.shipment.cargo_is_general;
    if(!isNullOrUndefined(this.shipment.container)){
      this.container = this.shipment.container;
    }
    this.dispatch = this.order.dispatch_place;
    this.destination = this.order.destination_place;
    this.shipment.consignee=this.order.consignee;
    this.shipment.consignor=this.order.consignor;
    this.menu.setShipmentViewSideMenu();
    this.menu.pushData({shipment:this.shipment,order:this.order,facturas:this.facturas,rwb:this.rwb});
});
  }


  personById(id) {

    this.person_service.getPerson(id).subscribe(p => { return p });
  }


  cargoChangeHandler(val) {
    this.cargo = val;
    
  }

  isContainerChange(change){
    this.isContainer = change.checked;
  }



  saveShipment(){
    this.shipment.cargo_is_general=!this.isContainer;
    this.shipment.container=this.container
  
    this.service.saveShipment(this.shipment).subscribe(sh=>this.shipment=sh);
  }

  deleteShipment(){

   this.service.deleteShipment(this.shipment.id).subscribe(res=>{
     console.log(res);
    this.router.navigate(['order',this.order.id]);
   });
  }



}
