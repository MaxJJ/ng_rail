import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shipment, Cargo, Order, Totals } from '../../../../interfaces/interfaces';
import { ShipmentsService } from '../../../../services/backend/shipments/shipments.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'order-details-shipments',
  templateUrl: './order-details-shipments.component.html',
  styleUrls: ['./order-details-shipments.component.css']
})
export class OrderDetailsShipmentsComponent implements OnInit {
  order_id:number;
  shipments:Shipment[];

  @Output()
  totals:Totals;
 

  @Output()
  updated:EventEmitter<Shipment[]> = new EventEmitter<Shipment[]>();

  constructor(private serv:ShipmentsService,private nav:Router,private route:ActivatedRoute) { }

  ngOnInit() {
this.route.params.subscribe(p=>this.order_id=p.id);
this.serv.getOrdersShipments(this.order_id).subscribe(shs=>{
  this.shipments=shs;
  // this._calcTotals(this.shipments);
});
  }

  addShipmentHandler(){
  
  this.serv.createNewShipment(this.order_id).subscribe(sh=>{
    this.shipments.push(sh);
      // this.nav.navigate([this.nav.url,'shipments',sh.id]);
    
  });
 
  }

  editShipmentHandler(id){
     
this.nav.navigate([this.nav.url,'shipments',id]);
    
  }

  private _calcTotals(items:Shipment[]){
    let ttls:Totals = {places:0,pcs:0,nett:0,gross:0,tnved_codes_qty:0,gng_codes_qty:0};
    let cargo:Cargo[]=[];
    items.forEach((v,i,a)=>{
      // cargo.concat(v.cargo);
    });
    cargo.forEach((v,i,a)=>{
      ttls.places+=v.package_quantity;
      ttls.pcs+=v.unit_quantity;
      ttls.nett+=v.nett_weight;
      ttls.gross+=v.gross_weight;
    });

    console.log(ttls);
  }
}
