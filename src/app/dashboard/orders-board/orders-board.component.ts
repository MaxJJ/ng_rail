import { Component, OnInit, AfterViewInit, Injector, InjectionToken, ViewChild, ElementRef, Inject } from '@angular/core';
import { OrderService } from '../../services/backend/order.service';
import { Order, Person } from '../../services/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, of, Subject, BehaviorSubject } from 'rxjs';
import { AotCompiler } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { StateService } from '../../services/state/state.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Portal, ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { OrderSingleComponent } from '../../components/order-single/order-single.component';
import { ContentComponent } from '../../content/content.component';
import { OrdersListComponent } from '../orders-list/orders-list.component';
import { ORDERS, DashData, DASHBOARD_DATA } from '../tokens';
import { DashboardService } from '../services/dashboard.service';
import { SearchResult } from '../../components/search-row/search-row.component';
import { OrderCardComponent } from '../../components/order-card/order-card.component';



@Component({
  selector: 'app-orders-board',
  templateUrl: './orders-board.component.html',
  styleUrls: ['./orders-board.component.css']
})

export class OrdersBoardComponent implements OnInit, AfterViewInit {

  orders: Order[] = [];
  active_order: Order;
  selectedPortal: Portal<any>;
  sidePortal: Portal<any>;
  portal: ComponentPortal<any>;
  dashdata: DashData = new DashData();
  test: any;

  constructor(private serv_orders: OrderService,
    private route: ActivatedRoute,
    private state: StateService,
    private prtls: DashboardService,
  ) { }

  ngOnInit() {
    this.state.last_active_order$.subscribe(ord => {
      this.active_order = ord;
    });
    this.route.queryParamMap.subscribe(params => {
      if (params.has('active')) {
        let order_id = params.get('active');
        this.serv_orders.getOrderById(order_id).subscribe(ao => this.state.last_active_order = ao);
      }
    });

    this.dashdata.out_data.subscribe(v => {
      v == '' ? null : this.showSideCard(v);
    });
  }

  ngAfterViewInit() {

  }

  onShowList(list: SearchResult) {
    if (list.type == 'orders') {
      this.showOrders(list.list);
    }
  }

  showSideCard(data) {
    this.sidePortal = this.prtls.dashBoardCardPortal(data);
  }


  showOrders(orders: Order[]) {
    this.dashdata.in_data = orders;

    this.selectedPortal = this.prtls.orderListPortal(this.dashdata);

  }

  showShipments() {

    this.selectedPortal = this.prtls.shipmentListPortal({ 'shipments': 18 });

  }

  onOrderActivated(event) {

    this.orders = [];
    this.state.last_active_order = event;

  }


}
