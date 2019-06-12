import { Component, OnInit, Input } from '@angular/core';
import { Shipment, Cargo, Factura, Order } from '../../../interfaces/interfaces';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { FacturaService } from '../../../services/backend/factura/factura.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shipment-facturas',
  templateUrl: './shipment-facturas.component.html',
  styleUrls: ['./shipment-facturas.component.css']
})
export class ShipmentFacturasComponent implements OnInit {

  @Input()
  facturas: Factura[];
  @Input()
  order: Order;
  
  shipment_id:number;
  cargo: Cargo[];
  


  constructor(
    private cargo_service: CargoService, 
    private factura_service: FacturaService,
    private route:ActivatedRoute,
    ) { }

  ngOnChanges(){

    
  }

  ngOnInit() {
 this.route.params.subscribe(p=>this.shipment_id=p.sh_id);
  }

  createNewFactura() {
    this.factura_service.createNewFactura(this.shipment_id).subscribe(v=>{
      this.facturas.push(v);
    });
  }


  
}
