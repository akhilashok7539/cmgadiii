import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/_models/driver';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { OwnerService } from 'src/app/ownerpannel/owner.service';
@Component({
  selector: 'app-adddriver-licscence',
  templateUrl: './adddriver-licscence.component.html',
  styleUrls: ['./adddriver-licscence.component.css']
})
export class AdddriverLicscenceComponent implements OnInit {
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
  driverId: any;
  nocdriver:any;
  constructor(private ownerservice: OwnerService, private toaster: ToastrService,
    private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.driverModel = new Driver();
    this.driverForm = this.fb.group(
      {

        liscencefrnt: ['', Validators.required],
        // liscenceback:['',Validators.required],
        // propic:['',Validators.required]
      }
    )
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.driverId = JSON.parse(localStorage.getItem('driverDetails'));
  }
  get f() { return this.driverForm.controls; }
  addliscensefrnt(event) {
    this.lisence1 = event.target.files;
    this.lisencefrnt = this.lisence1.item(0);
  }
  profilepicture(event){
    let profilepic = event.target.files;
    this.propicfile = profilepic.item(0);
  }
  addliscenseback(event)
  {
    let licsencbk =event.target.files;
    this.lisenceback = licsencbk.item(0);
  }
  addnoc(event){
    let noc =event.target.files;
    this.nocdriver = noc.item(0);
  }
  submit() {
    this.submitted = true;

    if (this.driverForm.invalid) {
      return;
    }
    else {
      this.formData.append('image', this.lisencefrnt);
      this.formData.append('type', "1");
      this.formData.append('id', this.driverId['id']);
      this.ownerservice.adddriverimnage(this.formData).subscribe(
        data =>{
          Swal.fire(
            'Driver License Added!',
            'Driver License Added Successfully',
            'success'
          )
          this.router.navigate(['/driverlicsenceback']);
        },
        error =>{
          Swal.fire(
            'Driver License Added Error!',
            'Driver License Added Error Successfully',
            'error'
          )
        }
      )
    }
  }

  submitlicsencefront()
  {
    if(this.lisencefrnt == undefined)
    {

    }
    else{
      this.formData.append('image', this.lisencefrnt);
      this.formData.append('type', "1");
      this.formData.append('id', this.driverId['id']);
      this.ownerservice.adddriverimnage(this.formData).subscribe(
        data =>{
          this.formData = new FormData();
          Swal.fire(
            'Driver License Added!',
            'Driver License Added Successfully',
            'success'
          )
          this.formData.delete;
          // this.router.navigate(['/driverlicsenceback']);
        },
        error =>{
          Swal.fire(
            'Driver License Added Error!',
            'Driver License Added Error Successfully',
            'error'
          )
          this.formData.delete;
        }
      )
    }
    
  }
  submitlicsenceback()
  {
    if(this.lisenceback == undefined)
    {

    }
    else{
      this.formData.append('image', this.lisenceback);
      this.formData.append('type', "2");
      this.formData.append('id', this.driverId['id']);
      this.ownerservice.adddriverimnage(this.formData).subscribe(
        data =>{
          this.formData = new FormData();
          Swal.fire(
            'Driver License Added!',
            'Driver License Added Successfully',
            'success'
          )
          this.formData.delete;
          // this.router.navigate(['/driverlicsenceback']);
        },
        error =>{
          Swal.fire(
            'Driver License Added Error!',
            'Driver License Added Error Successfully',
            'error'
          )
          this.formData.delete;
        }
      )
    }
  }
  profilepic(){
    if(this.propicfile == undefined)
    {

    }
    else{
      this.formData.append('image', this.propicfile);
      this.formData.append('type', "3");
      this.formData.append('id', this.driverId['id']);
      this.ownerservice.adddriverimnage(this.formData).subscribe(
        data =>{
          this.formData = new FormData();
          Swal.fire(
            'Driver Profile Pic Added!',
            'Driver Profile Pic Added Successfully',
            'success'
          )
          this.formData.delete;
          // this.router.navigate(['/driverlicsenceback']);
        },
        error =>{
          Swal.fire(
            'Driver Profile Pic Added Error!',
            'Driver Profile Pic Added Error Successfully',
            'error'
          )
          this.formData.delete;
        }
      )
    }
  }
  noc(){
    if(this.nocdriver == undefined)
    {

    }
    else{
      this.formData.append('image', this.nocdriver);
      this.formData.append('type', "4");
      this.formData.append('id', this.driverId['id']);
      this.ownerservice.adddriverimnage(this.formData).subscribe(
        data =>{
          Swal.fire(
            'Driver NOC Added!',
            'Driver NOC Added Successfully',
            'success'
          )
          this.formData.delete;
          // this.router.navigate(['/driverlicsenceback']);
        },
        error =>{
          Swal.fire(
            'Driver NOC Added Error!',
            'Driver NOC Added Error Successfully',
            'error'
          )
          this.formData.delete;
        }
      )
    }
  }
}
