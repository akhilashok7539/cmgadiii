import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adminapprovevehicles',
  templateUrl: './adminapprovevehicles.component.html',
  styleUrls: ['./adminapprovevehicles.component.css']
})
export class AdminapprovevehiclesComponent implements OnInit {
  results: any =[];
  searchString: any;

  displayedColumns = ['vname', 'vnumber', 'name', 'view', 'approve'];
  limit: number = 15;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  formData = new FormData();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  message: any = 'data found';
  apiurl: any;
  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit() {
    this.apiurl = environment.BASEURL;
    this.getallvehiclesforapproval();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.filteredData.length)
    if (this.dataSource.filteredData.length == 0) {
      this.message = 'No data found';
    }
  }
  getallvehiclesforapproval() {

    sessionStorage.setItem('tabstatus',"PENDING");

    this.adminservice.getallvehicles().subscribe(
      data => {
        this.results = data;
        this.dataSource.data = this.results;
        if(this.results.length == 0)
        {
         this.message = 'No data found';

        }
        else{
          this.message = 'data found';
        }
      },
      error => {
        this.dataSource = new MatTableDataSource();
      }
    )
  }
  approve(elemet) {
    this.formData.append('vehicleId', elemet.id);
    this.formData.append('status', "1");
    this.adminservice.approve(this.formData).subscribe(
      data => {
        Swal.fire(
          'Vehicle Approved!',
          'Vehicle Added Successfully',
          'success'
        )
        this.ngOnInit();
      },
      error => {
        Swal.fire(
          'Unable to Approve Vehicle!',
          'Vehicle Approve  UnSuccessfully',
          'error'
        )
      }
    )
  }
  reject(elemet) {
    this.formData.append('vehicleId', elemet.id);
    this.formData.append('status', "3");
    this.adminservice.reject(this.formData).subscribe(
      data => {
        Swal.fire(
          'Vehicle Reject!',
          'Vehicle Reject Successfully',
          'success'
        )
        this.ngOnInit();
      },
      error => {
        Swal.fire(
          'Unable to Reject Vehicle !',
          'Vehicle Reject UnSuccessfully',
          'error'
        )
      }
    )
  }
  changePage(event) {
    // this.adminservice.getallvehicles(event.pageIndex).subscribe(
    //   data => {
    //     this.results = data;
    //     this.dataSource.data = this.results;
    //   },
    //   error => {
    //     this.dataSource = new MatTableDataSource();
    //   }
    // )
  }
  view(e) {
    sessionStorage.setItem("vehicle", JSON.stringify(e));
    this.router.navigate(['/viewVehicle']);

  }
  tabClick(tab) {
    console.log(tab.index);
    if (tab.index == 0) {
      console.log('PENDING');
      this.getallvehiclesforapproval();
      sessionStorage.setItem('tabstatus',"PENDING");
    }
    else if (tab.index == 1) {
      console.log('ACCEPTED');
      this.getallvehiclesApproved();
      sessionStorage.setItem('tabstatus',"ACCEPTED");

    }
    else if (tab.index == 2) {
      console.log('rejected');
      this.getallvehiclesRejected();
      sessionStorage.setItem('tabstatus',"REJECTED");

    }
  }
  getallvehiclesApproved() {

    this.adminservice.getallvehiclesapproved().subscribe(
      data => {
        this.results = data;
        this.dataSource.data = this.results;
        console.log(this.results.length);
        console.log(this.message);
        
        if(this.results.length == 0)
        {
         this.message = 'No data found';
         console.log(this.message);

        }
        else{
          this.message = 'data found';
        }
      },
      error => {
        // this.dataSource = new MatTableDataSource();
        this.results = [];

      }
    )
  }
  getallvehiclesRejected() {
    this.adminservice.getallvehiclesRejected().subscribe(
      data => {
        this.results = data;
        this.dataSource.data = this.results;
        if(this.results.length == 0)
        {
         this.message = 'No data found';

        }
        else{
          this.message = 'data found';
        }
      },
      error => {
        // this.dataSource = new MatTableDataSource();
        this.results = [];

      }
    )
  }
  // approved(results) {
  //   console.log(results);
    
  //   this.adminservice.approveVehicle(results.id).subscribe(
  //     data => {

  //     },
  //     error => {

  //     }
  //   )
  // }
  // rejected(results) {
  //   this.adminservice.rejected(results.id).subscribe(
  //     data => {

  //     },
  //     error => {

  //     }
  //   )
  // }
}
