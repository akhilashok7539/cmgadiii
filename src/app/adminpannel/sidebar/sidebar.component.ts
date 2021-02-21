import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userDetails: any;
  Role: any;

  constructor() { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('ROLE'));
    this.Role = this.userDetails;
    console.log(this.Role)
  }

}
