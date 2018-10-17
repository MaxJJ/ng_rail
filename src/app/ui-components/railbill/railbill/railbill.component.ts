import { Component, OnInit, Input } from '@angular/core';
import { Shipment, Place, Cargo } from '../../../services/interfaces';



@Component({
  selector: 'railbill',
  templateUrl: './railbill.component.html',
  styleUrls: ['./railbill.component.css']
})
export class RailbillComponent implements OnInit {

  @Input()
  shipment:Shipment;
  @Input()
  dispatch:Place;
  @Input()
  destination:Place;
  
  cargo:Cargo[];
  
  constructor() { }

  ngOnInit() {
  let c:Cargo[] = [];
  //  let f= this.shipment.facturas;
  //  f.forEach(factura => {
  //     c=c.concat(factura.cargo);
  //  });
  
  this.cargo = c;

  this.sortCargo(this.cargo);
  }

sortCargo(c:Cargo[]){

}


}
