import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userDetails: any;
  userRole: any;

  constructor() { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('ROLE'));
    this.userRole = this.userDetails;
    console.log(this.userRole)
  }

}
