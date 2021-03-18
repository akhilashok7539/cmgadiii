import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { OwnerService } from '../owner.service';
import { AddVehiclekmHandoverComponent } from './add-vehiclekm-handover/add-vehiclekm-handover.component';

@Component({
  selector: 'app-handovervehicles',
  templateUrl: './handovervehicles.component.html',
  styleUrls: ['./handovervehicles.component.css']
})
export class HandovervehiclesComponent implements OnInit {
  ownerdetails;
  ownerId;
  PENDING = '2';
  APPROVED = '1';
  REJECTED = '3';
  results: any = [];
  apiurl;
  formData = new FormData();
  message = 'data found';
  page = 0;
  constructor(private ownerService:OwnerService,public dialog: MatDialog,private router:Router) { }

  ngOnInit() {
    this.apiurl = environment.BASEURL;
    console.log(this.apiurl);
    
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.getapprovedVehicles();
  }

  getapprovedVehicles()
  {
    this.ownerService.getallvehicleforhanover(this.ownerId,this.page).subscribe(
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
  
  openDialog(s) {

    const dialogRef = this.dialog.open(AddVehiclekmHandoverComponent, {
      width: '450px',
      data: s
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('The dialog was closed');
     
    });
  }
  view(e)
  {
    sessionStorage.setItem("vID",e.id);
    this.router.navigate(['/ownerviewvehicles']);
  }
  
}
