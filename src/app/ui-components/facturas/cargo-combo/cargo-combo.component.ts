import { Component, OnInit, Input } from '@angular/core';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { Cargo } from '../../../services/interfaces';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { OrderInboundCargoComponent } from '../../dialogs/order-inbound-cargo/order-inbound-cargo.component';
import { CargoModalComponent } from '../../dialogs/cargo/cargo-modal/cargo-modal.component';

@Component({
  selector: 'cargo-combo',
  templateUrl: './cargo-combo.component.html',
  styleUrls: ['./cargo-combo.component.css']
})
export class CargoComboComponent implements OnInit {

  @Input()
  cargo: Cargo[];
  item: Cargo;

  addDisabled: boolean = false;
  dataSource: MatTableDataSource<Cargo>;
  columns: string[] = ['num', 'tnved', 'units', 'packages', 'nett', 'gross', 'price', 'total',]

  constructor(private cargo_service: CargoService, private dlg: MatDialog) { }
  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.cargo);
  }

  createItem() {


    this.cargo_service.getCargoById(0).subscribe(c => {
      this.item = c;

      this.addDisabled = true;
      this.dialog();
    });

  }

  dialog() {
    let dialogRef = this.dlg.open(CargoModalComponent, {
      height: '800px',
      width: '450px',
      data: {item:this.item,cargo:this.cargo},
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
