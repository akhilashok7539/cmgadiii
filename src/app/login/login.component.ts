import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  userData = {
    usernameOrEmail: '',
    password:'',
    deviceId:'FFFFXXX'
  }
  user: any;
  userName: any;
  password: any;
  userRole: any;
  admin: any;
  results: any;
  constructor(private router:Router,private loginservice:LoginService,private toaster:ToastrService,
    private authservice:AuthenticationService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
 
  }
  onSubmit(form,formData) {
    // this.submitted = true;
    // this.authservice.login(formData.email,formData.password).pipe(first())
    // .subscribe(
    //     data => {
    //       this.results = data;
    //       console.log(this.results)
    //       this.router.navigate(['/admin']);

    //     },
    //     error => {
       
    //       this._snackBar.open(error.error.message +''+ '  UNAUTHORIZED USER' );
    //     }
    // )
    console.log(formData)
    this.loginservice.userLogin(formData).subscribe(
      data =>{
          localStorage.setItem('userDetail',JSON.stringify(data));
          localStorage.setItem('token',JSON.stringify(data['accessToken']));
          localStorage.setItem('isLoggedIn',JSON.stringify(true))
          if(data['roleId']== '1')
          {
            localStorage.setItem('ROLE',JSON.stringify('ADMIN'))
            this.router.navigate(['/admin']);
            // this.toaster.success('   Login Successfully');
            Swal.fire(
              'Admin Login!',
              ' Admin Login Successfully',
              'success',
              
            )
          }
          else if(data['roleId']== '2')
          {
            localStorage.setItem('ROLE',JSON.stringify('OWNER'))
            this.router.navigate(['/admin']);
            Swal.fire(
              'Owner Login!',
              ' Owner Login Successfully',
              'success'
            )

          }

      },
      error =>{
        console.log(error)
        // this.toaster.error('Incorrect User Details');
        Swal.fire(
          'Invalid Details!',
          'Incorrect User Details',
          'error'
        )
      }
    )
  
  }
  register(){
    this.router.navigate(['/userregister']);
  }

}
