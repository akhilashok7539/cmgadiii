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
  page = 0;
  constructor(private Router:Router,private ownerservice:OwnerService) { }

  ngOnInit() {
    this.getallvehiclefortracking();
  }
  getallvehiclefortracking()
  {
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'))
    this.userId = this.userDetails['userId'];
    this.ownerservice.getallvechilcetracking(this.userId,this.page).subscribe(
      data =>{
        this.result = data;
        console.log(this.result);
        
      },
      error =>{

      }
    )
  }
  trackview(s){
    console.log(s);
    sessionStorage.setItem("vehicletracking",JSON.stringify(s))
    this.Router.navigate(['/view-vehicle'])
    
  }
  loadMore()
  {
    this.page++
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'))
    this.userId = this.userDetails['userId'];
    this.ownerservice.getallvechilcetracking(this.userId,this.page).subscribe(
      data =>{
        
        let datalist;
        datalist = data;
        datalist.forEach(element => {
          this.result.push(element)
        });
      },
      error =>{

      }
    )
  }
}
