import { Component, OnInit, Input } from '@angular/core';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { Cargo } from '../../../services/interfaces';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { OrderInboundCargoComponent } from '../../dialogs/order-inbound-cargo/order-inbound-cargo.component';
import { CargoModalComponent } from '../../dialogs/cargo/cargo-modal/cargo-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cargo-combo',
  templateUrl: './cargo-combo.component.html',
  styleUrls: ['./cargo-combo.component.css']
})
export class CargoComboComponent implements OnInit {

  
  cargo: Cargo[];

  item: Cargo;
  factura_id:any;
  addDisabled: boolean = false;
  dataSource: MatTableDataSource<Cargo>;
  columns: string[] = ['num', 'tnved', 'units', 'packages', 'nett', 'gross', 'price', 'total',]

  constructor(private cargo_service: CargoService, 
              private dlg: MatDialog,
              private route:ActivatedRoute,
              public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.route.data.subscribe((res)=>{
      this.cargo=res.data.cargo;
      this.dataSource = new MatTableDataSource(this.cargo);
    });
    
    this.route.params.subscribe(p=>this.factura_id=p['factura_id']);
  };

  createItem() {


    this.cargo_service.getCargoById(0,this.factura_id).subscribe(c => {
      this.item = c;

      this.addDisabled = true;
      this.dialog();
    });

  }

  saveCargo(){

    this.cargo_service.saveFacturasCargo(this.factura_id,this.cargo).subscribe(cargo=>{
      this.cargo=cargo;
      this.dataSource.data=cargo;
      this.snackBar.open("Cargo saved !!!");
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 800);
    })
  }

  dialog() {
    let dialogRef = this.dlg.open(CargoModalComponent, {
      height: '800px',
      width: '450px',
      data: {item:this.item,cargo:this.cargo,factura_id:this.factura_id},
    });

    dialogRef.afterClosed().subscribe(result => {
   
      this.dataSource.data = result.cargo;
      this.addDisabled = false;
    });
  }

  unitHandler(val) {
    this.item.unit = val;
  }
  packageHandler(val) {
    this.item.package = val;
  }

  editItem(crg: Cargo) {
    this.item = crg;
    this.dialog();
  }
  submit() {
    let check = this.cargo.indexOf(this.item);
    if (check < 0) {
      this.cargo.push(this.item);
    }
    this.addDisabled = false;
  }
  getTotalCost(){
    let total:number=0;
    this.cargo.forEach((v,i,a)=>{
      
      total=total*1+v.total*1;
    });
    return total;
  }
  getTotalGross(){
    let total:number=0;
    this.cargo.forEach((v,i,a)=>{
      
      total=total*1+v.gross_weight*1;
    });
    return total;
  }
  getTotalNett(){
    let total:number=0;
    this.cargo.forEach((v,i,a)=>{
      
      total=total*1+v.nett_weight*1;
    });
    return total;
  }
  getTotalPackages(){
    let total:number=0;
    this.cargo.forEach((v,i,a)=>{
      
      total=total*1+v.package_quantity*1;
    });
    return total;
  }



}
