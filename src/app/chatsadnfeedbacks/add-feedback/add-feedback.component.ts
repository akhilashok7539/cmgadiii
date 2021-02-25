import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwnerService } from 'src/app/ownerpannel/owner.service';

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
  constructor(private fb:FormBuilder,private ownerservice:OwnerService) { }

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
    }
  }
}
