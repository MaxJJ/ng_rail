import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/backend/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order, Cargo, OrderComment } from '../services/interfaces';
import { FormControl } from '@angular/forms';
import { CommentsService } from '../services/backend/comments/comments.service';
import { isNullOrUndefined } from 'util';
import { MenuService } from '../services/menu/menu.service';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit {

  model: Order;
  title_fc: FormControl=new FormControl();
  inbound_bill_fc: FormControl=new FormControl();
  inbound_cargo: Cargo[];
  containers_qty: number;
  cargo_units_qty: number;
  gross_total: number;



  constructor(private orders_service: OrderService, 
              private route: ActivatedRoute,
              private menu:MenuService) { }

  ngOnInit() {
    let id: string;
    
    this.route.params.subscribe(param => id = param.id);
    this.orders_service.getOrderById(id).subscribe(res => this.model = res);
    setTimeout(()=>{this.setFields()},300) ;

  }

  setFields(){
    this.calculateTotals(this.model.inbound_cargo);
    // Title field settings
    this.title_fc.setValue(this.model.short_description);
    this.title_fc.valueChanges.subscribe(title=>this.model.short_description=title)
    //  bill nr  field settings
    this.inbound_bill_fc.setValue(this.model.inbound_bill);
    this.inbound_bill_fc.valueChanges.subscribe(valx=>this.model.inbound_bill=valx);
    
    this.inbound_cargo=this.model.inbound_cargo;

    this.setMenu();

  }


  setMenu(){
    this.menu.setTopTitle('Order '+this.model.id+' details')
  }

  etaChangeHandler(eta){
    this.model.will_arrive=eta;
    console.log(eta);
  }

  placeOfDispatchHandler(val) {
this.model.dispatch_place=val;
  }

  placeOfDestinationHandler(val){
this.model.destination_place=val;
  }

  inboundCargoHandler(val){
    this.model.inbound_cargo=val;
    this.calculateTotals(this.model.inbound_cargo);
    this.inbound_cargo=this.model.inbound_cargo;
  }

  shipmentsChangeHandler(val){
    console.log(val);
    this.model.shipments=val;
  }

  calculateTotals(arr: Cargo[]) {
    function isContainer(element: Cargo, index, array) {
      return (element.is_container == true);
    };

    this.containers_qty = arr.filter(isContainer).length;
    this.gross_total=0;
    this.cargo_units_qty=0;
     arr.forEach(element => {
      
      let b= parseFloat(element.gross_weight);
      let c = parseInt(element.package_quantity)
     this.gross_total += b;
     this.cargo_units_qty += c ;


     
     
   });
  }

 

  openFileBrowser(event){

    event.preventDefault();
    let element:HTMLElement = document.getElementById('f') as HTMLElement;

    element.click();
    
  }
  onFileChange(event){
    
    console.log(event.target.files);
  }

  saveOrder(){
    console.log(this.model.shipments)
    this.orders_service.postOrder(this.model).subscribe(m=>this.model=m);
  }



 

   
}
