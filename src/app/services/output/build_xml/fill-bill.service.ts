import { Injectable } from '@angular/core';
import {Builder,Parser,OptionsV2} from 'xml2js';
import { Cargo, Factura } from '../../interfaces';
import { saveAs } from 'file-saver/FileSaver';
import { isNullOrUndefined } from 'util';
import { CargoService } from '../../backend/cargo/cargo.service';
import { ShipmentsService } from '../../backend/shipments/shipments.service';

const factura_root_builder=new Builder({rootName:'INVOICE'});
const factura_item_builder=new Builder({rootName:'INVOICE_ITEM',headless:true});
const factura_goods_root_builder=new Builder({rootName:'INVOICEGoods',headless:true});
const factura_goods_item_builder=new Builder({rootName:'INVOICEGOODS_ITEM',headless:true});
const factura_carriage_root_builder=new Builder({rootName:'Carriage',headless:true});
const factura_carriage_item_builder=new Builder({rootName:'CARRIAGE_ITEM',headless:true});

class InvoiceGoodsItem {

  GoodsCode='';
  GoodsDescription='';
  GoodsQuantity=0;
  MeasureUnitQualifierName='';
  MeasureUnitQualifierCode='';
  PlacesQuantity='';
  PlacesDescription='';
  PlacesCode='';
  GrossWeightQuantity=0;
  kg='';
  kg2='';
  kgNetWeightQuantity=0;
  Price=0;
  TotalCost=0;
  constructor() {
    
  }
}

class CarriageItem {
  CarriageId='';

  constructor() {
  }
}
class ContainerItem {
  ContainerID='';

  constructor() {
  }
}

class InvoiceItem {
  
  CurrencyCode ='';
  CurrencyNumber ='';
  CurrencyName ='';
  GrossWeightQuantity =0;
  NetWeightQuantity =0;
  GCost =0;
  OtherCharges =0;
  OtherChargesName ='';
  TotalCost = 0;
  Buyer_OKPO = '';
  Buyer_INN = '';
  Buyer_Name = '';
  Buyer_Phone = '';
  Buyer_PostalCode = '';
  Buyer_CountryCode = '';
  Buyer_CountryName = '';
  Buyer_Region = '';
  Buyer_City = '';
  Buyer_StreetHouse = '';
  Seller_OKPO = '';
  Seller_INN = '';
  Seller_Name = '';
  Seller_Phone = '';
  Seller_PostalCode = '';
  Seller_CountryCode = '';
  Seller_CountryName = '';
  Seller_Region = '';
  Seller_City = '';
  Seller_StreetHouse = '';
  Consignor_OKPO = '';
  Consignor_INN = '';
  Consignor_Name = '';
  Consignor_Phone = '';
  Consignor_PostalCode = '';
  Consignor_CountryCode = '';
  Consignor_CountryName = '';
  Consignor_Region = '';
  Consignor_City = '';
  Consignor_StreetHouse = '';
  Consignee_OKPO = '';
  Consignee_INN = '';
  Consignee_Name = '';
  Consignee_Phone = '';
  Consignee_PostalCode = '';
  Consignee_CountryCode = '';
  Consignee_CountryName = '';
  Consignee_Region = '';
  Consignee_City = '';
  Consignee_StreetHouse = '';
  INVOICEGoods = {};
  Carriage={};
  Container={};
  DeliveryPlace='';
  DeliveryTermsNumericCode='';
  DeliveryTermsStringCode='';
  TermsDescription='';
  SMGS='';
  InvoiceName='СЧЕТ-ФАКТУРА';
  RegNum='';
  RegDate=new Date().toLocaleDateString();
  DopData1='';
  DopData2='';
  ContractName='';
  ContractNum='ПО ИНВОЙСУ';
  PlacesQuantity=0;

  constructor(f:Factura) {
    let goods:InvoiceGoodsItem[];
    if(!isNullOrUndefined(f.cargo)){
      goods=this.createGoodsItem(f.cargo);
    }else{
      goods =[new InvoiceGoodsItem,]
    }

    
    this.INVOICEGoods={'$':{'nodetype':"table"},'INVOICEGOODS_ITEM':goods} ;
    this.Carriage = {'$':{'nodetype':"table"}, 'CARRIAGE_ITEM':'carriage'};
    this.Container = {'$':{'nodetype':"table"}, 'CONTAINER_ITEM':'container'};
    }

    createGoodsItem(c:Cargo[]):InvoiceGoodsItem[]{
      let goods:InvoiceGoodsItem[] = [];
      c.forEach((v,i,a)=>{
       let g=new InvoiceGoodsItem();
       g.GoodsCode=v.tnved_code;
       g.GoodsDescription=v.description;
       g.GoodsQuantity=v.unit_quantity;
       g.GrossWeightQuantity=v.gross_weight;
       g.kg='kg';
       g.kg2='Кг.';
       g.kgNetWeightQuantity=v.nett_weight;
       g.MeasureUnitQualifierCode=v.unit.code;
       g.MeasureUnitQualifierName=v.unit.name_short;
       g.PlacesCode=v.package.package_code;
       g.PlacesDescription=v.package.package_name_rus;
       g.PlacesQuantity=v.package_quantity;
       g.Price= 0;
       g.TotalCost= 0;

       goods.push(g);
      });
      return goods;
    }
  }


@Injectable({
  providedIn: 'root'
})
export class FillBillService {


  constructor(private cargo_service:CargoService,private shipment_service:ShipmentsService) { }



  createFactura(f:Factura){

let ob = new InvoiceItem(f);
let x = factura_root_builder.buildObject(ob);
console.log(x);
let blob = new Blob([x], {type: "text/plain;charset=utf-8"});

// let fs = new FileSaver()
saveAs(blob, "test.td.xml");
  }
 
}
