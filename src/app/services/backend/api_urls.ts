

let API:string = "/api/";

enum URL_LIST{
  ORDERS='orders',
  PLACES='places',
  NEW_CARGO='getnewcargo',
  DELETE_CARGO='deletecargo/',
  CREATE_SHIPMENT='shipments/create',
  SHIPMENT='shipments/',
}

export class Urls{
  api=API;
  

  
  public get orders() : string {
    return this.api+URL_LIST.ORDERS;
  }
  public get new_order() : string {
    return this.api+URL_LIST.ORDERS+'/new';
  }
  
  public get places() : string {
    return this.api+URL_LIST.PLACES;
  }
  
  
  public get newcargo() : string {
    return this.api+URL_LIST.NEW_CARGO
  }
  
  
  public get deletecargo() : string {
    return this.api+URL_LIST.DELETE_CARGO;
  }

  
  public get create_shipment() : string {
    return this.api+URL_LIST.CREATE_SHIPMENT;
  }
  
  
  public get shipment() : string {
    return this.api+URL_LIST.SHIPMENT
  }
  

  
}