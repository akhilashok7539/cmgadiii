import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/adminpannel/admin.service';
import { Bank } from 'src/app/_models/bank';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {
  results: any;
  userDetails:any;
  bankModel = new Bank();
  addBankForm: FormGroup;
  arr = []
  // constructor(private adminpannel:AdminService,private router:Router) { }
  constructor(private adminpannel:AdminService,private fb: FormBuilder, private router: Router, private ownerservice: OwnerService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
    console.log(this.userDetails);
    this.addBankForm = this.fb.group({
      acocuntholderName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifscode: ['', Validators.required],
      bankName: ['', Validators.required],
      // ownerId:['', Validators.required],
    })
    this.getbankdetails();
    // this.bankModel.ownerId = this.userDetails['userId'];
  }

  
  getbankdetails(){
    this.adminpannel.getbankdetails(this.userDetails['userId']).subscribe(
      data =>{
        console.log(data)
        this.results =data;
        
        this.arr.push(this.results)
        console.log(this.arr.length);
        
        this.bankModel.accountNumber = this.results['accountNumber'];
        this.bankModel.acocuntholderName = this.results['accountHolderName'];
        this.bankModel.ifscode = this.results['ifscCode'];
        this.bankModel.bankName = this.results['bankName'];

        // this.dataSource.data = this.results;
      },
      error =>{

      }
    )
  }
  edit()
  {
    sessionStorage.setItem('bankDetails',JSON.stringify( this.results));
    this.router.navigate(['/edit-bankdetails'])
  }
}
