import { Injectable } from '@angular/core';
import {Builder,Parser,OptionsV2} from 'xml2js';
import { Cargo, Factura } from '../../../interfaces/interfaces';
import { saveAs } from 'file-saver/dist/FileSaver';
import { isNullOrUndefined } from 'util';
import { CargoService } from '../../backend/cargo/cargo.service';
import { ShipmentsService } from '../../backend/shipments/shipments.service';
import { InvoiceGoodsItem } from './fill-bill-items-classes/invoice-goods-item';
import { InvoiceItem } from './fill-bill-items-classes/invoice-item';

const factura_root_builder=new Builder({rootName:'INVOICE'});
const factura_item_builder=new Builder({rootName:'INVOICE_ITEM',headless:true});
const factura_goods_root_builder=new Builder({rootName:'INVOICEGoods',headless:true});
const factura_goods_item_builder=new Builder({rootName:'INVOICEGOODS_ITEM',headless:true});
const factura_carriage_root_builder=new Builder({rootName:'Carriage',headless:true});
const factura_carriage_item_builder=new Builder({rootName:'CARRIAGE_ITEM',headless:true});









@Injectable({
  providedIn: 'root'
})
export class FillBillService {


  constructor(private cargo_service:CargoService,private shipment_service:ShipmentsService) { }



  createFactura(f:Factura,c:Cargo[]){

let ob = new InvoiceItem();

ob.populate(f,c);
let ii={'$':{'ctmtd:CfgName':"invoice.cfg.xml",'xmlns:ctmtd':"http://rail.ctm.ru/TD/Document"}, 'INVOICE_ITEM':[ob,]};
let x = factura_root_builder.buildObject(ii);
console.log(x);
let blob = new Blob([x], {type: "text/plain;charset=utf-8"});

// let fs = new FileSaver()
saveAs(blob, "test.td.xml");
  }
 
}

// <INVOICE ctmtd:CfgName="invoice.cfg.xml" xmlns:ctmtd="http://rail.ctm.ru/TD/Document">
//  <INVOICE_ITEM>