import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../owner.service';
import { Vehicle } from 'src/app/_models/vehicle';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { MappagesComponent } from 'src/app/mappages/mappages.component';
import { MatDialog } from '@angular/material/dialog';
declare const google: any;
@Component({
  selector: 'app-addnew-cars',
  templateUrl: './addnew-cars.component.html',
  styleUrls: ['./addnew-cars.component.css']
})
export class AddnewCarsComponent implements OnInit {
  rcproof: any;
  image1: any;
  image2: any;
  files: any;
  img1: any;
  img2: any;
  lisence1: any;
  lisence2: any;
  lisencefrnt: any;
  lisenceback: any;
  lat = 13;
  lng = 80;
  renttype = 'rentperday';
  addVehiclesform: FormGroup;

  formData = new FormData();
  public vehicleModel: Vehicle;
  locations: any = [];
  ownerId;
  ownerdetails;
  submitted = false;
  error: any;
  driverslist: any = [];
  mapdataresponse: any;
  decoddedAddress;
 
  constructor(private fb: FormBuilder, private dialog:MatDialog,
    private router: Router, private toaster: ToastrService,
    private owenerservice: OwnerService) { }

  ngOnInit() {
    this.vehicleModel = new Vehicle();
    this.vehicleModel.locality = '';
    this.vehicleModel.vehicleType = '';
    this.vehicleModel.driver = '';

    if(this.renttype == 'rentperday')
    {
      this.addVehiclesform = this.fb.group(
        {
          vehicleType: ['', Validators.required],
          vehicleModel: ['', Validators.required],
          vehicleYear: ['', Validators.required],
          vehicleCompany: ['', Validators.required],
          vehicleRegistration: ['', Validators.required],
          locality: ['', Validators.required],
          
          rent: ['', Validators.required],
          lcoationmanuval:['',Validators.required],
          // liscenceback:['',Validators.required],
          // rcbook:['',Validators.required],
          // img1:['',Validators.required],
          // img2 :['',Validators.required],
          renttype :[''],
          driver: [''],
          dRent: [''],
          paddress: [''],
          vRentperKm: [''],
        }
      )
    }
    else{
      this.addVehiclesform = this.fb.group(
        {
          vehicleType: ['', Validators.required],
          vehicleModel: ['', Validators.required],
          vehicleYear: ['', Validators.required],
          vehicleCompany: ['', Validators.required],
          vehicleRegistration: ['', Validators.required],
          locality: ['', Validators.required],
          
          rent: [''],
          // liscencefrnt:['',Validators.required],
          // liscenceback:['',Validators.required],
          // rcbook:['',Validators.required],
          // img1:['',Validators.required],
          // img2 :['',Validators.required],
          renttype :[''],
          driver: [''],
          dRent: [''],
          paddress: [''],
          vRentperKm: [''],
        }
      )
    }
  
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    console.log(this.ownerId)
    this.getalllocality();
    this.getalldrivers();
  }
  changerenttype(s)
  {
    console.log(s);
    this.vehicleModel.vRentperKm = "";
    
  }
  vehicletype(event) {
    console.log(event.target.value);
    if (event.target.value == '3Wheeler') {
      Swal.fire(
        'Minumum Charge  25 per 1.5 KM',
        '' + 'Waiting Charge - Per Half hour basis' + 'Note : Beyond 1.5km per hour or per km charges whichever comes big will be included with RS 25/-',

        'success'
      )
    }
    else {
      Swal.fire(
        'Minumum Charge  150 per 5 KM',
        '' + 'Waiting Charge - Per Half hour basis' + 'Note : Beyond 1.5km per hour or per km charges whichever comes big will be included with RS 150/-',

        'success'
      )
    }

  }
  getalldrivers() {
    this.owenerservice.getalldrivers(this.ownerId).subscribe(
      data => {
        this.driverslist = data;
        console.log(this.driverslist)
      },
      error => {

      }
    )
  }
  getalllocality() {
    this.owenerservice.getalllocality().subscribe(
      data => {
        console.log(data)
        this.locations = data;
      },
      error => {

      }
    )
  }
  addrcimage(event) {

    this.files = event.target.files;
    this.rcproof = this.files.item(0);

  }
  addimage1(event) {
    this.img1 = event.target.files;
    this.image1 = this.img1.item(0);
  }
  addimage2(event) {
    this.img2 = event.target.files;
    this.image2 = this.img2.item(0);
  }
  addliscensefrnt(event) {
    this.lisence1 = event.target.files;
    this.lisencefrnt = this.lisence1.item(0);
  }
  addliscenseback(event) {
    this.lisence2 = event.target.files;
    this.lisenceback = this.lisence2.item(0);
  }
  get f() { return this.addVehiclesform.controls; }

  submit() {
    this.submitted = true;
    this.mapdataresponse = JSON.parse(sessionStorage.getItem("mapcordinatess"));
    // stop here if form is invalid
    // console.log(this.mapdataresponse['latitude'] + ',' + this.mapdataresponse["longitude"]);

    console.log(this.mapdataresponse)
    if (this.addVehiclesform.invalid) {
      console.log(this.addVehiclesform.value);
      
      return;
    }
    else {
      console.log(this.vehicleModel.vRentperKm);
      if(this.vehicleModel.vRentperKm == undefined)
      {
        this.vehicleModel.vRentperKm = "";
        this.formData.append('rentPerHour', "");
      }
      else

      {
        let vrent = parseInt(this.vehicleModel.vRentperKm) * 30;
        this.vehicleModel.vRentperHr = vrent.toString();
        this.formData.append('rentPerHour',this.vehicleModel.vRentperHr);

      }
     
      
      
      this.formData.append('type', this.vehicleModel.vehicleType);
      this.formData.append('companyName', this.vehicleModel.vehicleCompany);
      this.formData.append('model', this.vehicleModel.vehicleModel);
      this.formData.append('year', this.vehicleModel.vehicleYear);
      this.formData.append('numberPlate', this.vehicleModel.vehicleRegistration);
      this.formData.append('locality', this.vehicleModel.locality);
      this.formData.append('rentPerDay', this.vehicleModel.rent);
      this.formData.append('rentPerKM', this.vehicleModel.vRentperKm);
     

      this.formData.append('ownerId', this.ownerId);
      if(this.mapdataresponse == null)
      {
        if(this.vehicleModel.paddress == undefined)
        {
          this.toaster.error("Enter the pickup address")
        }
        else{
          this.formData.append("pickUpAddress", this.vehicleModel.paddress);

        }

      }
      else
      {
        // this.formData.append("pickUpAddress", null);

      }

      if(this.vehicleModel.paddress != null || this.vehicleModel.paddress != undefined)
      {
        this.formData.append("gpsCoorginates", "");
        this.formData.append("gpsAddress", "");
      }
      else{
        this.formData.append("gpsCoorginates", this.mapdataresponse['latitude'] + ',' + this.mapdataresponse["longitude"]);
        this.formData.append("gpsAddress", this.mapdataresponse['address']);
        this.decoddedAddress =  this.mapdataresponse['address']
      }
    
     

      // this.formData.append('licenceFront', this.lisencefrnt);
      // this.formData.append('licenceBack', this.lisenceback);
      // this.formData.append('rcImage', this.rcproof);
      // this.formData.append('image1', this.image1);
      // this.formData.append('image2', this.image2);
      this.formData.append('driverId', this.vehicleModel.driver);
      if (this.vehicleModel.dRent == undefined) {
        this.formData.append('driverRentPerKM', "");

      }
      else {
        this.formData.append('driverRentPerKM', this.vehicleModel.dRent);

      }
      




      console.log(this.formData)
      this.owenerservice.addnewvehicle(this.formData).subscribe(
        data => {
         
          localStorage.setItem('vehicleadddetailsid', JSON.stringify(data));
          Swal.fire(
            'Vehicle Added!',
            'Basic Details Added Successfully',
            'success'
          )
          this.router.navigate(['/image1']);

        },
        error => {
          this.error = error.error['message'];
          Swal.fire(
            'Unable to add Vehicle!',
            this.error,
            'error'
          )
          this.formData.delete;

        }
      )
    }

  }
  clicks() {

  }

  viewmap(){
    const dialogRef = this.dialog.open(MappagesComponent, {
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result closed`);
      // let geocoder = new google.maps.Geocoder();
      // let latlng = new google.maps.LatLng(this.lat, this.lng);
      this.mapdataresponse = JSON.parse(sessionStorage.getItem("mapcordinatess"));
      this.decoddedAddress =  this.mapdataresponse['address']
    });
  }
}
