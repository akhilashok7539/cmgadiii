import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/ownerpannel/owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  feedbackform: FormGroup;
  comments;
  rating;
  submitted = false;
  formData = new FormData();

  constructor(private fb:FormBuilder,private router:Router,
    private ownerservice:OwnerService) { }

  ngOnInit() {
    this.feedbackform = this.fb.group({
      comments:['',Validators.required],
      rating:['',Validators.required]

    })
  }
  get f() { return this.feedbackform.controls; }
  
  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.feedbackform.invalid) {
      
      return;
    }
    else {
      this.formData.append("comment",this.comments);
      this.formData.append("experiance",this.rating);
      this.ownerservice.addcomments(this.formData).subscribe(
        data =>{

          Swal.fire(
            'Feedback Added!',
            'Feedback Added Successfully',
            'success'
          )
          this.router.navigate(['/admin']);
        },
        error=>{
          Swal.fire(
            'Unable to add Feedback!',
            'Feedback Added UnSuccessfull',
            'error'
          )
        }
      )
    }
  }
}
