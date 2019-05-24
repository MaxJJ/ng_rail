import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../../../services/menu/menu.service';
import { OrderService } from '../../../../../services/backend/order.service';
import { ShipmentsService } from '../../../../../services/backend/shipments/shipments.service';

@Component({
  selector: 'app-order-details-side-menu',
  templateUrl: './order-details-side-menu.component.html',
  styleUrls: ['./order-details-side-menu.component.css']
})
export class OrderDetailsSideMenuComponent implements OnInit {
  order_id: any;
  data: any = {};

  constructor(private router: Router,
    private shipment_service: ShipmentsService,
    private order_service: OrderService) {

  }

  ngOnInit() {

  }

  navigateToShipment(id) {


    this.router.navigate(['order', this.data.order_id, 'shipments', id]);


  }

  createShipment() {

    this.shipment_service.createNewShipment(this.data.order_id).subscribe(sh => {
      this.router.navigate(['order', this.data.order_id, 'shipments', sh.id]);
    });

  }

  delete() {
    this.order_service.deleteOrder(this.data.order_id).subscribe(res => {
      console.log(res);
      this.router.navigate(['orders',]);
    });

  }
}
