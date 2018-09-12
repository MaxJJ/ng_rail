import { Component, OnInit, Input } from '@angular/core';
import { Shipment, Cargo, Factura } from '../../../services/interfaces';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { FacturaService } from '../../../services/backend/factura/factura.service';

@Component({
  selector: 'shipment-facturas',
  templateUrl: './shipment-facturas.component.html',
  styleUrls: ['./shipment-facturas.component.css']
})
export class ShipmentFacturasComponent implements OnInit {

  @Input()
  shipment: Shipment;

  cargo: Cargo[];
  facturas: Factura[];


  constructor(private cargo_service: CargoService, private factura_service: FacturaService) { }

  ngOnInit() {

    this.cargo = this.shipment.cargo;
    this.getShipmentsFacturas();
    
  }

  createNewFactura() {
    this.factura_service.createNewFactura(this.shipment.id).subscribe(v=>{
      this.facturas.push(v);
    });
  }

  getShipmentsFacturas(){

    this.factura_service.getShipmentsFacturas(this.shipment.id).subscribe(fctrs=>{
      this.facturas=fctrs;
      console.log(this.facturas);
    });
    }
  
}
