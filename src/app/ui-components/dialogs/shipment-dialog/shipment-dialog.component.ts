import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component';
import { Shipment, Container } from '../../../services/interfaces';
import { FormGroup, FormControl } from '@angular/forms';
import { ShipmentsService } from '../../../services/backend/shipments/shipments.service';
import { StateService } from '../../../services/state/state.service';

@Component({
  selector: 'app-shipment-dialog',
  templateUrl: './shipment-dialog.component.html',
  styleUrls: ['./shipment-dialog.component.css']
})
export class ShipmentDialogComponent implements OnInit {

  new_shipment: Shipment;

  fg: FormGroup = new FormGroup({
    name: new FormControl('not defined'),

    is_container: new FormControl(true),
    container_name: new FormControl(''),
    container_type: new FormControl(''),
    container_payload: new FormControl(''),
    container_tare: new FormControl(''),



  });

  constructor(public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private service: ShipmentsService,
    private state: StateService
  ) { }

  ngOnInit() {
    let order_id = this.data;
    this.service.createNewShipment(order_id).subscribe(shp => {

      this.new_shipment = shp;
      this.new_shipment.container = <Container>{ id: 0, };
    });




    this.fg.get('name').valueChanges.subscribe(val => this.new_shipment.name = val);
    this.fg.get('is_container').valueChanges.subscribe(val => {
      if (val) {
        this.new_shipment.container = <Container>{ id: 0, };
        this.new_shipment.cargo_is_general = false;
      } else {
        this.new_shipment.container = null;
        this.new_shipment.cargo_is_general = true;
      }

    });
    this.fg.get('container_name').valueChanges.subscribe(val => this.new_shipment.container.name = val);
    this.fg.get('container_type').valueChanges.subscribe(val => this.new_shipment.container.containers_type = val);
    this.fg.get('container_payload').valueChanges.subscribe(val => this.new_shipment.container.payload = val);
    this.fg.get('container_tare').valueChanges.subscribe(val => this.new_shipment.container.tare = val);

  }

  onSubmit() {
    if (this.new_shipment) {
      this.service.saveShipment(this.new_shipment).subscribe(shp => {
        this.dialogRef.close(shp);
      });

    }
  }

}
