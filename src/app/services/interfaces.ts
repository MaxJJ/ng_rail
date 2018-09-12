import { Moment } from "moment";
import { Container } from "@angular/compiler/src/i18n/i18n_ast";

export interface Place {
  id: number;
  place_name: string;
  place_type: string;
  place_code: string;
  is_border: boolean;
  road_name: string;
  road_name_abbr: string;
  road_code: string;
  road_operator_name: string;

}

export interface Shipment {
  id?: number;
  name?: string;
  description?: string;
  order?: number;
  contract?:string;
  cargo_is_general?:boolean;
  container?:Container;
  consignor?: Person;
  consignee?: Person;
  seller?:any;
  buyer?:any;
  facturas?: any;
  cargo?:Cargo[];
  rw_bill?:any;
   
}

export interface Package{
  package_name_rus?:string;
  package_name_eng?:string;
  package_code?:string;
  print_name?:string;
}
export interface Unit{
  name_full?:string;
  name_full_eng?:string;
  name_short?:string;
  name_short_eng?:string;
  code?:string;


}


export interface Cargo {
  id?:number;
  shipment?:number;
  is_container?: boolean;
  container_tare?: number;
  description?: string;
  tnved_code?: string;
  tved_description?: string;
  gng_code?: string;
  gng_description?: string;
  etsng_code?: string;
  package?: Package;
  package_quantity?: any;
  unit?: Unit;
  unit_quantity?: number;
  nett_weight?: number;
  gross_weight?: any;
}

export interface Person{
  id?: number;
  name?:string;
  inn?:string;
  okpo?:string;
  phone?:string;
  postal_code?:string;
  region?:string;
  city?:string;
  street_house?;string;
  rail_code?:string;
  country?:{name:string,country_code:string};
}

export interface Order {
  id?: number;
  customer?: string;
  created?: string;
  will_arrive?: string;
  is_closed?: boolean;
  short_description?: string;
  description?: string;
  dispatch_place?: Place;
  destination_place?: Place;
  shipments?: Shipment[];
  consignor:Person;
  consignee:Person;
  inbound_bill:string;
  transit_or_export:string;
  inbound_cargo:Cargo[];
  total_inbound_places:number;
  total_inbound_gross:number;
  comments:OrderComment[];

}

export interface OrderComment{
  id?: number;
  created?:string;
  comment?:string;
  order?:number;
}

export interface Factura{
  doc_name?:string;
  name?:string;
  date?:Date;
  buyer?:Person;
  seller?:Person;
  consignee?:Person;
  consignor?:Person;
  delivery_terms_str_code?:any;
  delivery_terms_place?:any;
  cargo?:Cargo[];
  places?:number;
  pcs?:number;
  nett?:number;
  gross?:number;
  price?:number;
  total_amount?:number;
  currency?:string;
  footer?:any;
  sign?:string;


}