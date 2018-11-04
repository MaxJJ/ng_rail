import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../services/interfaces';

@Component({
  selector: 'rwb-consignor',
  templateUrl: './rwb-consignor.component.html',
  styleUrls: ['./rwb-consignor.component.css']
})
export class RwbConsignorComponent implements OnInit {
@Input()
consignor:Person
  constructor() { }

  ngOnInit() {
  }

}
