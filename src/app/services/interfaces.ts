
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
  id: number;
  name: string;
  from_order: string;
  consignor: string;
  consignee: string;
  facturas: any;
}

export interface Package{
  package_name_rus?:string;
  package_name_eng?:string;
  package_code?:string;
}
export interface Unit{
  unit_name_full?:string;
  unit_name_short?:string;
  unit_code?:string;
}


export interface Cargo {
  id?:number;
  is_container?: boolean;
  container_tare?: number;
  description?: string;
  tnved_code?: string;
  tved_description?: string;
  gng_code?: string;
  gng_description?: string;
  etsng_code?: string;
  package?: Package;
  package_quantity?: number;
  unit?: Unit;
  unit_quantity?: number;
  nett_weight?: number;
  gross_weight?: number;
}

export interface Person{

  name:string;
  inn;string;
  rail_code:string;
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

}