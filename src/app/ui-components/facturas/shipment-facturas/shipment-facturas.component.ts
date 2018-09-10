import { Component, OnInit, Input } from '@angular/core';
import { Shipment, Cargo, Factura } from '../../../services/interfaces';
import { CargoService } from '../../../services/backend/cargo/cargo.service';

@Component({
  selector: 'shipment-facturas',
  templateUrl: './shipment-facturas.component.html',
  styleUrls: ['./shipment-facturas.component.css']
})
export class ShipmentFacturasComponent implements OnInit {

  @Input()
  shipment:any;

  cargo:Cargo[];
  facturas:Factura[];

  
  constructor(private cargo_service:CargoService) { }

  ngOnInit() {

    this.cargo=this.shipment.cargo;
  }

}
