import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any;

  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit() {
    // this.loginservice.userLogin().subscribe(
    //   data =>{
    //     this.results = data;
    //     localStorage.setItem("userdata",JSON.stringify(this.results));

    //   },
    //   error =>{

    //   }
    // )
  }
  login(){
    this.router.navigate(['/login'])
  }
  register(){
    this.router.navigate(['/register'])
  }
  admin(){
    this.router.navigate(['/admin']);
  }
}
