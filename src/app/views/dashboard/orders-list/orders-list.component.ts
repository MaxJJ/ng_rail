import { Component, OnInit, Inject, Injector } from '@angular/core';
import { ORDER, DASHBOARD_DATA, DashData } from '../../../services/portals/tokens';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  data: any;
  constructor(@Inject(DASHBOARD_DATA) public d: DashData) { }

  ngOnInit() {
    this.data = this.d;
  }

  testclick(item) {
    this.d.out_data.next(item);
  }
}
