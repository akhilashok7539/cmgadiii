import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-paymentreports',
  templateUrl: './paymentreports.component.html',
  styleUrls: ['./paymentreports.component.css']
})
export class PaymentreportsComponent implements OnInit {
  results:any=[];
faday;
tday;
page = 0;
date1;
date2;
size =200;
  constructor(private AdminService:AdminService) { }

  ngOnInit() {

    var date = new Date();
    console.log(date)
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    var firstDay = date.getFullYear() +'-'+ month + '-' +'01'
    let today = new Date().toISOString().slice(0, 10).replace(/-/g,'-');
    console.log(firstDay);
    this.faday = firstDay;
    this.tday = today;
    console.log(today);
    this.date1 = this.faday;
    this.date2 =this.tday;
    this.getPaymentreport();
  }

  getPaymentreport()
  {
    this.AdminService.getPymentreport(this.faday,this.tday,this.page).subscribe(
      data =>{
        console.log(data);
        this.results = data;
      },
      error =>{

      }
    )
  }
  selected(s){
    this.AdminService.getPymentreport(this.date1,this.date2,this.page).subscribe(
      data =>{
        this.results = data;
      },
      error=>{

      }
    ) 
  }
  loadMore()
  {
    this.page++;
    this.AdminService.getPymentreport(this.date1,this.date2,this.page).subscribe(
      data =>{
        let datalist ;
        datalist = data;
        datalist.forEach(element => {
          this.results.push(element)
        });
      },
      error=>{

      }
    ) 
  }
}
