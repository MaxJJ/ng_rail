

let API:string = "http://localhost:8000/";

enum URL_LIST{
  ORDERS='orders',
  PLACES='places'

}

export class Urls{
  api=API;
  

  
  public get orders() : string {
    return this.api+URL_LIST.ORDERS;
  }

  
  public get places() : string {
    return this.api+URL_LIST.PLACES;
  }
  
  
}