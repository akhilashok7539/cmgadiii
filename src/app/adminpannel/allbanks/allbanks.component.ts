import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-allbanks',
  templateUrl: './allbanks.component.html',
  styleUrls: ['./allbanks.component.css']
})
export class AllbanksComponent implements OnInit {
  results:any = [];
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.getallbamnks();
  }
  getallbamnks() {
    this.adminservice.getallbankdetails().subscribe(
      data => {
        this.results = data;
      } ,
      error => {

      }
    )
  }
}
