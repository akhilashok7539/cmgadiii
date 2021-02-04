import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { OwnerService } from '../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  ownerdetails;
  ownerId;
  PENDING = '2';
  APPROVED = '1';
  REJECTED = '3';
  results: any = [];
  apiurl;
  formData = new FormData();
  message = 'data found';
  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
    this.apiurl = environment.BASEURL;
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.getallPendingdata();
  }
  tabClick(event) {
    if (event.index == 0) {
      console.log('PENDING');
      this.getallPendingdata();

    }
    else if (event.index == 1) {
      console.log('approved');
      this.getallApprovedData();
    }
    else if (event.index == 2) {
      console.log('rejected');
      this.getallrejectedData();
    }
  }
  getallPendingdata() {

    this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.PENDING).subscribe(
      data => {
        this.results = data;
        if (this.results.length == 0) {
          this.message = 'No Data Found';
        }
        else {
          this.message = 'Data Found';

        }
      },
      error => {

      }
    )
  }
  getallApprovedData() {

    this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.APPROVED).subscribe(
      data => {
        this.results = data;
        if (this.results.length == 0) {
          this.message = 'No Data Found';
        }
        else {
          this.message = 'Data Found';

        }
      },
      error => {

      }
    )
  }
  getallrejectedData() {

    this.ownerService.getallRequestfromUserBsedonStatus(this.ownerId, this.REJECTED).subscribe(
      data => {
        this.results = data;
        if (this.results.length == 0) {
          this.message = 'No Data Found';
        }
        else {
          this.message = 'Data Found';

        }
      },
      error => {

      }
    )
  }
  view(s) {
    this.router.navigate(['view-request', s.id, s.customerName]);
  }
  approve(s) {
    console.log(s.id);
    let status = "1";
    this.formData.append("tripId", s.id);
    this.formData.append("status", status);
    this.ownerService.approveRequest(this.formData).subscribe(
      data => {
        Swal.fire(
          'Request Approved!',
          'Request Approved Successfully',
          'success'
        )
        this.ngOnInit();
      },
      error => {
        Swal.fire(
          'Unable to approve request!',
          'Unable to approve request Successfully',
          'error'
        )
      }
    )

  }
  reject(s) {
    console.log(s.id);
    let status = "3";
    this.formData.append("tripId", s.id);
    this.formData.append("status", status);
    this.ownerService.approveRequest(this.formData).subscribe(
      data => {
        Swal.fire(
          'Request Rejected!',
          'Request Rejected Successfully',
          'success'
        )
        this.ngOnInit();
      },
      error => {
        Swal.fire(
          'Unable to reject request!',
          'Unable to reject request Successfully',
          'error'
        )
      }
    )

  }
}
