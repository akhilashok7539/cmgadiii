import { Component, OnInit, Sanitizer } from '@angular/core';
import { AdminService } from 'src/app/adminpannel/admin.service';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer } from '@angular/platform-browser';
import { OwnerService } from '../../owner.service';
import { Vehicle } from 'src/app/_models/vehicle';

@Component({
  selector: 'app-ownerviewvehicles',
  templateUrl: './ownerviewvehicles.component.html',
  styleUrls: ['./ownerviewvehicles.component.css']
})
export class OwnerviewvehiclesComponent implements OnInit {
  vId;
  apiurl: any;
  vehicleimage2;
  results :any;
  vehicleModel :  Vehicle;
  liscence1;
  liscence2;
  rc;
  DriverDetailsofCar = [];
  id;
  rentperkm;
  rentPerHour: any;
  constructor(private adminService:AdminService,private domsanitizer:DomSanitizer,private owenerservice:OwnerService) { }

  ngOnInit() {
    this.vehicleModel = new Vehicle();
    this.apiurl = environment.BASEURL;
    this.vId= sessionStorage.getItem('vID');
    console.log(this.vId)
    this.getimage2();
    this.getvehicleDetailsByid();
    this.getlicencefrnt();
    this.getlicscenceback();
    this.getrc();
    this.getvehicleDetailsById();
  }
  getimage2(){
    this.adminService.getimage(this.vId).subscribe(
      data => {
        console.log(data)
        var unnsafeimage = URL.createObjectURL(data);
        console.log(unnsafeimage)
        this.vehicleimage2 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
      },
      error => {

      }
    )
  }
  getvehicleDetailsByid()
  {
    this.owenerservice.getvehiclesDetailsById(this.vId).subscribe(
      data => {
        this.results = data;
        console.log(this.results);
        
        this.vehicleModel.vehicleCompany = this.results['companyName'];
        this.vehicleModel.vehicleType = this.results['type'];
        this.vehicleModel.vehicleModel = this.results['model'];
        this.vehicleModel.vehicleRegistration = this.results['numberPlate'];
        this.vehicleModel.rent = this.results['rentPerDay'];
        this.rentperkm = this.results['rentPerKM'];
        this.rentPerHour = this.results['rentPerHour'];
        this.vehicleModel.locality = this.results['locality'];
        this.vehicleModel.vehicleYear = this.results['year'];
        if(this.results['driverId'] != null)
        {
          this.vehicleModel.driver = this.results['driverId'];

        }
        else {
          this.vehicleModel.driver = '';
        }


      },
      error => {

      }
    )
  }
  getlicencefrnt() {
    this.adminService.getlicencefrnt(this.vId).subscribe(
      data => {
        console.log(data)
        var unnsafeimage = URL.createObjectURL(data);
        console.log(unnsafeimage)
        this.liscence1 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
      },
      error => {

      }
    )
  }
  getlicscenceback() {
    this.adminService.getlicscenceback(this.vId).subscribe(
      data => {
        console.log(data)
        var unnsafeimage = URL.createObjectURL(data);
        console.log(unnsafeimage)
        this.liscence2 = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
      },
      error => {

      }
    )
  }
  getrc() {
    this.adminService.getrc(this.vId).subscribe(
      data => {
        console.log(data)
        var unnsafeimage = URL.createObjectURL(data);
        console.log(unnsafeimage)
        this.rc = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
      },
      error => {

      }
    )
  }
  getvehicleDetailsById()
  {
    this.adminService.getVehicleDetailsbyId(this.vId).subscribe(
      data =>{
        this.DriverDetailsofCar = data['driver'];
        console.log(this.DriverDetailsofCar);
        
        this.vehicleModel.dname = this.DriverDetailsofCar['name'];
        this.vehicleModel.dnumber = this.DriverDetailsofCar['number'];
        this.vehicleModel.daddreess = this.DriverDetailsofCar['addresss'];
        this.id = this.DriverDetailsofCar['id'];
      },
      error =>{

      }
    )
  }
}
