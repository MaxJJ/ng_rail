import { Component, OnInit, Input, setTestabilityGetter } from '@angular/core';
import { Cargo, Factura } from '../../../services/interfaces';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CargoDialogComponent } from '../../dialogs/cargo-dialog/cargo-dialog.component';
import { isNullOrUndefined } from 'util';
import { FillBillService } from '../../../services/output/build_xml/fill-bill.service';

@Component({
  selector: 'cargo-ex-panel',
  templateUrl: './cargo-ex-panel.component.html',
  styleUrls: ['./cargo-ex-panel.component.css']
})
export class CargoExPanelComponent implements OnInit {

shipment_id;
cargo:Cargo[];
title = {'places':0,'nett':0,'gross':0};
displayedColumns: string[] = ['description', 'tnved','packages'];
choosed_cargo_item:Cargo;

  constructor(private service:CargoService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private fbs:FillBillService) { }

  ngOnInit() {
this.route.params.subscribe(prms=>{
  this.shipment_id=prms['sh_id'];
  this.getShipmentsCargo();
  
});
    
  }

  editCargoItem(id){
   this.service.getCargoById(id).subscribe(c=>{
    c.shipment = this.shipment_id;
     this.choosed_cargo_item=c;
    console.log(this.choosed_cargo_item);
    this.startDialog(this.choosed_cargo_item);
    });

  }

  startDialog(data){
    const dialogRef = this.dialog.open(CargoDialogComponent, {
      width: '320px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getShipmentsCargo();
    });


  }


  getShipmentsCargo(){

    this.service.getShipmentsCargo(this.shipment_id).subscribe(c=>{
      this.cargo=c;
      this.setTitle(); 
    })
  }

  chooseItemHandler(row){
this.startDialog(row);
  }

  setTitle(){
    let nett = 0;
    let pcks = 0;
    let gross = 0;
    this.cargo.forEach((v,i,a)=>{
      nett+=v.nett_weight;
      pcks+=v.package_quantity;
      gross+=v.gross_weight;
    })
    this.title.places=pcks;
    this.title.nett = nett;
    this.title.gross = gross;
  }

  checkFb(){
    let f:Factura = {};
    f.cargo=this.cargo;
    this.fbs.createFactura(f);
  }

}
