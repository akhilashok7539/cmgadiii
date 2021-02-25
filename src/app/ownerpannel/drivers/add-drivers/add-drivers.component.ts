import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/_models/driver';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../../owner.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.css']
})
export class AddDriversComponent implements OnInit {
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
      this.formData.append('number', this.number);
      this.formData.append('addresss', this.driverModel.address);
      this.formData.append('panCardNO', this.driverModel.pancard);
      // this.formData.append('proPic', this.propic);
      // this.formData.append('licenceFront', this.lisencefrnt);
      // this.formData.append('licenceBack', this.lisenceback);
      this.ownerservice.addnewdriver(this.formData).subscribe(
        data => {
          // this.toaster.success('Driver Added Successfully')
          localStorage.setItem("driverDetails",JSON.stringify(data))
          Swal.fire(
            'Driver Added!',
            'Driver Added Successfully',
            'success'
          )
          this.router.navigate(['/driverlicsencefrnt'])
        },
        error => {
          // alert('error')
          this.error = error.error['message']
          // this.toaster.error(this.error);
          Swal.fire(
            'Unable to Add driver!',
            this.error,
            'error'
          )
          this.formData.delete;

        }
      )
    }
  }
}
