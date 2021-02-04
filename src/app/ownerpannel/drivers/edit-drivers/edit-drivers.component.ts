import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Driver } from 'src/app/_models/driver';
import { OwnerService } from '../../owner.service';

@Component({
  selector: 'app-edit-drivers',
  templateUrl: './edit-drivers.component.html',
  styleUrls: ['./edit-drivers.component.css']
})
export class EditDriversComponent implements OnInit {
  driverModel: Driver;
  driverForm: FormGroup;
  number: any;
  formData = new FormData();
  lisence1;
  lisence2;
  lisencefrnt;
  lisenceback;
  propicfile;
  propic;
  ownerdetails: any;
  ownerId: any;
  submitted = false;
  error: any;
  id
  driverId: string;
  results: Object;
  constructor(private ownerservice: OwnerService, private toaster:ToastrService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.driverModel = new Driver();
    this.driverForm = this.fb.group(
      {
        name: ['', Validators.required],
        number: ['', Validators.required],
        address: ['', Validators.required],
        pancard: ['', Validators.required],
          // liscencefrnt:['',Validators.required],
          // liscenceback:['',Validators.required],
          // propic:['',Validators.required]
      }
    )
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.driverId = sessionStorage.getItem('driverId');
    this.getdriverDetailByDriverId();
  }

  getdriverDetailByDriverId(){
    this.ownerservice.getDriverDetailsBydriverId(this.driverId).subscribe(
      data =>{
      this.results = data;
      this.driverModel.name = this.results['name'];
      this.driverModel.address = this.results['addresss'];
      this.driverModel.number = this.results['number'];
      this.driverModel.pancard = this.results['panCardNO'];

        console.log(data)
      },
      error =>{

      }
    )
  }
  get f() { return this.driverForm.controls; }
  addliscensefrnt(event) {
    this.lisence1 = event.target.files;
    this.lisencefrnt = this.lisence1.item(0);
  }
  addliscenseback(event) {
    this.lisence2 = event.target.files;
    this.lisenceback = this.lisence2.item(0);
  }
  addprofilepic(event) {
    this.propicfile = event.target.files;
    this.propic = this.propicfile.item(0);
  }
  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.driverForm.invalid) {
      return;
    }
    else {


      this.formData.append('name', this.driverModel.name);
      this.formData.append('ownerId', this.ownerId);
      this.formData.append('number', this.driverModel.number);
      this.formData.append('addresss', this.driverModel.address);
      this.formData.append('panCardNO', this.driverModel.pancard);
      // this.formData.append('proPic', this.propic);
      // this.formData.append('licenceFront', this.lisencefrnt);
      // this.formData.append('licenceBack', this.lisenceback);
      this.formData.append('id', this.driverId);

      this.ownerservice.editdrivers(this.formData).subscribe(
        data => {
          this.toaster.success('Driver updated Successfully')
          // this.router.navigate(['/drivers'])
        },
        error => {
          // alert('error')
          this.error = error.error['message']
          this.toaster.error(this.error);
          this.formData.delete;

        }
      )
    }
  }
  update()
  {
    this.formData.append('image', this.lisencefrnt);
    this.formData.append('type', "1");
    this.formData.append('id', this.driverId);
    this.ownerservice.adddriverimnage(this.formData).subscribe(
      data =>{
        this.formData = new FormData();
       this.toaster.success("Driver License Front Updated");
      },
      error =>{
        this.toaster.success("Unable to Driver License Front");
       
      }
    )
  }
  updateLback()
  {
    this.formData.append('image', this.lisenceback);
    this.formData.append('type', "2");
    this.formData.append('id', this.driverId);
    this.ownerservice.adddriverimnage(this.formData).subscribe(
      data =>{
        this.formData = new FormData();
       this.toaster.success("Driver License Back Updated");
      },
      error =>{
        this.toaster.success("Unable to Driver License Back");
       
      }
    )
  }
  updatepPic()
  {
    this.formData.append('image', this.propic);
    this.formData.append('type', "3");
    this.formData.append('id', this.driverId);
    this.ownerservice.adddriverimnage(this.formData).subscribe(
      data =>{
        this.formData = new FormData();
       this.toaster.success("Profile Picture Updated");
      },
      error =>{
        this.toaster.success("Unable to update Profile Picture");
       
      }
    )
  }
}