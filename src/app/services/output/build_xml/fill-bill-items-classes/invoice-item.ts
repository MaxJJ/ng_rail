import { Factura, Cargo } from "../../../interfaces";
import { isNullOrUndefined } from "util";
import { InvoiceGoodsItem } from "./invoice-goods-item";

export class InvoiceItem {
  
    CurrencyCode ='';
    CurrencyNumber ='';
    CurrencyName ='';
    GrossWeightQuantity =0;
    NetWeightQuantity =0;
    GCost =0;
    OtherCharges;
    OtherChargesName ='';
    TotalCost;
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
    Seler_OKPO = '';
    Seler_INN = '';
    Seler_Name = '';
    Seler_Phone = '';
    Seler_PostalCode = '';
    Seler_CountryCode = '';
    Seler_CountryName = '';
    Seler_Region = '';
    Seler_City = '';
    Seler_StreetHouse = '';
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
    Consignor_RailCode;
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
    Consignee_RailCode;
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
    RegDate;
    DopData1='';
    DopData2='';
    ContractName='';
    ContractNum='ПО ИНВОЙСУ';
    PlacesQuantity=0;
  
    constructor() {}

  
     private createGoodsItem(c:Cargo[]):InvoiceGoodsItem[]{
        let goods:InvoiceGoodsItem[] = [];
        c.forEach((v,i,a)=>{
         let g=new InvoiceGoodsItem();
         g.populate(v);
         goods.push(g);
        });
        return goods;
      }

      public populate(f:Factura,cargo:Cargo[]){
        
        let goods= isNullOrUndefined(cargo) ? [new InvoiceGoodsItem,] : this.createGoodsItem(cargo);
        this.INVOICEGoods={'$':{'nodetype':"table"},'INVOICEGOODS_ITEM':goods} ;

        this.Carriage = {'$':{'nodetype':"table"}, 'CARRIAGE_ITEM':[{'CarriageId':'000000'},]};

        
        this.Container = {'$':{'nodetype':"table"}, 'CONTAINER_ITEM':[{'ContainerID':'XYZU1231230'},]};

        this.InvoiceName=f.doc_name;
        this.RegNum=f.name;
        this.RegDate=f.date;
        this.DopData1='';
        this.DopData2=f.footer;
        this.CurrencyCode =f.currency;
        this.CurrencyNumber ='';
        this.CurrencyName ='';
        this.GrossWeightQuantity =f.gross;
        this.NetWeightQuantity =f.nett;
        this.GCost =f.total_amount;
        this.OtherCharges ='';
        this.OtherChargesName ='';
        this.TotalCost = '';

        this.Buyer_OKPO = f.buyer.okpo;
        this.Buyer_INN = f.buyer.inn;
        this.Buyer_Name = f.buyer.name;
        this.Buyer_Phone = f.buyer.phone;
        this.Buyer_PostalCode = '';
        this.Buyer_CountryCode = '';
        this.Buyer_CountryName = '';
        this.Buyer_Region = f.buyer.region;
        this.Buyer_City = f.buyer.city;
        this.Buyer_StreetHouse = f.buyer.street_house;

        this.Seler_OKPO = f.seller.okpo;
        this.Seler_INN = f.seller.inn;
        this.Seler_Name = f.seller.name;
        this.Seler_Phone = f.seller.phone;
        this.Seler_PostalCode = '';
        this.Seler_CountryCode = '';
        this.Seler_CountryName = '';
        this.Seler_Region = f.seller.region;
        this.Seler_City = f.seller.city;
        this.Seler_StreetHouse = f.seller.street_house;

        this.Consignor_OKPO = f.consignor.okpo;
        this.Consignor_INN = f.consignor.inn;
        this.Consignor_Name = f.consignor.name;
        this.Consignor_Phone = f.consignor.phone;
        this.Consignor_PostalCode = '';
        this.Consignor_CountryCode = '';
        this.Consignor_CountryName = '';
        this.Consignor_Region = f.consignor.region;
        this.Consignor_City = f.consignor.city;
        this.Consignor_StreetHouse = f.consignor.street_house;
        this.Consignor_RailCode = f.consignor.rail_code;

        this.Consignee_OKPO = f.consignee.okpo;
        this.Consignee_INN = f.consignee.inn;
        this.Consignee_Name = f.consignee.name;
        this.Consignee_Phone = f.consignee.phone;
        this.Consignee_PostalCode = '';
        this.Consignee_CountryCode = '';
        this.Consignee_CountryName = '';
        this.Consignee_Region = f.consignee.region;
        this.Consignee_City = f.consignee.city;
        this.Consignee_StreetHouse = f.consignee.street_house;
        this.Consignee_RailCode = f.consignee.rail_code;

        this.DeliveryPlace=f.delivery_terms_place;
        this.DeliveryTermsNumericCode='';
        this.DeliveryTermsStringCode=f.delivery_terms_str_code;
        this.TermsDescription='';

      }


    }