import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Vehicle } from 'src/app/_models/vehicle';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerService } from '../owner.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MappagesComponent } from 'src/app/mappages/mappages.component';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent implements OnInit {
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
  vehicleId: any;
  addVehiclesform: FormGroup;
  formData = new FormData();
  public vehicleModel: Vehicle;
  locations: any = [];
  ownerId;
  ownerdetails;
  results: any;
  driverslist: any = [];
  submitted = false;
  error: any;
  renttype;
  mapdataresponse: any;
  decoddedAddress;
  rentPerHour;
  clickedStaus =false;
  constructor(private fb: FormBuilder, private router: Router,private toaster:ToastrService,
     private activaterouter: ActivatedRoute,private dialog:MatDialog,
    private owenerservice: OwnerService) { }

  ngOnInit() {
    this.vehicleModel = new Vehicle();
    this.vehicleModel.locality = '';
    this.vehicleModel.vehicleType = '';
    this.vehicleModel.driver = '';

    this.addVehiclesform = this.fb.group(
      {
        vehicleType: ['', Validators.required],
        vehicleModel: ['', Validators.required],
        vehicleYear: ['', Validators.required],
        vehicleCompany: ['', Validators.required],
        vehicleRegistration: ['', Validators.required],
        locality: ['', Validators.required],
        rent: ['', Validators.required],
        // liscencefrnt:['',Validators.required],
        // liscenceback:['',Validators.required],
        // rcbook:['',Validators.required],
        // img1:['',Validators.required],
        lcoationmanuval :[''],
        driver: [''],
        dRent:[''],
        vRentperHr:[''],
        vRentperKm:[''],
        pkaddress:[''],
        renttype:[''],
      }
    )
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    console.log(this.ownerId)
    this.activaterouter.params.subscribe(params => {
      this.vehicleId = params.id;
    })
    this.getvehiclesDetailsById();
    this.getalllocality();
    this.getalldrivers();
  }

  getvehiclesDetailsById() {
    this.owenerservice.getvehiclesDetailsById(this.vehicleId).subscribe(
      data => {
        this.results = data;
        this.vehicleModel.vehicleCompany = this.results['companyName'];
        this.vehicleModel.vehicleType = this.results['type'];
        this.vehicleModel.vehicleModel = this.results['model'];
        this.vehicleModel.vehicleRegistration = this.results['numberPlate'];
        this.vehicleModel.rent = this.results['rentPerDay'];
        this.vehicleModel.locality = this.results['locality'];
        this.vehicleModel.vehicleYear = this.results['year'];
        this.vehicleModel.vRentperHr= this.results['rentPerHour'];
        this.vehicleModel.vRentperKm  = this.results['rentPerKM'];

        if(this.results['rentPerDay'] != null)
        {
          this.renttype = "rentperday";
        }
        else
        {
          this.renttype = "rentperkm";
        }

        if(this.results['pickUpAddress'] != null)
        {
          this.vehicleModel.lcoationmanuval = "m";
          // this.vehicleModel.pkaddress =this.results['pickUpAddress']

        }
        else{
          this.vehicleModel.lcoationmanuval = "l";
          // this.vehicleModel.pkaddress =this.results['gpsAddress']
        }

        if(this.results['driverId'] != null)
        {
          this.vehicleModel.driver = this.results['driverId'];
          this.vehicleModel.dRent = this.results['driverRentPerKM'];

        }
        else {
          this.vehicleModel.driver = '';
        }
        if(this.results['pickUpAddress'] != null)
        {
          this.vehicleModel.pkaddress = this.results['pickUpAddress'];
        }
        if( this.vehicleModel.vRentperHr == null)
        {
          this.vehicleModel.vRentperHr = "";
        }
        if( this.vehicleModel.vRentperKm == null)
        {
          this.vehicleModel.vRentperKm = "";
        }

      },
      error => {

      }
    )
  }
  getalldrivers() {
    this.owenerservice.getalldrivers(this.ownerId).subscribe(
      data =>{
        this.driverslist = data;
        console.log(this.driverslist)
      },
      error =>{

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
  addimage1(event){
    this.img1 = event.target.files;
    this.image1 = this.img1.item(0);
  }
  addimage2(event){
    this.img2 = event.target.files;
    this.image2 = this.img2.item(0);
  }
  addliscensefrnt(event){
    this.lisence1 = event.target.files;
    this.lisencefrnt = this.lisence1.item(0);
  }
  addliscenseback(event){
    this.lisence2 = event.target.files;
    this.lisenceback = this.lisence2.item(0);
  }
  get f() { return this.addVehiclesform.controls; }

  submit() {
    this.submitted = true;

    if (this.addVehiclesform.invalid) {
      console.log(this.addVehiclesform.value)
      return;
    }
    else {

   
    // this.formData.append('type', this.vehicleModel.vehicleType);
    // this.formData.append('companyName', this.vehicleModel.vehicleCompany);
    // this.formData.append('model', this.vehicleModel.vehicleModel);
    // this.formData.append('year', this.vehicleModel.vehicleYear);
    // this.formData.append('numberPlate', this.vehicleModel.vehicleRegistration);
    // this.formData.append('locality', this.vehicleModel.locality);
    // this.formData.append('rentPerDay', this.vehicleModel.rent);
    // this.formData.append('ownerId', this.ownerId);
 
    // this.formData.append('driverId', this.vehicleModel.driver);
    // this.formData.append('id', this.vehicleId);
    // this.formData.append('driverRentPerKM', this.vehicleModel.dRent);
    // this.formData.append('rentPerKM', this.vehicleModel.vRentperKm);
    // this.formData.append('rentPerHour', this.vehicleModel.vRentperHr);
    // this.formData.append("pickUpAddress", this.vehicleModel.pkaddress);
    // this.owenerservice.editvehicle(this.formData).subscribe(
    //   data => {
    //     Swal.fire(
    //       'Vehicle Updated!',
    //       'Vehicle Updated Successfully',
    //       'success'
    //     )
    //   },
    //   error => {
    //     this.error = error.error['message'];
    //     Swal.fire(
    //       'Unable to Update Vehicle!',
    //       this.error,
    //       'error'
    //     )

    //     this.formData.delete;

    //   }
    // )
    this.formData.append('type', this.vehicleModel.vehicleType);
    this.formData.append('companyName', this.vehicleModel.vehicleCompany);
    this.formData.append('model', this.vehicleModel.vehicleModel);
    this.formData.append('year', this.vehicleModel.vehicleYear);
    this.formData.append('numberPlate', this.vehicleModel.vehicleRegistration);
    this.formData.append('locality', this.vehicleModel.locality);
    this.formData.append('ownerId', this.ownerId);
    this.formData.append('ownerId', this.ownerId);
    this.formData.append('id', this.vehicleId)
    if (this.vehicleModel.vehicleType === "4Wheeler") {
      let vrent = parseInt(this.vehicleModel.vRentperKm) * 30;
      this.rentPerHour = vrent.toString();
    }
    else {
      let vrent = parseInt(this.vehicleModel.vRentperKm) * 10;
      this.rentPerHour = vrent.toString();
    }
    if (this.renttype === "rentperday") {
      this.formData.append('rentPerDay', this.vehicleModel.rent);
    }
    else {
      this.formData.append('rentPerKM', this.vehicleModel.vRentperKm);
      this.formData.append('rentPerHour', this.rentPerHour);
    }
    if(this.results['driverId'] != null)
    {
      this.formData.append("driverId", this.vehicleModel.driver);
      this.formData.append("driverRentPerKM", this.vehicleModel.dRent);
    }
    if (this.vehicleModel.lcoationmanuval === "l") {
      console.log(this.mapdataresponse);
      if(this.clickedStaus === true)
      {
        this.formData.append("gpsCoorginates", this.mapdataresponse['latitude'] + ',' + this.mapdataresponse["longitude"]);
        this.formData.append("gpsAddress", this.mapdataresponse['address']);
      }
      else
      {
        this.formData.append("gpsCoorginates", this.results['gpsCoorginates']);
        this.formData.append("gpsAddress", this.results['gpsAddress']);
      }
     
    }
    if (this.vehicleModel.lcoationmanuval === "m") {
      this.formData.append("pickUpAddress", this.vehicleModel.pkaddress);
    }
    this.owenerservice.editvehicle(this.formData).subscribe(
      data => {
        this.formData.delete;
        this.clickedStaus = false;

        Swal.fire(
          'Vehicle Updated!',
          'Vehicle Updated Successfully',
          'success'
        )
      },
      error => {
        this.formData.delete;
        this.clickedStaus = false;

        this.error = error.error['message'];
        Swal.fire(
          'Unable to Update Vehicle!',
          this.error,
          'error'
        )

        this.formData.delete;

      }
    )
  }
  }
  updateimg1()
  {
    this.formData.append('image', this.image1);
    this.formData.append('type',"1");
    this.formData.append('id',this.vehicleId)
    this.owenerservice.addimages(this.formData).subscribe(
      data =>{
      this.formData = new FormData();

        this.files = '';
        Swal.fire(
          'Image 1 Added!',
          'Image 1 Added Successfully',
          'success'
        )
      },
      error =>{
        this.formData.delete;
        Swal.fire(
          'Unable to add image 1!',
          'Unable to add image 1 Successfully',
          'error'
        )
      }
    )
  }
  updateimg2()
  {
    this.formData.append('image', this.image2);
    this.formData.append('type',"2");
    this.formData.append('id',this.vehicleId)
    this.owenerservice.addimages(this.formData).subscribe(
      data =>{
      this.formData = new FormData();

        this.files = '';
        Swal.fire(
          'Image 2 Added!',
          'Image 2 Added Successfully',
          'success'
        )
      },
      error =>{
        this.formData.delete;
        Swal.fire(
          'Unable to add image 2!',
          'Unable to add image 2 Successfully',
          'error'
        )
      }
    )
  }
  updatelicfrnt()
  {
       this.formData.append('image', this.lisencefrnt);
       this.formData.append('type',"3");
       this.formData.append('id',this.vehicleId)
       this.owenerservice.addimages(this.formData).subscribe(
         data =>{
      this.formData = new FormData();

           this.files = '';
           Swal.fire(
             'License Added!',
             'License Added Successfully',
             'success'
           )
         },
         error =>{
           this.formData.delete;
           Swal.fire(
             'Unable to add License front!',
             'Unable to add License front Successfully',
             'error'
           )
         }
       )
  }
  updatelicback()
  {
    this.formData.append('image', this.lisenceback);
    this.formData.append('type',"4");
    this.formData.append('id',this.vehicleId)
    this.owenerservice.addimages(this.formData).subscribe(
      data =>{
      this.formData = new FormData();

        this.files = '';
        Swal.fire(
          'License Back Added!',
          'License Back Added Successfully',
          'success'
        )
      },
      error =>{
      this.formData = new FormData();
        Swal.fire(
          'Unable to add License Back!',
          'Unable to add License Back Successfully',
          'error'
        )
      }
    )
  }

  updaterc(){
    this.formData.append('image', this.rcproof);
    this.formData.append('type',"5");
    this.formData.append('id',this.vehicleId)
    this.owenerservice.addimages(this.formData).subscribe(
      data =>{
      this.formData = new FormData();

        this.files = '';
        Swal.fire(
          'RC Added!',
          'RC Added Successfully',
          'success'
        )
      },
      error =>{
      this.formData = new FormData();
        Swal.fire(
          'Unable to add RC!',
          'Unable to add RC Successfully',
          'error'
        )
      }
    )
  }

  viewmapEdit()
  {
    this.clickedStaus = true;
      const dialogRef = this.dialog.open(MappagesComponent, {
        width: '1000px',
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result closed`);
        // let geocoder = new google.maps.Geocoder();
        // let latlng = new google.maps.LatLng(this.lat, this.lng);
        this.mapdataresponse = JSON.parse(sessionStorage.getItem("mapcordinatess"));
        this.decoddedAddress = this.mapdataresponse['address']
      });

  }

}
