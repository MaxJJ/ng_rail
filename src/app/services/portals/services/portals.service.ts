import { Injectable, Injector, InjectionToken } from '@angular/core';
import { ComponentPortal, PortalInjector, ComponentType } from '@angular/cdk/portal';
import { OrdersListComponent } from '../../../views/dashboard/orders-list/orders-list.component';
import { ORDER, SHIPMENT, DASHBOARD_DATA, DashData, PERSON, PLACE, PortalsData } from '../tokens';
import { ShipmentsListComponent } from '../../../views/dashboard/shipments-list/shipments-list.component';
import { OrderCardComponent } from '../../../components/order-card/order-card.component';
import { Person, Place } from '../../interfaces';
import { PersonDialogComponent } from '../../../components/person/person-edit-portal/person-dialog.component';
import { BehaviorSubject } from 'rxjs';
import { PlaceAutocompleteComponent } from '../../../ui-components/places/place-autocomplete/place-autocomplete.component';
import { PlaceEditPortalComponent } from '../../../components/place/place-edit-portal/place-edit-portal.component';

export class PortalAndData {
  portal: ComponentPortal<any>;
  portal_data: PortalsData;

  constructor(p: ComponentPortal<any>, pd: PortalsData) {
    this.portal = p,
      this.portal_data = pd
  }

}

const injectorTokens = new WeakMap();

@Injectable({
  providedIn: 'root'
})
export class PortalsService {

  constructor(private _injector: Injector) { }

  orderListPortal(data: DashData): ComponentPortal<OrdersListComponent> {

    injectorTokens.set(DASHBOARD_DATA, data);
    let inj = new PortalInjector(this._injector, injectorTokens);
    let portal = new ComponentPortal(OrdersListComponent, null, inj);

    return portal;
  }

  shipmentListPortal(data: any): ComponentPortal<ShipmentsListComponent> {

    injectorTokens.set(SHIPMENT, data);
    let inj = new PortalInjector(this._injector, injectorTokens);
    let portal = new ComponentPortal(ShipmentsListComponent, null, inj);

    return portal;
  }

  dashOrderCardPortal(data: any): ComponentPortal<OrderCardComponent> {

    injectorTokens.set(ORDER, data);
    let inj = new PortalInjector(this._injector, injectorTokens);
    let portal = new ComponentPortal(OrderCardComponent, null, inj);

    return portal;
  }

  personEditPortal(emitter: BehaviorSubject<Person>): ComponentPortal<PersonDialogComponent> {

    injectorTokens.set(PERSON, emitter);
    console.log(emitter.getValue());
    let inj = new PortalInjector(this._injector, injectorTokens);
    let portal = new ComponentPortal(PersonDialogComponent, null, inj);
    return portal;
  }

  placeEditPortal(data: Place): PortalAndData {


    return this.createPortal(PLACE, data, PlaceEditPortalComponent)
  }

  createPortal(token: InjectionToken<any>, data: any, component: ComponentType<any>): PortalAndData {
    let pd: PortalsData = { 'data': data, 'change': new BehaviorSubject<Place>(data) };
    let injTokens = new WeakMap();
    injTokens.set(token, pd);
    let inj = new PortalInjector(this._injector, injTokens);
    let portal = new ComponentPortal(component, null, inj);
    return new PortalAndData(portal, pd);
  }
}
