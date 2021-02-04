import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/_models/driver';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { OwnerService } from 'src/app/ownerpannel/owner.service';

@Component({
  selector: 'app-adddriver-licscenceback',
  templateUrl: './adddriver-licscenceback.component.html',
  styleUrls: ['./adddriver-licscenceback.component.css']
})
export class AdddriverLicscencebackComponent implements OnInit {
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
  constructor(private ownerservice: OwnerService, private toaster: ToastrService,
    private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.driverModel = new Driver();
    this.driverForm = this.fb.group(
      {

        // liscencefrnt: ['', Validators.required],
        liscenceback:['',Validators.required],
        // propic:['',Validators.required]
      }
    )
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.driverId = JSON.parse(localStorage.getItem('driverDetails'));

  }
  get f() { return this.driverForm.controls; }
  addliscenseback(event) {
    this.lisence1 = event.target.files;
    this.lisencefrnt = this.lisence1.item(0);
  }
  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.driverForm.invalid) {
      return;
    }
    else {
      this.formData.append('image', this.lisencefrnt);
      this.formData.append('type', "2");
      this.formData.append('id', this.driverId['id']);
      this.ownerservice.adddriverimnage(this.formData).subscribe(
        data =>{
          Swal.fire(
            'Driver License Added!',
            'Driver License Added Successfully',
            'success'
          )
          this.router.navigate(['/profilepicdriver']);
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
}
