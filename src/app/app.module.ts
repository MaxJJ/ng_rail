import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatPaginatorModule, MatSortModule, MatDialog, MatCardModule, MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE, MatGridListModule, MatTooltipModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { XzcDirective } from './xzc.directive';
import { ContentComponent } from './content/content.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { OrdersTableComponent } from './orders-table/orders-table.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceDetailsComponent } from './place-table/place-details/place-details.component';
import { InInfoComponent } from './ui-components/in-info/in-info/in-info.component';
import { RtmeDatepickerComponent } from './ui-components/date/rtme-datepicker/rtme-datepicker.component';
import { OrderIninfoComponent } from './ui-components/dialogs/order-ininfo/order-ininfo.component';
import { OrderInboundCargoComponent } from './ui-components/dialogs/order-inbound-cargo/order-inbound-cargo.component';
import { MatRadioModule } from '@angular/material/radio';
import { CardModule } from 'primeng/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatExpansionModule } from '@angular/material/expansion';
import { PlaceAutocompleteComponent } from './ui-components/places/place-autocomplete/place-autocomplete.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { OrderDetailsShipmentsComponent } from './ui-components/shipments/order_details_shipments/order-details-shipments/order-details-shipments.component';
import { ShipmentComponent } from './shipment/shipment/shipment.component';
import { CommentsComponent } from './ui-components/comments/comments/comments.component';
import { PersonExpPanelRawComponent } from './ui-components/persons/person-exp-panel-raw/person-exp-panel-raw.component';
import { PersonExpPanelFormComponent } from './ui-components/persons/person-exp-panel-form/person-exp-panel-form.component';

import { RtmeDirectoriesModule } from './modules/rtme-directories/rtme-directories.module';
import { ShipmentFacturasComponent } from './ui-components/facturas/shipment-facturas/shipment-facturas.component';
import { PersonRawComponent } from './ui-components/persons/person-raw/person-raw.component';
import { PersonSearchComponent } from './ui-components/persons/person-search/person-search.component';
import { PersonDialogComponent } from './ui-components/dialogs/person-dialog/person-dialog.component';
import { FacturaShowComponent } from './ui-components/facturas/factura-show/factura-show.component';
import { FacturaFormComponent } from './ui-components/facturas/factura-form/factura-form.component';
import { FacturaPersonComponent } from './ui-components/facturas/factura-person/factura-person.component';
import { RtmePrintComponent } from './rtme-print/rtme-print.component';

import { RtmeH1Directive } from './directives/rtme-h1.directive';
import { InboundDocsComponent } from './ui-components/order/inbound-docs/inbound-docs.component';
import { PlaceRawComponent } from './ui-components/places/place-raw/place-raw.component';
import { ShipmentInvoicesComponent } from './ui-components/shipments/shipment-invoices/shipment-invoices.component';

import { ShipmentViewResolver } from './resolvers/shipment-view.service';
import { PersonComboComponent } from './ui-components/persons/person-combo/person-combo.component';
import { CargoComboComponent } from './ui-components/facturas/cargo-combo/cargo-combo.component';
import { CargoModalComponent } from './ui-components/dialogs/cargo/cargo-modal/cargo-modal.component';
import { SideMenuDirective } from './directives/menu/side-menu/side-menu.directive';
import { OrdersSideMenuComponent } from './orders-table/side-menu/orders-side-menu/orders-side-menu.component';
import { OrderDetailsSideMenuComponent } from './order-details/side-menu/order-details-side-menu/order-details-side-menu.component';
import { OrdersTableViewResolver } from './resolvers/orders-table-view-resolver.service';
import { OrderDetailsResolver } from './resolvers/order-details-resolver.service';
import { ShipmentViewSideMenuComponent } from './shipment/shipment/side-menu/shipment-view-side-menu/shipment-view-side-menu.component';
import { FacturaComponent } from './factura/factura/factura.component';
import { FacturaViewResolver } from './resolvers/factura-view-resolver.service';
import { FacturaViewSideMenuComponent } from './factura/factura-side-menu/factura-view-side-menu/factura-view-side-menu.component';
import { CargoSearchComponent } from './ui-components/cargo/cargo-search/cargo-search.component';
import { RailbillSideMenuComponent } from './rwb/railbill-side-menu/railbill-side-menu.component';
import { RailbillViewResolver } from './resolvers/railbill-view-resolver.service';
import { RailbillComponent } from './rwb/railbill/railbill.component';
import { RwbDestinationComponent } from './rwb/rwb-components/rwb-destination/rwb-destination.component';
import { RwbConsignorComponent } from './rwb/rwb-components/rwb-consignor/rwb-consignor.component';
import { RwbDispatchComponent } from './rwb/rwb-components/rwb-dispatch/rwb-dispatch.component';
import { RwbConsigneeComponent } from './rwb/rwb-components/rwb-consignee/rwb-consignee.component';
import { RwbRoadSectionsComponent } from './rwb/rwb-components/rwb-road-sections/rwb-road-sections.component';
import { OrdersBoardComponent } from './dashboard/orders-board/orders-board.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderSingleComponent } from './components/order-single/order-single.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonSearchDialogComponent } from './ui-components/dialogs/person-search-dialog/person-search-dialog.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { ShipmentDialogComponent } from './ui-components/dialogs/shipment-dialog/shipment-dialog.component';
import { ShipmentCardComponent } from './components/shipment-card/shipment-card.component';
import { ShipmentSingleComponent } from './components/shipment-single/shipment-single.component';
import { NgxSoapModule } from 'ngx-soap';
import { KpsTestComponent } from './kps-test/kps-test.component';
import { KpsFindStationComponent } from './components/kps/kps-find-station/kps-find-station.component';

const appRoutes: Routes = [
  {
    path: 'orders_dash',
    component: OrdersBoardComponent,
    resolve: { orders: OrdersTableViewResolver }
  },
  {
    path: 'orders',
    component: OrdersTableComponent,
    resolve: { orders: OrdersTableViewResolver }
  },
  {
    path: 'order/:id',
    component: OrderDetailsComponent,
    resolve: { order: OrderDetailsResolver }
  },

  {
    path: 'order/:id/shipments/:sh_id',
    // component: ShipmentComponent,
    component: ShipmentSingleComponent,
    resolve: { data: ShipmentViewResolver }
  },

  {
    path: 'order/:id/shipments/:sh_id/facturas/:factura_id',
    component: FacturaComponent,
    resolve: { data: FacturaViewResolver }
  },

  {
    path: 'order/:id/shipments/:sh_id/rwb',
    component: RailbillComponent,
    resolve: { data: RailbillViewResolver }
  },

  { path: 'order/:id/shipments/:sh_id/print', component: RtmePrintComponent },

  { path: 'places', component: PlaceTableComponent },

  { path: 'kpstest', component: KpsTestComponent },



  // { path: 'test', loadChildren: 'app/modules/rtme-order/rtme-order.module#RtmeOrderModule' },

  {
    path: '',
    redirectTo: '/orders_dash',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/orders' }
];

@NgModule({
  declarations: [
    AppComponent,

    XzcDirective,

    ContentComponent,
    MyNavComponent,
    OrdersTableComponent,

    OrderDetailsComponent,

    PlaceTableComponent,

    PlaceDetailsComponent,

    InInfoComponent,

    RtmeDatepickerComponent,

    OrderIninfoComponent,

    OrderInboundCargoComponent,

    PlaceAutocompleteComponent,



    OrderDetailsShipmentsComponent,

    ShipmentComponent,

    CommentsComponent,

    PersonExpPanelRawComponent,

    PersonExpPanelFormComponent,

    ShipmentFacturasComponent,

    PersonRawComponent,

    PersonSearchComponent,

    PersonDialogComponent,

    FacturaShowComponent,

    FacturaFormComponent,

    FacturaPersonComponent,

    RtmePrintComponent,

    RtmeH1Directive,

    InboundDocsComponent,

    PlaceRawComponent,

    ShipmentInvoicesComponent,



    PersonComboComponent,

    CargoComboComponent,

    CargoModalComponent,

    RailbillComponent,
    SideMenuDirective,

    OrdersSideMenuComponent,

    OrderDetailsSideMenuComponent,

    ShipmentViewSideMenuComponent,

    FacturaComponent,

    FacturaViewSideMenuComponent,

    CargoSearchComponent,

    RailbillSideMenuComponent,

    RwbDestinationComponent,

    RwbConsignorComponent,

    RwbDispatchComponent,

    RwbConsigneeComponent,

    RwbRoadSectionsComponent,

    OrdersBoardComponent,

    OrderCardComponent,

    OrderSingleComponent,

    PersonCardComponent,

    PersonSearchDialogComponent,

    PlaceCardComponent,

    ShipmentDialogComponent,

    ShipmentCardComponent,

    ShipmentSingleComponent,

    KpsTestComponent,

    KpsFindStationComponent,


  ],
  entryComponents: [

    PlaceDetailsComponent,
    OrderIninfoComponent,
    OrderInboundCargoComponent,
    PersonDialogComponent,
    CargoModalComponent,
    OrdersSideMenuComponent,
    OrderDetailsSideMenuComponent,
    ShipmentViewSideMenuComponent,
    FacturaViewSideMenuComponent,
    RailbillSideMenuComponent,
    PersonSearchDialogComponent,
    ShipmentDialogComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true, onSameUrlNavigation: 'reload' }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    HttpModule,
    HttpClientModule,
    LayoutModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    CardModule,
    MatExpansionModule,
    MatMenuModule,
    MatSnackBarModule,
    RtmeDirectoriesModule,
    NgxSoapModule,
  ],
  providers: [
    MatDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
