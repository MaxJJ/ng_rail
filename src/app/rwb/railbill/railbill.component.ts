import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Shipment, Railbill, Order } from '../../services/interfaces';
import { RailbillService } from '../../services/backend/rwb/railbill.service';

@Component({
  selector: 'railbill',
  templateUrl: './railbill.component.html',
  styleUrls: ['./railbill.component.css']
})
export class RailbillComponent implements OnInit {

  shipment:Shipment;
  rwb:Railbill;
  order:Order;

  constructor(private menu:MenuService,
              private route:ActivatedRoute,
              private rwb_service:RailbillService) { }

  ngOnInit() {

    this.route.data.subscribe(data=>{
      this.shipment=data.data.shipment;
      this.rwb=data.data.rwb;
      this.order=data.data.order;

    });

    this.menu.setRwbViewSideMenu();



  }

  saveRwb(){
this.rwb_service.saveRailbill(this.rwb).subscribe(res=>{
  this.rwb=res;
});
  }

}
