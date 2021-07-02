import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-cannceled-bookings',
  templateUrl: './cannceled-bookings.component.html',
  styleUrls: ['./cannceled-bookings.component.css']
})
export class CannceledBookingsComponent implements OnInit {
  fromdatecancel;
  todatecancel;
  page = 0;
  cancelledbookings:any=[];
  faday;
  tday;
  date1;
  date2;
  date3;
  constructor(private adminservice:AdminService) { }

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
    this.getallcancelledbookingss();
  }
  fromdate($event){
    console.log($event.target.value);
    this.fromdatecancel = $event.target.value;
    
  }
  todate($event){
    console.log($event.target.value);
    this.todatecancel = $event.target.value;
    this.getallcancelledbookings();
  }
  getallcancelledbookings(){
    this.adminservice.getallcancelledbookings(this.fromdatecancel, this.todatecancel,this.page).subscribe(
     data =>{
        console.log(data);
        this.cancelledbookings = data;
     },
     error=>{

     }
    )
  }
  getallcancelledbookingss(){
    this.adminservice.getallcancelledbookings(this.faday, this.tday,this.page).subscribe(
     data =>{
        console.log(data);
        this.cancelledbookings = data;
        this.date3 = this.faday;
        this.date2 = this.tday;
     },
     error=>{

     }
    )
  }
  loadMore()
  {
    this.page++
    this.adminservice.getallcancelledbookings(this.faday, this.tday,this.page).subscribe(
      data =>{
        //  console.log(data);
        //  this.cancelledbookings = data;
         this.date3 = this.faday;
         this.date2 = this.tday;
         let datalist ;
         datalist = data;
         datalist.forEach(element => {
           this.cancelledbookings.push(element)
         });
      },
      error=>{
 
      }
     )
  }
}
