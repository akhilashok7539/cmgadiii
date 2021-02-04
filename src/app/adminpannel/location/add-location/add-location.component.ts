import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  locationForn:FormGroup;
  Location;
  formData = new FormData();

  constructor(private fb :FormBuilder,private router:Router,private toaster:ToastrService,
    private adminservice:AdminService) { }

  ngOnInit() {
    this.locationForn = this.fb.group({
      Location :['',Validators.required]
    })
  }
  submit(){
    if(this.Location == undefined || this.Location == '')
    {
      this.toaster.error('Please enter a location name');
      return;
    }
    else 
    {
      this.formData.append('name',this.Location);
      this.adminservice.addlocation(this.formData).subscribe(
        data =>{
          this.router.navigate(['/locations']);
          Swal.fire(
            'Location Added!',
            'Location Added Successfully',
            'success'
          )
        },  
        error =>{
          this.formData.delete;
          Swal.fire(
            'Cant add Location!',
            'Location Added UnSuccessfully',
            'error'
          )
        }
      )
    }
   
  }
}
