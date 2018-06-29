import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Place } from '../../services/interfaces';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  place:Place;
  constructor(public dialogRef: MatDialogRef<PlaceDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.place=data;
     }

  ngOnInit() {
  }

}
