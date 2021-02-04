import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  userDetails: any;
  userName: any;
  userRole: any;

  constructor() { }

  ngOnInit() {
    this.userDetails =  JSON.parse(localStorage.getItem('ROLE'));
    // this.userName = this.userDetails['username'];
    this.userRole = this.userDetails;

  }

}
