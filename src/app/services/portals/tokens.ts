import { InjectionToken, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person, Place } from '../../interfaces/interfaces';
import { ComponentPortal } from '@angular/cdk/portal';

export interface PortalsData {
    data: any;
    change: BehaviorSubject<any>;

}
export class DashData {
    in_data?: any;
    out_data?: BehaviorSubject<any>;

    constructor() {

        this.out_data = new BehaviorSubject<any>('');
    }
}
export const ORDER = new InjectionToken<{}>('ORDER');
export const SHIPMENT = new InjectionToken<{}>('SHIPMENT');
export const DASHBOARD_DATA = new InjectionToken<DashData>('DASHBOARD_DATA');
export const PERSON = new InjectionToken<PortalsData>('PERSON');
export const PLACE = new InjectionToken<PortalsData>('PLACE');


