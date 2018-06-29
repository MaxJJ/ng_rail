import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/backend/order.service';
import { ActivatedRoute } from '@angular/router';

class MyModel{
  constructor(private id:string,private short_description:string){}
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit {

  model:any;
 
  constructor(private orders_service:OrderService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id:string;
  this.route.params.subscribe(param=>id=param.id);  
this.orders_service.getOrderById(id).subscribe(res=>this.model=res);

  }

  get diagnostic() { return JSON.stringify(this.model); };

}
