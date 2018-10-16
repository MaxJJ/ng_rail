import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/backend/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-side-menu',
  templateUrl: './orders-side-menu.component.html',
  styleUrls: ['./orders-side-menu.component.css']
})
export class OrdersSideMenuComponent implements OnInit {

  constructor(private service:OrderService,private router:Router) { }

  ngOnInit() {
  }

  createOrder(){
    this.service.getNewOrder().subscribe(order=>{
      this.router.navigate(['order',order.id]);
    });
  }
}
