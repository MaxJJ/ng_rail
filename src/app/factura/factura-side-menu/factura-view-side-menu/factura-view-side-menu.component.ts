import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-view-side-menu',
  templateUrl: './factura-view-side-menu.component.html',
  styleUrls: ['./factura-view-side-menu.component.css']
})
export class FacturaViewSideMenuComponent implements OnInit {

  data:any;

  constructor(private router:Router,) { }

  ngOnInit() {
  }

  goToShipment(){
    console.log(this.data);
    this.router.navigate(['order',this.data.order.id,'shipments',this.data.shipment.id]);

  }
}
