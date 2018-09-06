import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Cargo, Unit, Package } from '../../../services/interfaces';
import { FormGroup, FormControl } from '@angular/forms';
import { CargoService } from '../../../services/backend/cargo/cargo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cargo-dialog',
  templateUrl: './cargo-dialog.component.html',
  styleUrls: ['./cargo-dialog.component.css']
})
export class CargoDialogComponent implements OnInit {
  sh_id: number;
  show_copy: boolean = false;
  filtered_cargo: Observable<Cargo[]>;
  descriptionSearch_fc: FormControl = new FormControl('');

  units:Unit[];
  packages:Package[];

  constructor(public dialogRef: MatDialogRef<CargoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cargo,
    private service: CargoService) { }

  ngOnInit() {
    this.descriptionSearch_fc.valueChanges.subscribe(v => this.filterByDescription(v));
    this.sh_id = this.data.shipment;
  }

  saveCargoItem() {

    this.service.saveCargo(this.data).subscribe(c => {
      this.data = c;
      this.dialogRef.close();
      
    });
  }

  deleteCargoItem() {
    this.service.deleteCargo(this.data).subscribe(c => {
      this.dialogRef.close({ 'cargo_item': null, 'result': -1 })
    })
  }

  copyCargoItem() {

    this.service.getCargoById(0).subscribe(new_item => {
      let id = new_item.id;
      new_item = this.data;
      new_item.id = id;
      new_item.shipment = this.sh_id;
      this.data = new_item;
      this.show_copy = true;

    });
  }

  filterByDescription(qry: string) {
    if (qry.length > 2) {
      this.filtered_cargo = this.service.searchCargoByDescription(qry);
    }

  }

  cargoSearchChange(ev) {

    this.data = ev.option.value;
    this.data.shipment = this.sh_id;

  }

  unitNameHandler(val:Unit){
    this.data.unit=val;
  }

  packageNameHandler(val:Package){
    this.data.package = val;
  }

}
