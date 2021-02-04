import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  customerName:any;
  cId:any;
  results:any;
  startingLocation;
  destinationLocation: any;
  requestedDate:any;
  companyName;
  model: any;
  numberPlate: any;
  rentPerDay: any;
  approvalstatus:any;
  formData = new FormData();

  constructor(private activaterouter:ActivatedRoute,private router:Router,
    private ownerservice:OwnerService) { }

  ngOnInit() {
    this.activaterouter.params.subscribe(params =>{
      console.log(params.id,params.name);
      this.customerName = params.name;
      this.cId = params.id;
    })
    this.getDetails();
  }
  getDetails()
  {
    this.ownerservice.getapprovalDetaislById(this.cId).subscribe(
      data =>{
        this.results = data;
        this.approvalstatus = this.results['approvalStatus'];
        this.startingLocation = this.results['startingLocation'];
        this.destinationLocation = this.results['destinationLocation'];
        this.requestedDate = this.results['requestedDate'];
        this.companyName = this.results.vehicleForm['companyName'];
        this.model = this.results.vehicleForm['model'];
        this.numberPlate = this.results.vehicleForm['numberPlate'];
        this.rentPerDay = this.results.vehicleForm['rentPerDay'];
      },  
      error =>{

      }
    )
  }
  close()
  {
    this.router.navigate(['/request']);
  }
  approve(){
    console.log(this.cId);
    let status = "1";
    this.formData.append("tripId",this.cId);
    this.formData.append("status",status);
    this.ownerservice.approveRequest(this.formData).subscribe(
      data =>{
        Swal.fire(
          'Request Approved!',
          'Request Approved Successfully',
          'success'
        )
        this.router.navigate(['/request']);
      },
      error =>{
        Swal.fire(
          'Unable to approve request!',
          'Unable to approve request Successfully',
          'error'
        )
      }
    )
  }
  reject(){
    console.log(this.cId);
    let status = "3";
    this.formData.append("tripId",this.cId);
    this.formData.append("status",status);
    this.ownerservice.approveRequest(this.formData).subscribe(
      data =>{
        Swal.fire(
          'Request Rejected!',
          'Request Rejected Successfully',
          'success'
        )
        this.ngOnInit();
      },
      error =>{
        Swal.fire(
          'Unable to reject request!',
          'Unable to reject request Successfully',
          'error'
        )
      }
    )
  }
}
