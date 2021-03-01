import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ViewliscenceComponent } from './viewliscence/viewliscence.component';
import { ViewlicsencebackComponent } from './viewlicsenceback/viewlicsenceback.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  ownerdetails: any;
  ownerId: any;
  driverslist: any = [];
  apUrl: any;
  contents: string;
  Id: any;
  imageToShow: any;
  liscenimag;
  
  displayedColumns = ['name','phonenumber','pan','licensefrnt','licenseback','edit'];
  limit: number = 15;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  message: string;
  
  constructor(private router: Router, public dialog: MatDialog,

    private ownerservice: OwnerService, private domsanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.apiurl = environment.BASEURL;
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.apUrl = environment.BASEURL;
    this.getallsdriver();
    this.contents = undefined;

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.filteredData.length)
    if(this.dataSource.filteredData.length == 0 )
    {
      this.message = 'No data found';
    }
  }
  getallsdriver() {
    this.ownerservice.getalldrivers(this.ownerId).subscribe(
      data => {
        console.log(data)
        this.driverslist = data;
        this.dataSource.data = this.driverslist;
      },
      error => {

      }
    )
  }
  getlicsence(id) {
    // console.log(id)
    // this.Id = id
    // this.ownerservice.getliscncefront(id).subscribe(
    //   data =>{
    //     var unnsafeimage = URL.createObjectURL(data);
    //     console.log(unnsafeimage)
    //     this.liscenimag = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
    //     window.open(this.liscenimag,"_blank")
    //   },
    //   error =>{

    //   }
    // );
    const dialogRef = this.dialog.open(ViewliscenceComponent, {
      width: '400px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result closed`);
    });
  }
  getlicsenceback(id) {
    const dialogRef = this.dialog.open(ViewlicsencebackComponent, {
      width: '400px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result closed`);
    });
  }
  // this.router.navigate(['/view-licsense',id]);
  //   createImageFromBlob(image: Blob) {
  //     let reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //        this.imageToShow = reader.result;
  //        console.log(this.imageToShow)
  //     }, false);

  //     if (image) {
  //        reader.readAsDataURL(image);
  //     }
  //  }
  //  getImageFromService() {
  //   this.ownerservice.getliscncefront(this.Id).subscribe(data => {
  //     this.createImageFromBlob(data);
  //   }, error => {
  //     console.log(error);
  //   });
  // }
  edit(e) {
    console.log(e.id)
    sessionStorage.setItem("driverId",e.id);
    this.router.navigate(['/editdrivers']);
  }
}
