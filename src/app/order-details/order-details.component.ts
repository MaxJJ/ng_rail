import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/backend/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order, Cargo } from '../services/interfaces';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit {

  model:any;
  
  
  public get inbound_cargo() : Cargo[] {
    return this.model.inbound_cargo;
  }
  
  constructor(private orders_service:OrderService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id:string;
  this.route.params.subscribe(param=>id=param.id);  
this.orders_service.getOrderById(id).subscribe(res=>this.model=res);

  }

  inboundCargoChange(e) {
    console.log(e);
  }
}
