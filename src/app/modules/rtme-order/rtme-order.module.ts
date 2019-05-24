import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MTestComponent } from './components/m-test/m-test.component';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { OrderDetailsComponent } from '../../views/order/order-details/order-details.component';
import { AppModule } from '../../app.module';

const routes: Routes = [
  {
    path: '',
    component: MTestComponent
  },
  {
    path: 'tt',
    component: MTestComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],

  declarations: [MTestComponent]
})
export class RtmeOrderModule { }
