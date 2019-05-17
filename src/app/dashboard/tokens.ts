import { InjectionToken, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class DashData {
    in_data?: any;
    out_data?: BehaviorSubject<any>;
    type: string;

    constructor() {

        this.out_data = new BehaviorSubject<any>('');
    }
}
export const ORDERS = new InjectionToken<{}>('ORDERS');
export const SHIPMENTS = new InjectionToken<{}>('SHIPMENTS');
export const DASHBOARD_DATA = new InjectionToken<DashData>('DASHBOARD_DATA'); 