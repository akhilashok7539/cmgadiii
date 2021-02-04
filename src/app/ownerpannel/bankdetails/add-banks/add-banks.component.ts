import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from 'src/app/_models/bank';
import { OwnerService } from '../../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-banks',
  templateUrl: './add-banks.component.html',
  styleUrls: ['./add-banks.component.css']
})
export class AddBanksComponent implements OnInit {
  addBankForm:FormGroup;
  bankModel = new Bank();
  submitted = false;
  formData = new FormData();
  userDetails = [];
  constructor(private fb:FormBuilder,private router:Router,private ownerservice:OwnerService) { }

  ngOnInit() {
    this.bankModel = new Bank();
    this.addBankForm = this.fb.group({
      acocuntholderName:['', Validators.required],
      accountNumber:['', Validators.required],
      ifscode:['', Validators.required],
      bankName:['', Validators.required],
      // ownerId:['', Validators.required],
    })
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'));
    console.log(this.userDetails);
    
    this.bankModel.ownerId = this.userDetails['userId'];
  }
  get f() { return this.addBankForm.controls; }
  submit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addBankForm.invalid) {
      
      return;
    }
    else {
      this.formData.append('accountHolderName', this.bankModel.acocuntholderName);
      this.formData.append('accountNumber ', this.bankModel.accountNumber);
      this.formData.append('ifscCode', this.bankModel.ifscode);
      this.formData.append('bankName', this.bankModel.bankName);
      this.formData.append('ownerId', this.bankModel.ownerId);
      this.ownerservice.addbanks(this.formData).subscribe(
        data =>{
          Swal.fire(
            'Bank Details Added!',
            'Bank Details Added Successfully',
            'success'
          )
          this.router.navigate(['/bankdetails']);
        },
        error =>{

        }
      )
    }
  }
}
