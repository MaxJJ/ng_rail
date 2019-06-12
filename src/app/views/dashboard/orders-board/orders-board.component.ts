import { Component, OnInit } from '@angular/core';
import { Order } from '../../../interfaces/interfaces';
import { Portal } from '@angular/cdk/portal';
import { DashData } from '../../../services/portals/tokens';
import { PortalsService } from '../../../services/portals/services/portals.service';
import { SearchResult } from '../../../components/search-row/search-row.component';
import { OrderService } from '../../../services/backend/order.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.css']
})

export class OrdersBoardComponent implements OnInit {

  listPortal: Portal<any>; // portal for block with received list data
  sidePortal: Portal<any>; // portal for block with choosed from listPortal item data
  dashdata: DashData = new DashData(); // data used among portals of this view

  constructor(
    private order_service: OrderService,
    private portals: PortalsService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.dashdata.out_data.subscribe(v => {
      v == '' ? null : this.showSideCard(v);
    });
  }


  // handle received from app-search-row / SearchRowComponent  list data of type 'orders' or 'shipments'
  onShowList(list: SearchResult) {
    if (list.type == 'orders') {
      this.showOrders(list.list);
    }
  }

  showSideCard(data) {
    this.sidePortal = this.portals.dashOrderCardPortal(data);
  }


  showOrders(orders: Order[]) {
    this.dashdata.in_data = orders;

    this.listPortal = this.portals.orderListPortal(this.dashdata);

  }

  showShipments() {

    this.listPortal = this.portals.shipmentListPortal({ 'shipments': 18 });

  }

  createOrder() {
    this.order_service.getNewOrder().subscribe(ord => {
      this.router.navigate(['order', ord.id]);
    });
  }

}
