import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../adminpannel/admin.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email;

  constructor(private apiservice:AdminService,private toaster:ToastrService) { }

  ngOnInit() {
  }
reset()
{
  let req ={

  }
  console.log(this.email);
  
  this.apiservice.resertpassword(this.email,req).subscribe(
    data =>{
      this.toaster.success("Reset Password Sent Successfully")
    },
    error =>{
    console.log(error.error.message);
    this.toaster.error(error.error.message)
    }
  )
}
}
