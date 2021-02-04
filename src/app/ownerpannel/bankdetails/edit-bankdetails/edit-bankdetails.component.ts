import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from 'src/app/_models/bank';
import { OwnerService } from '../../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-bankdetails',
  templateUrl: './edit-bankdetails.component.html',
  styleUrls: ['./edit-bankdetails.component.css']
})
export class EditBankdetailsComponent implements OnInit {
  addBankForm: FormGroup;
  bankModel = new Bank();
  submitted = false;
  formData = new FormData();
  bankDetails = [];
  constructor(private fb: FormBuilder, private router: Router, private ownerservice: OwnerService) { }

  ngOnInit() {
    this.bankModel = new Bank();
    this.addBankForm = this.fb.group({
      acocuntholderName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifscode: ['', Validators.required],
      bankName: ['', Validators.required],
      // ownerId:['', Validators.required],
    })
    this.bankDetails = JSON.parse(sessionStorage.getItem('bankDetails'));
    this.bankModel.accountNumber = this.bankDetails['accountNumber'];
    this.bankModel.acocuntholderName = this.bankDetails['accountHolderName'];
    this.bankModel.ifscode = this.bankDetails['ifscCode'];
    this.bankModel.bankName = this.bankDetails['bankName'];
    this.bankModel.bankId = this.bankDetails['id'];
    this.bankModel.ownerId = this.bankDetails['ownerId'];

  }
  get f() { return this.addBankForm.controls; }

  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addBankForm.invalid) {
      
      return;
    }
    else{

    this.ownerservice.updateBank(this.bankModel.bankId, this.bankModel.ownerId, this.bankModel.acocuntholderName, this.bankModel.accountNumber,this.bankModel.ifscode,this.bankModel.bankName).subscribe(
      data => {
        Swal.fire(
          'Bank Details Update!',
          'Bank Details Updated Successfully',
          'success'
        )
        this.router.navigate(['/bankdetails']);
      },
      error => {
        Swal.fire(
          'Unable to Update Bank Details !',
          'Bank Details Updated UnSuccessfull',
          'error'
        )
      }
    )
  }

  }
}
