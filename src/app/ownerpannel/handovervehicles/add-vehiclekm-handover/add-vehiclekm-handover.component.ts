import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-vehiclekm-handover',
  templateUrl: './add-vehiclekm-handover.component.html',
  styleUrls: ['./add-vehiclekm-handover.component.css']
})
export class AddVehiclekmHandoverComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddVehiclekmHandoverComponent>,
    @Inject(MAT_DIALOG_DATA) public data)
     {
       console.log(data);
       
      }

  ngOnInit() {
  }

}
