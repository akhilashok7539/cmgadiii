import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminpannel/admin.service';

@Component({
  selector: 'app-chatsadnfeedbacks',
  templateUrl: './chatsadnfeedbacks.component.html',
  styleUrls: ['./chatsadnfeedbacks.component.css']
})
export class ChatsadnfeedbacksComponent implements OnInit {
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
    this.date1 = today;
    this.getchatsafeeback();
  }

  getchatsafeeback()
  {
    this.AdminService.getalldata(this.faday,this.tday,this.page,this.size).subscribe(
      data =>{
        this.results = data;
      },
      error=>{

      }
    ) 
  }
  selected(s){
    this.AdminService.getalldata(this.date1,this.date2,this.page,this.size).subscribe(
      data =>{
        this.results = data;
      },
      error=>{

      }
    ) 
  }
}
