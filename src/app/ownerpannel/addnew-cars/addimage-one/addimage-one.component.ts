import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/_models/vehicle';
import { OwnerService } from '../../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addimage-one',
  templateUrl: './addimage-one.component.html',
  styleUrls: ['./addimage-one.component.css']
})
export class AddimageOneComponent implements OnInit {
  addVehiclesform: FormGroup;
  vehicleModel: Vehicle;

  formData = new FormData();
  rcproof: any;
  image1: any;
  image2: any;
  files: any;
  img1: any;
  img2: any;
  lisence1: any;
  lisence2: any;
  lisencefrnt: any;
  lisenceback: any;
  vehicleId: any;
  submitted = false;
  imagepreview:any;
  constructor(private fb: FormBuilder, private router: Router,private toaster:ToastrService,
    private owenerservice: OwnerService) { }

  ngOnInit() {
    this.vehicleModel = new Vehicle();
    this.addVehiclesform = this.fb.group(
      {
       
        // liscencefrnt:['',Validators.required],
        // liscenceback:['',Validators.required],
        // rcbook:['',Validators.required],
        img1:['',Validators.required],
        // img2 :['',Validators.required],
      
      }
    )
    this.vehicleId = JSON.parse(localStorage.getItem("vehicleadddetailsid"));
    console.log(this.vehicleId['id']);
    
  }
  get f() { return this.addVehiclesform.controls; }
  addimage1(event) {
    this.img1 = event.target.files;
    this.image1 = this.img1.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.img1.item(0));
    reader.onload = (event)=>{
      // this.imagepreview = event.target.result;
    }
  }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addVehiclesform.invalid) {
      
      return;
    }
    else {
      this.formData.append('image', this.image1);
      this.formData.append('type',"1");
      this.formData.append('id',this.vehicleId['id'])
      this.owenerservice.addimages(this.formData).subscribe(
        data =>{
          Swal.fire(
            'Image 1 Added!',
            'Image 1 Added Successfully',
            'success'
          )
          this.router.navigate(['/image2']);
        },
        error =>{
          Swal.fire(
            'Unable to add image 1!',
            'Unable to add image 1 Successfully',
            'error'
          )
        }
      )
    }
  }

}
