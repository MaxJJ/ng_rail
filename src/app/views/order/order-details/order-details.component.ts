import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/backend/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order, Cargo, OrderComment, Person, Place } from '../../../interfaces/interfaces';
import { FormControl } from '@angular/forms';
import { CommentsService } from '../../../services/backend/comments/comments.service';
import { isNullOrUndefined } from 'util';
import { MenuService } from '../../../services/menu/menu.service';
import { ShipmentsService } from '../../../services/backend/shipments/shipments.service';
import { MatSnackBar } from '@angular/material';
import { Portal } from '@angular/cdk/portal';
import { PortalsService, PortalAndData } from '../../../services/portals/services/portals.service';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit {

  order: Order;

  title_fc: FormControl = new FormControl();
  inbound_bill_fc: FormControl = new FormControl();
  inbound_cargo: Cargo[];
  containers_qty: number;
  cargo_units_qty: number;
  gross_total: number;

  sidePortal: Portal<any>;
  person_emitter: BehaviorSubject<Person>;
  place_emitter: BehaviorSubject<Place>;




  constructor(private orders_service: OrderService,
    private shipment_service: ShipmentsService,
    private route: ActivatedRoute,
    private menu: MenuService,
    public snackBar: MatSnackBar,
    private portals: PortalsService,
  ) { }

  ngOnInit() {



    this.route.data.subscribe((data) => {
      this.order = data.order;
      this.setFields();
      this.setMenu();

    })

  }

  ngOnDestroy() {

    // this.saveOrder();
  }




  //-------------------------------------------------------------------------------------------------------------
  setFields() {

    // Title field settings
    this.title_fc.setValue(this.order.short_description);
    this.title_fc.valueChanges.subscribe(title => this.order.short_description = title)
    //  bill nr  field settings
    this.inbound_bill_fc.setValue(this.order.inbound_bill);
    this.inbound_bill_fc.valueChanges.subscribe(valx => this.order.inbound_bill = valx);

    this.inbound_cargo = this.order.inbound_cargo;



  }

  setMenu() {

    this.shipment_service.getOrdersShipments(this.order.id).subscribe(shipments => {
      this.menu.setOrderDetailsSideMenu();

      this.menu.pushData({ shipments: shipments, order_id: this.order.id });
    });

  }

  consignorHandler(val) {

    let pd = this.showPersonPortal(val);
    pd.portal_data.change.pipe(skip(1)).subscribe(v => {
      this.order.consignor = v;
      this.sidePortal.detach();
    });
  }


  consigneeHandler(val) {
    let pd = this.showPersonPortal(val);
    pd.portal_data.change.pipe(skip(1)).subscribe(v => {
      this.order.consignee = v;
      this.sidePortal.detach();
    });
  }

  showPersonPortal(val: Person): PortalAndData {
    let pd = this.portals.personEditPortal(val);
    this.sidePortal = pd.portal;
    return pd;
  }

  showPlacePortal(val: Place): PortalAndData {
    let pd = this.portals.placeEditPortal(val);
    this.sidePortal = pd.portal;
    return pd;

  }


  etaChangeHandler(eta) {
    this.order.will_arrive = eta;

  }

  placeOfDispatchHandler(val) {
    this.order.dispatch_place = val;
    let pd = this.showPlacePortal(val);

    pd.portal_data.change.pipe(skip(1)).subscribe(v => {
      this.order.dispatch_place = v;
      this.sidePortal.detach();
    });

  }

  placeOfDestinationHandler(val) {
    this.order.destination_place = val;
    let pd = this.showPlacePortal(val);
    pd.portal_data.change.pipe(skip(1)).subscribe(v => {
      this.order.destination_place = v;
      this.sidePortal.detach();
    });
  }


  saveOrder() {

    this.orders_service.postOrder(this.order).subscribe(m => {
      this.order = m;
      this.snackBar.open('Order Saved', 'Undo', {
        duration: 500
      });

    });
  }

  indocsHandler(val) {

    this.order.inbound_docs = val;


  }





}
