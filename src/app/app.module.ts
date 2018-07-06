import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatPaginatorModule, MatSortModule, MatDialog, MatCardModule, MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { XzcDirective } from './xzc.directive';
import { ContentComponent } from './content/content.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { HttpClientModule } from '@angular/common/http';

import { OrdersTableComponent } from './orders-table/orders-table.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule,MatDatepicker} from '@angular/material/datepicker';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceDetailsComponent } from './place-table/place-details/place-details.component';
import { InInfoComponent } from './ui-components/in-info/in-info/in-info.component';
import { RtmeDatepickerComponent } from './ui-components/date/rtme-datepicker/rtme-datepicker.component';
import { OrderIninfoComponent } from './ui-components/dialogs/order-ininfo/order-ininfo.component';
import { MY_FORMATS } from './services/adapters';


const appRoutes: Routes = [
  { path: 'orders', component: OrdersTableComponent },
  { path: 'order/:id',component: OrderDetailsComponent },
  { path: 'places',component: PlaceTableComponent },
  { path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  { path: '**', redirectTo:'/orders'}
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
   
  ],
  entryComponents: [
   
    PlaceDetailsComponent,OrderIninfoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true,onSameUrlNavigation:'reload'}),
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
    HttpModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule, 
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatAutocompleteModule

  ],
  providers: [
    MatDialog,
    MatDatepicker,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
