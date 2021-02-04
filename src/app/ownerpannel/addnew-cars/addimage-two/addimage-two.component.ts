import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/_models/vehicle';
import { OwnerService } from '../../owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addimage-two',
  templateUrl: './addimage-two.component.html',
  styleUrls: ['./addimage-two.component.css']
})
export class AddimageTwoComponent implements OnInit {
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
  constructor(private fb: FormBuilder, private router: Router,private toaster:ToastrService,
    private owenerservice: OwnerService) { }

  ngOnInit() {
    this.vehicleModel = new Vehicle();
    this.addVehiclesform = this.fb.group(
      {
       
        // liscencefrnt:['',Validators.required],
        // liscenceback:['',Validators.required],
        // rcbook:['',Validators.required],
        // img1:['',Validators.required],
        img2 :['',Validators.required],
      
      }
    )
    this.vehicleId = JSON.parse(localStorage.getItem("vehicleadddetailsid"));
    console.log(this.vehicleId['id']);
  }
  get f() { return this.addVehiclesform.controls; }

  addimage2(event) {
    this.img1 = event.target.files;
    this.image1 = this.img1.item(0);
  }
  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addVehiclesform.invalid) {
      
      return;
    }
    else {
      this.formData.append('image', this.image1);
      this.formData.append('type',"2");
      this.formData.append('id',this.vehicleId['id'])
      this.owenerservice.addimages(this.formData).subscribe(
        data =>{
          Swal.fire(
            'Image 1 Added!',
            'Image 1 Added Successfully',
            'success'
          )
          this.router.navigate(['/licsence1']);
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
