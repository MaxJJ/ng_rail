import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InboundDoc } from '../../../services/interfaces';
import { OrderService } from '../../../services/backend/order.service';
import { ActivatedRoute } from '@angular/router';
import { emit } from 'cluster';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'inbound-docs',
  templateUrl: './inbound-docs.component.html',
  styleUrls: ['./inbound-docs.component.css']
})
export class InboundDocsComponent implements OnInit {

  @Input()
  indocs: InboundDoc[];
  order_id: number;

  // doc_type = new FormControl('BL');
  // nr = new FormControl('');
  // places = new FormControl('');
  // gross = new FormControl('');

  @Output()
  new_indocs: EventEmitter<InboundDoc[]> = new EventEmitter<InboundDoc[]>();


  constructor(private service: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.order_id = p.id);

  }

  addInboundDoc() {
    this.service.createInboundDoc(this.order_id).subscribe(dcs => this.indocs = dcs);
    this.emit();
  }

  deleteInboundDoc(d: InboundDoc) {
    this.service.deleteInboundDoc(this.order_id, d.id).subscribe(dcs => this.indocs = dcs);
    this.emit();
  }

  private emit() {

    this.new_indocs.emit(this.indocs);
  }

}
