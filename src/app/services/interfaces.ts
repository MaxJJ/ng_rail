
export interface Place{
    id:number;
    place_name:string;
    place_type:string;
    place_code:string;
    is_border:boolean;
    road_name:string;
    road_name_abbr:string;
    road_code:string;
    road_operator_name:string;
  
  }

  export interface Shipment{
    id:number;
    name:string;
    from_order:string;
    consignor:string;
    consignee:string;
    facturas:any;
  }
  
  export interface Order{
    id?:number;
    customer?:string;
    created?:string;
    will_arrive?:string;
    is_closed?:boolean;
    short_description?:string;
    description?:string;
    dispatch_place?:Place;
    destination_place?:Place;
   
    shipments?:Shipment[];
  
  }