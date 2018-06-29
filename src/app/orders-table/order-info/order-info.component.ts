import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
order:any;
  constructor(public dialogRef: MatDialogRef<OrderInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.order=data;
     
     }

     onDialogSubmit(){
this.data="Submited";
this.dialogRef.close();
     }

    onNoClick(): void {
      
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
