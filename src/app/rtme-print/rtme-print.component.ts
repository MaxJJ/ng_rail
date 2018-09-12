import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rtme-print',
  templateUrl: './rtme-print.component.html',
  styleUrls: ['./rtme-print.component.css']
})
export class RtmePrintComponent implements OnInit {

  constructor(private titleService: Title ) { }

  ngOnInit() {

    this.titleService.setTitle('Print Factura');
  }

}
