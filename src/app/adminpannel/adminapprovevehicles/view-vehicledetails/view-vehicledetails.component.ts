import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Vehicle } from 'src/app/_models/vehicle';
import { environment } from 'src/environments/environment.prod';
import { AdminService } from '../../admin.service';
import Swal from 'sweetalert2';
import { OwnerService } from 'src/app/ownerpannel/owner.service';

@Component({
  selector: 'app-view-vehicledetails',
  templateUrl: './view-vehicledetails.component.html',
  styleUrls: ['./view-vehicledetails.component.css']
})
export class ViewVehicledetailsComponent implements OnInit {
  vehicledetails: any;
  vehicleModel: Vehicle;
  apiurl: any;
  vehicleID: any;
  vehicleimage2;
  liscence1;
  liscence2;
  rc;
  rentperhour;
  rentperkm;
  driverDetails: any;
  driverRentPerKM: any;
  id:any;
  DriverDetailsofCar:any;
  formData = new FormData();
  vehiclestatus: any;
  fileUrl;
  driverpancard;
  liscenimag;
  driverid;
  liscenimagback;
  ownername;
  pickUpAddress: any;
  gpsAddress: any;
  constructor(private domsanitizer: DomSanitizer, private adminService: AdminService,private onerservice:OwnerService) { }

  ngOnInit() {
    this.vehicleModel = new Vehicle();
    this.apiurl = environment.BASEURL;
    this.vehicledetails = JSON.parse(sessionStorage.getItem('vehicle'));
    this.vehicleModel.vehicleCompany = this.vehicledetails['companyName'];
    this.vehicleModel.vehicleType = this.vehicledetails['type'];
    this.vehicleModel.rent = this.vehicledetails['rentPerDay'];
    this.rentperhour  =this.vehicledetails['rentPerHour']
    this.rentperkm = this.vehicledetails['rentPerKM'];
    this.vehicleModel.vehicleYear = this.vehicleModel['year'];
    this.vehicleModel.locality = this.vehicledetails['locationName'];
    this.vehicleModel.vehicleModel = this.vehicledetails['model'];
    this.vehicleModel.vehicleRegistration = this.vehicledetails['numberPlate'];
    this.vehicleID = this.vehicledetails['id'];
    this.driverDetails = this.vehicledetails['driverId'];
    this.ownername = this.vehicledetails['ownerName']
    this.driverRentPerKM = this.vehicledetails['driverRentPerKM'];
    this.pickUpAddress = this.vehicledetails['pickUpAddress'];
    this.gpsAddress = this.vehicledetails['gpsAddress'];
    this.vehiclestatus = sessionStorage.getItem('tabstatus');
    this.getvehicleImage2imagesbyId();
    this.getlicencefrnt();
    this.getlicscenceback();
    this.getrc();
    this.getvehicleDetailsById();
  
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.domsanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
  getvehicleImage2imagesbyId() {
    this.adminService.getimage(this.vehicleID).subscribe(
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
  getlicencefrnt() {
    this.adminService.getlicencefrnt(this.vehicleID).subscribe(
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
    this.adminService.getlicscenceback(this.vehicleID).subscribe(
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
    this.adminService.getrc(this.vehicleID).subscribe(
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
    this.adminService.getVehicleDetailsbyId(this.vehicleID).subscribe(
      data =>{
        this.DriverDetailsofCar = data['driver'];
        this.driverid = data['driverId'];
        console.log("DRIVER ID =====" +this.driverid);
        
        console.log(this.DriverDetailsofCar);
        if(this.DriverDetailsofCar != null)
        {
          this.vehicleModel.dname = this.DriverDetailsofCar['name'];
          this.vehicleModel.dnumber = this.DriverDetailsofCar['number'];
          this.vehicleModel.daddreess = this.DriverDetailsofCar['addresss'];
          this.driverpancard = this.DriverDetailsofCar['panCardNO'];
        }
       
        this.id = this.driverDetails['id'];
        this.getlicsence();
        this.getdriverlicsenceback();
      },
      error =>{

      }
    )
  }
  approve() {
    this.formData.append('vehicleId', this.vehicleID);
    this.formData.append('status', "1");
    this.adminService.approve(this.formData).subscribe(
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
    this.formData.append('vehicleId',this.vehicleID);
    this.formData.append('status', "3");
    this.adminService.reject(this.formData).subscribe(
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
  open()
  {

  }
  getlicsence()
  {
    // console.log(id)
    // this.Id = id
    console.log(this.driverid);
    
    this.onerservice.getliscncefront(this.driverid).subscribe(
      data =>{
        var unnsafeimage = URL.createObjectURL(data);
        console.log(unnsafeimage)
        this.liscenimag = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        // window.open(this.liscenimag,"_blank")
      },
      error =>{

      }
    );

  }
  getdriverlicsenceback()
  {
    // console.log(id)
    // this.Id = id
    this.onerservice.getlicscenceback(this.driverid).subscribe(
      data =>{
        var unnsafeimage = URL.createObjectURL(data);
        console.log(unnsafeimage)
        this.liscenimagback = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        // window.open(this.liscenimag,"_blank")
      },
      error =>{

      }
    );

  }
}
