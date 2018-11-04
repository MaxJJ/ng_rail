import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../services/interfaces';

@Component({
  selector: 'rwb-consignee',
  templateUrl: './rwb-consignee.component.html',
  styleUrls: ['./rwb-consignee.component.css']
})
export class RwbConsigneeComponent implements OnInit {
  @Input()
  consignee: Person;
  constructor() { }

  ngOnInit() {
  }

}
