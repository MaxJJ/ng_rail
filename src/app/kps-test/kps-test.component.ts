import { Component, OnInit } from '@angular/core';
import { KpsService } from '../services/kps/kps.service';
import { Client } from 'ngx-soap';

@Component({
  selector: 'app-kps-test',
  templateUrl: './kps-test.component.html',
  styleUrls: ['./kps-test.component.css']
})
export class KpsTestComponent implements OnInit {
  login: Client;
  constructor() { }

  ngOnInit() {

  }

}
