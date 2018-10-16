import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/backend/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order, Cargo, OrderComment } from '../services/interfaces';
import { FormControl } from '@angular/forms';
import { CommentsService } from '../services/backend/comments/comments.service';
import { isNullOrUndefined } from 'util';
import { MenuService } from '../services/menu/menu.service';
import { ShipmentsService } from '../services/backend/shipments/shipments.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit {

  order: Order;
  title_fc: FormControl=new FormControl();
  inbound_bill_fc: FormControl=new FormControl();
  inbound_cargo: Cargo[];
  containers_qty: number;
  cargo_units_qty: number;
  gross_total: number;
  



  constructor(private orders_service: OrderService,
              private shipment_service:ShipmentsService, 
              private route: ActivatedRoute,
              private menu:MenuService,
              public snackBar: MatSnackBar,
              ) { }

  ngOnInit() {

    

    this.route.data.subscribe((data)=>{
      this.order=data.order;
      this.setFields();
      this.setMenu();

    })
   
  }

  ngOnDestroy(){

    // this.saveOrder();
  }

  setFields(){
   
    // Title field settings
    this.title_fc.setValue(this.order.short_description);
    this.title_fc.valueChanges.subscribe(title=>this.order.short_description=title)
    //  bill nr  field settings
    this.inbound_bill_fc.setValue(this.order.inbound_bill);
    this.inbound_bill_fc.valueChanges.subscribe(valx=>this.order.inbound_bill=valx);
    
    this.inbound_cargo=this.order.inbound_cargo;
    


  }

  setMenu(){
 
this.shipment_service.getOrdersShipments(this.order.id).subscribe(shipments=>{
  this.menu.setOrderDetailsSideMenu();
  
  this.menu.pushData({shipments:shipments,order_id:this.order.id});
});
   
  }

  consignorHandler(val){
    this.order.consignor = val;
  }
  consigneeHandler(val){
    this.order.consignee = val;
  }

  etaChangeHandler(eta){
    this.order.will_arrive=eta;
    
  }

  placeOfDispatchHandler(val) {
this.order.dispatch_place=val;

  }

  placeOfDestinationHandler(val){
this.order.destination_place=val;

  }


  saveOrder(){
  
    this.orders_service.postOrder(this.order).subscribe(m=>{
      this.order=m;
      this.snackBar.open('Order Saved','Undo',{
        duration: 500
      });
    
    });
  }

  indocsHandler(val){

    this.order.inbound_docs=val;


  }


 

   
}
