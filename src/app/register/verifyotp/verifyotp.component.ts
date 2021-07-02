import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/login/login.service';
import { Registeruser } from 'src/app/_models/register';
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  registerForm: FormGroup;
  public registerModel: Registeruser;
  hide;
  error: any
  constructor(private formBuilder: FormBuilder, private loginservice: LoginService, private toaster: ToastrService,
    private router: Router) {

  }

  ngOnInit() {
    this.registerModel = new Registeruser();
    this.registerForm = this.formBuilder.group({
      mobNo: ['', Validators.required],
    },
    )
    // this.registerModel.email = "@gmail.com";
  }
  register(){
    let mobnumber = JSON.parse(sessionStorage.getItem("mobileandemail"));
    this.loginservice.verifyotp(this.registerModel.mobNo,mobnumber['mobilenumber']).subscribe(
      data =>{
        this.router.navigate(['/register'])
        this.toaster.success("OTP Verified")
      },
      error=>{
        this.toaster.error("Invalid OTP")
      }
    )
  }
}
