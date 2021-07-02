import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-allbanks',
  templateUrl: './allbanks.component.html',
  styleUrls: ['./allbanks.component.css']
})
export class AllbanksComponent implements OnInit {
  results:any = [];
  page = 0;
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.getallbamnks();
  }
  getallbamnks() {
    this.adminservice.getallbankdetails(this.page).subscribe(
      data => {
        this.results = data;
      } ,
      error => {

      }
    )
  }
  loadMore()
  {
    this.page++
    this.adminservice.getallbankdetails(this.page).subscribe(
      data => {
        // this.results = data;
        let datalist ;
        datalist = data;
        datalist.forEach(element => {
          this.results.push(element)
        });
      } ,
      error => {

      }
    )
  }
}
