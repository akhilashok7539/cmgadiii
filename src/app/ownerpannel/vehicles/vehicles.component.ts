import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  userDetails: any;
  userId: any;
  carList: any = [];
  apUrl: any;
  vstatus:any ='';
  errormessage ;
  constructor(private ownerserivice:OwnerService,private toaster:ToastrService,
    private router:Router) {
    this.apUrl = environment.BASEURL;
   }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'))
    this.userId = this.userDetails['userId'];
    this.getallcarsbyowers();
  }
  getallcarsbyowers()
  {
    this.ownerserivice.getallcars(this.userId).subscribe(
      data =>{
        this.carList =data;
        this.errormessage = "data found";
        if(this.carList.length == 0)
        {
        this.errormessage = "No data found";

        }
      },
      error =>{
        this.errormessage = "No data found";
      }
    )
  }
  edit(e)
  {
    this.router.navigate(['/edit-car',e.id]);
  }
  view(e)
  {
    sessionStorage.setItem("vID",e.id);
    this.router.navigate(['/ownerviewvehicles']);
  }
  delete(e)
  {
    this.ownerserivice.deleteCar(e.id).subscribe(
      data =>{
        this.toaster.success('Vehicle Deleted Successfully');
        this.ngOnInit();

      },
      error=>{
        this.toaster.error('Vehicle Deleted Unsuccessfully');

        this.ngOnInit();
      }
    )
  }
  changeFilter(s)
  {
    console.log(s);
    this.ownerserivice.getFilterOptionsVehicles(s,this.userId).subscribe(
      data =>{
        this.carList =data;
        this.errormessage = "data found";
        if(this.carList.length == 0)
        {
        this.errormessage = "No data found";

        }
      },
      error =>{
        this.carList =[];
        this.errormessage = "No data found";

      }
    )
    
  }
}
