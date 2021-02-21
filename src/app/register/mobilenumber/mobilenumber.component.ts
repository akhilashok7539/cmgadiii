import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/login/login.service';
import { Registeruser } from 'src/app/_models/register';

@Component({
  selector: 'app-mobilenumber',
  templateUrl: './mobilenumber.component.html',
  styleUrls: ['./mobilenumber.component.css']
})
export class MobilenumberComponent implements OnInit {
  registerForm: FormGroup;
  public registerModel: Registeruser;
  hide;
  error: any
  constructor(private formBuilder: FormBuilder,private loginservice:LoginService,private toaster:ToastrService,
    private router: Router) {

  }

  ngOnInit() {
    this.registerModel = new Registeruser();
    this.registerForm = this.formBuilder.group({
      mobNo: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      email: ['', Validators.required],
    },
)
    // this.registerModel.email = "@gmail.com";
  }
  register(){
    let req = {
      "mobilenumber":this.registerModel.mobNo,
      "emailid":this.registerModel.email
    }
    sessionStorage.setItem("mobileandemail",JSON.stringify(req));
    this.loginservice.sendotp(this.registerModel.mobNo,this.registerModel.email).subscribe(
      data =>{
        this.router.navigate(['/verifyotp'])
      },
      error=>{

      }
    )
  }
}
