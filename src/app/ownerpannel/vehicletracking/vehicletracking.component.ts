import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-vehicletracking',
  templateUrl: './vehicletracking.component.html',
  styleUrls: ['./vehicletracking.component.css']
})
export class VehicletrackingComponent implements OnInit {
  result:any= [];
  userDetails;
  userId;
  constructor(private Router:Router,private ownerservice:OwnerService) { }

  ngOnInit() {
    this.getallvehiclefortracking();
  }
  getallvehiclefortracking()
  {
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'))
    this.userId = this.userDetails['userId'];
    this.ownerservice.getallvechilcedetails(this.userId).subscribe(
      data =>{
        this.result = data;
      },
      error =>{

      }
    )
  }
}
