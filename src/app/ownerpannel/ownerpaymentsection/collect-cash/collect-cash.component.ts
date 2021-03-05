import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnerService } from '../../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-collect-cash',
  templateUrl: './collect-cash.component.html',
  styleUrls: ['./collect-cash.component.css']
})
export class CollectCashComponent implements OnInit {

  tripid;
  results;
  formData = new FormData();
  customerName;
  customerMobile;
  vehicleRent;
  totalKM
  constructor(  public dialogRef: MatDialogRef<CollectCashComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private OwnerService:OwnerService) 
    {
      console.log(data.id);
      this.tripid = data.id;
     }

  ngOnInit() {
    this.getpaymentdetailsbyTripIdtripid();
  }
  getpaymentdetailsbyTripIdtripid()
  {
    this.OwnerService.gettripdetailsbyid(this.tripid).subscribe(
      data =>{
        console.log(data);
        this.results = data;
        this.customerName = this.results['customerName'];
        this.totalKM = this.results['totalKM'];
        this.customerMobile= this.results['customerMobile'];
        this.vehicleRent= this.results['vehicleRent'];
      },
      error=>{

      }
    )
  }
  collectcash()
  {
    this.formData.append('paymentMode','2');
    this.formData.append('tripId',this.tripid);
    if(this.results['driverCharge'] !=0)
    {
      this.formData.append('driverCharge',this.results['driverCharge']);

    }
    if(this.results['vehicleRent'] !=0)
    {
      this.formData.append('vehicleRent',this.results['vehicleRent']);

    }
    if(this.results['minimumPaymentDue'] !=0)
    {

    this.formData.append('minimumPaymentDue',this.results['minimumPaymentDue']);
    }
    // console.log(this.formData);
    
    this.OwnerService.savePayments(this.formData).subscribe(
      data =>{

        this.dialogRef.close();
        Swal.fire(
          'Amount Collected',
          'Amount Collcted Successfully',
          'success'
        )
        
      },
      error =>{
        Swal.fire(
          'Unable to Collect Cash!',
          'Unable Collct Amount Successfully',
          'error'
        )
        this.formData.delete;
      }
    )
    
  }
}
