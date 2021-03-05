import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';
import { CollectCashComponent } from './collect-cash/collect-cash.component';

@Component({
  selector: 'app-ownerpaymentsection',
  templateUrl: './ownerpaymentsection.component.html',
  styleUrls: ['./ownerpaymentsection.component.css']
})
export class OwnerpaymentsectionComponent implements OnInit {
  payementresults:any = [];
  page = 0;
  ownerdetails;
  ownerId;
  constructor(private ownerservice:OwnerService,private rotuer:Router, public dialog: MatDialog,) { }

  ngOnInit() {
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.getallpayments();

  }
getallpayments(){

  this.ownerservice.getallpaymentsbnyownerid(this.ownerId,this.page).subscribe(
    data =>{
      this.payementresults = data;
    },
    error =>{

    }
  )
}
collectcash(s){
  console.log(s);
  
  const dialogRef = this.dialog.open(CollectCashComponent, {
  
    data: s
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result closed`);
  });
}
}
