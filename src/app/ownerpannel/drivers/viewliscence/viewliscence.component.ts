import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from '../../owner.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewliscence',
  templateUrl: './viewliscence.component.html',
  styleUrls: ['./viewliscence.component.css']
})
export class ViewliscenceComponent implements OnInit {
  id:any;
  liscenimag;
  constructor(private acttivatrouter:ActivatedRoute,private http:HttpClient, 
    public dialogRef: MatDialogRef<ViewliscenceComponent>,private domsanitizer:DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data,
    private onerservice:OwnerService) {
    console.log(data)
    this.id = data;

     }

  ngOnInit() {
    this.getlicsence();
  }
  getlicsence()
  {
    // console.log(id)
    // this.Id = id
    this.onerservice.getliscncefront(this.id).subscribe(
      data =>{
        var unnsafeimage = URL.createObjectURL(data);
        console.log(unnsafeimage)
        this.liscenimag = this.domsanitizer.bypassSecurityTrustUrl(unnsafeimage);
        // window.open(this.liscenimag,"_blank")
      },
      error =>{

      }
    );

  }
  close(){
    this.dialogRef.close();
  }
}
