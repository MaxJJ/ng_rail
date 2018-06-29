import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatPaginatorModule, MatSortModule, MatDialog, MatCardModule, MatNativeDateModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { XzcDirective } from './xzc.directive';
import { ContentComponent } from './content/content.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DataTableComponent } from './data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';

import { OrdersTableComponent } from './orders-table/orders-table.component';
import { OrderInfoComponent } from './orders-table/order-info/order-info.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule,MatDatepicker} from '@angular/material/datepicker';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceDetailsComponent } from './place-table/place-details/place-details.component';


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
    DataTableComponent,
    
    OrdersTableComponent,
    
    OrderInfoComponent,
    
    OrderDetailsComponent,
    
    PlaceTableComponent,
    
    PlaceDetailsComponent,
   
  ],
  entryComponents: [
    OrderInfoComponent,
    PlaceDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    FormsModule,
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
    MatNativeDateModule,

  ],
  providers: [MatDialog,MatDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule { }
