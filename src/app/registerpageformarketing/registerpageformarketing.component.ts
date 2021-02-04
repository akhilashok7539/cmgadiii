import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registeruser } from '../_models/register';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registerpageformarketing',
  templateUrl: './registerpageformarketing.component.html',
  styleUrls: ['./registerpageformarketing.component.css']
})
export class RegisterpageformarketingComponent implements OnInit {
  publicreisterform: FormGroup;
  public registerModel: Registeruser;
  formData = new FormData();
  submitted = false;
  constructor(private formBuilder: FormBuilder,private loginservice:LoginService,
    private  toaster:ToastrService,
    private router: Router) {

  }
  ngOnInit() {
    this.registerModel = new Registeruser();
    this.registerModel.types = '';
    this.registerModel.dist = '';
    this.publicreisterform = this.formBuilder.group({
      name: ['', Validators.required],
      mobNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', Validators.required],
      wnumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      types: ['', Validators.required],
      
      dist: ['', Validators.required],
      locality: ['', Validators.required],
    })
  }
  get f() { return this.publicreisterform.controls; }

  register() {
    this.submitted = true;

    if (this.publicreisterform.invalid) {
      console.log(this.publicreisterform.value)
      return;
    }
    else {

    console.log(this.registerModel.types )
    this.formData.append('name',this.registerModel.name);
    this.formData.append('emailId',this.registerModel.email);
    this.formData.append('mobile',this.registerModel.mobNo);
    this.formData.append('address',this.registerModel.address);
    this.formData.append('roleId',this.registerModel.types);
    this.formData.append('whatsAppNo',this.registerModel.wnumber);
    this.formData.append('district',this.registerModel.dist);
    this.formData.append("city",this.registerModel.locality);
    
    this.loginservice.userpublicregister(this.formData).subscribe(
      data =>{
        Swal.fire(
          'Registration Completed!',
          'Registered Successfully',
          'success'
        )
        this.formData.delete;
        window.location.reload();
      },
      error =>{
        this.formData.delete;
        Swal.fire(
          'Unable to Register!',
          'Server is busy at this moment',
          'error'
        )

       
      }
    )
    }
  }
}
