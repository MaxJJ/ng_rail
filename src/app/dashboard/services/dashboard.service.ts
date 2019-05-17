import { Injectable, Injector } from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { OrdersListComponent } from '../orders-list/orders-list.component';
import { ORDERS, SHIPMENTS, DASHBOARD_DATA, DashData } from '../tokens';
import { ShipmentsListComponent } from '../shipments-list/shipments-list.component';
import { OrderCardComponent } from '../../components/order-card/order-card.component';

const injectorTokens = new WeakMap();

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _injector: Injector) { }

  orderListPortal(data: DashData): ComponentPortal<OrdersListComponent> {

    injectorTokens.set(DASHBOARD_DATA, data);
    let inj = new PortalInjector(this._injector, injectorTokens);
    let portal = new ComponentPortal(OrdersListComponent, null, inj);

    return portal;
  }

  shipmentListPortal(data: any): ComponentPortal<ShipmentsListComponent> {

    injectorTokens.set(SHIPMENTS, data);
    let inj = new PortalInjector(this._injector, injectorTokens);
    let portal = new ComponentPortal(ShipmentsListComponent, null, inj);

    return portal;
  }

  dashBoardCardPortal(data: any): ComponentPortal<OrderCardComponent> {

    injectorTokens.set(ORDERS, data);
    let inj = new PortalInjector(this._injector, injectorTokens);
    let portal = new ComponentPortal(OrderCardComponent, null, inj);

    return portal;
  }

}
