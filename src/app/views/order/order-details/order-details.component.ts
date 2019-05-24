import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/backend/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order, Cargo, OrderComment, Person, Place } from '../../../services/interfaces';
import { FormControl } from '@angular/forms';
import { CommentsService } from '../../../services/backend/comments/comments.service';
import { isNullOrUndefined } from 'util';
import { MenuService } from '../../../services/menu/menu.service';
import { ShipmentsService } from '../../../services/backend/shipments/shipments.service';
import { MatSnackBar } from '@angular/material';
import { Portal } from '@angular/cdk/portal';
import { PortalsService } from '../../../services/portals/services/portals.service';
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
    this.order.consignor = val;
    this.showPersonPortal(val);
  }


  consigneeHandler(val) {
    this.order.consignee = val;
    this.showPersonPortal(val);
  }

  showPersonPortal(val: Person) {
    this.person_emitter = new BehaviorSubject<Person>(val);
    this.sidePortal = this.portals.personEditPortal(this.person_emitter);
    this.person_emitter.pipe(skip(1)).subscribe(v => {
      console.log(v);
      this.sidePortal.detach();
    });
  }

  showPlacePortal(val: Place) {
    let pd = this.portals.placeEditPortal(val);
    this.sidePortal = pd.portal;
    pd.portal_data.change.pipe(skip(1)).subscribe(v => {
      this.sidePortal.detach();
    });
  }


  etaChangeHandler(eta) {
    this.order.will_arrive = eta;

  }

  placeOfDispatchHandler(val) {
    this.order.dispatch_place = val;
    this.showPlacePortal(val);

  }

  placeOfDestinationHandler(val) {
    this.order.destination_place = val;
    this.showPlacePortal(val);

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
