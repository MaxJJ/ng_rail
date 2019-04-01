import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Shipment, Railbill, Order, Factura, Cargo } from '../../services/interfaces';
import { RailbillService } from '../../services/backend/rwb/railbill.service';
import { CargoService } from '../../services/backend/cargo/cargo.service';
import { FacturaService } from '../../services/backend/factura/factura.service';

@Component({
  selector: 'railbill',
  templateUrl: './railbill.component.html',
  styleUrls: ['./railbill.component.css']
})
export class RailbillComponent implements OnInit {

  shipment:Shipment;
  rwb:Railbill;
  order:Order;
  facturas:Factura[];
  cargo:Cargo[]=[];
  cargo_sorted:Cargo[]=[];

  constructor(private menu:MenuService,
              private route:ActivatedRoute,
              private rwb_service:RailbillService,
              private cargo_service:CargoService,
              private factura_service:FacturaService,
              
              ) { }

  ngOnInit() {

    this.route.data.subscribe(data=>{
      
      this.shipment=data.data.shipment;
      this.rwb=data.data.rwb;
      this.order=data.data.order;
      this.facturas=data.data.facturas;
      
    });
   
    this.menu.setRwbViewSideMenu();

    this.getCargo();
   

  }

  saveRwb(){
this.rwb_service.saveRailbill(this.rwb).subscribe(res=>{
  this.rwb=res;
});
  }

  getCargo(){

    this.facturas.forEach((v,i,a)=>{
    
      this.factura_service.getFacturasCargo(v.id).subscribe(res=>{
       
        this.cargo = this.cargo.concat(res);
     
      });
    });
  }



}
