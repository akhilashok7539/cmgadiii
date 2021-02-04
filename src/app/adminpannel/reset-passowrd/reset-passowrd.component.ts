import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/register/password-validation';
import { Login } from 'src/app/_models/login';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.css']
})
export class ResetPassowrdComponent implements OnInit {
  resetForm: FormGroup;
  adminmodel :Login;
  submitted =false;
  constructor(private fb:FormBuilder,private adminservice:AdminService) { }

  ngOnInit() {
    this.adminmodel = new Login();
    this.resetForm = this.fb.group({

      oldPasswords: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }
  get f() { return this.resetForm.controls; }
  reset(){
    
    this.submitted = true; 

    if (this.resetForm.invalid) {
      return;
    }
    else if (this.resetForm.valid){
      this.adminservice.resetpassword(this.adminmodel.oldPasswords,this.adminmodel.password).subscribe(
        data =>{
          this.resetForm.reset();
          Swal.fire(
            'Password Reset!',
            'Password Reset Successfully',
            'success'
          )
        },
        error =>{
          Swal.fire(
            'Unable to Reset Password !',
            'Password Reset UnSuccessfully',
            'error'
          )
        }
      )
    }
  }
}
