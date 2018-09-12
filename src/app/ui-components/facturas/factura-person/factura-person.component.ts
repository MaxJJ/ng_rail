import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../services/interfaces';

@Component({
  selector: 'factura-person',
  templateUrl: './factura-person.component.html',
  styleUrls: ['./factura-person.component.css']
})
export class FacturaPersonComponent implements OnInit {

@Input()
placeholder:string;
@Input()
person:Person;

  constructor() { }

  ngOnInit() {
  }

}
