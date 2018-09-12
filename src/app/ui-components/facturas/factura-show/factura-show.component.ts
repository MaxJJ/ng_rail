import { Component, OnInit, Input } from '@angular/core';
import { Factura } from '../../../services/interfaces';

@Component({
  selector: 'factura-show',
  templateUrl: './factura-show.component.html',
  styleUrls: ['./factura-show.component.css']
})
export class FacturaShowComponent implements OnInit {

  @Input()
  factura:Factura;

  constructor() { }

  ngOnInit() {
    this.factura.name="TST-256";
  }

}
