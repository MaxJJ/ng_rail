import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderService } from '../../services/backend/order.service';
import { Order } from '../../services/interfaces';

export interface SearchResult {
  type: string,
  list: any[]
}

const SHOW_OPTIONS = [
  { 'value': 'orders', 'label': 'ORDERS' },
  { 'value': 'shipments', 'label': 'SHIPMENTS' },
]

const FILTER_ORDERS_OPTIONS = [
  { 'value': 'all', 'label': 'ALL ORDERS' },
  { 'value': 'in_work', 'label': 'ORDERS IN WORK' },
]

const FILTER_SHIPMENTS_OPTIONS = [
  { 'value': 'all', 'label': 'ALL SHIPMENTS' },
]

@Component({
  selector: 'app-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.css']
})
export class SearchRowComponent implements OnInit {

  show: FormControl = new FormControl('');
  filter: FormControl = new FormControl('');
  like: FormControl = new FormControl('');

  disabled: boolean = true;

  showOptions = SHOW_OPTIONS;
  filterOptions = [];

  search = {
    'show': '',
    'filter': '',
    'like': ''
  };

  res: any;

  @Output()
  result: EventEmitter<SearchResult> = new EventEmitter<SearchResult>();

  constructor(private orders_service: OrderService) { }

  ngOnInit() {
    this._initialState();
    this.show.valueChanges.subscribe(v => {
      this.search.show = v;

    });
    this.filter.valueChanges.subscribe(v => {
      this.search.filter = v;

    });
  }


  onShowSelected() {
    this._clean();
    this.filter.enable();
    if (this.search.show == 'orders') { this.filterOptions = FILTER_ORDERS_OPTIONS };
    if (this.search.show == 'shipments') { this.filterOptions = FILTER_SHIPMENTS_OPTIONS };

  }

  onFilterSelected() {
    this.disabled = false;
  }

  private _clean() {


    this.filter.setValue('');
    this.like.setValue('');

  }


  private _initialState() {
    this.show.enable();
    this.filter.disable();
    this.like.disable();
    this.disabled = true;
  }

  fetch() {
    let qry: string[] = [this.search.show, this.search.filter, this.search.like];

    if (this._compare(qry, 'orders', 'all', '')) { this._allOrders() };
  }


  private _compare(arr: string[], v1, v2, v3): boolean {

    return arr.includes(v1) && arr.includes(v2) && arr.includes(v3);

  }
  private _allOrders() {

    this.orders_service.getOrders().subscribe(v => {
      let res: SearchResult = {
        'type': this.search.show,
        'list': v
      }
      this.result.emit(res);

    });


  }

}
