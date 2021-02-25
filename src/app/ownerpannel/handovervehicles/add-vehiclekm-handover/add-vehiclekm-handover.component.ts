import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnerService } from '../../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-vehiclekm-handover',
  templateUrl: './add-vehiclekm-handover.component.html',
  styleUrls: ['./add-vehiclekm-handover.component.css']
})
export class AddVehiclekmHandoverComponent implements OnInit {
  kilometer;
  results;
  formData = new FormData();

  constructor( public dialogRef: MatDialogRef<AddVehiclekmHandoverComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private ownerservice:OwnerService)
     {
       console.log(data);
       this.results = data;
       
      }

  ngOnInit() {
  }
  submit()
  {
    if(this.kilometer != null || this.kilometer != undefined)
    {

     
      this.formData.append("startingKM",this.kilometer);
      this.formData.append("tripId",this.results['id'])
      console.log(this.formData);
      this.ownerservice.addcurrentkilometer(this.formData).subscribe(
        data =>{
          this.dialogRef.close();
          Swal.fire(
            'Kilometer Added!',
            'Kilometer Added Successfully',
            'success'
          )
        },
        error =>{
          Swal.fire(
            'Error!',
            'Unable to Added Successfully',
            'error'
          )
        }
      )
    }
  }
}
