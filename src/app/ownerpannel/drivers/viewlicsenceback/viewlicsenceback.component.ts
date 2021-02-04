import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from '../../owner.service';

@Component({
  selector: 'app-viewlicsenceback',
  templateUrl: './viewlicsenceback.component.html',
  styleUrls: ['./viewlicsenceback.component.css']
})
export class ViewlicsencebackComponent implements OnInit {
  id:any;
  liscenimag;
  constructor(private acttivatrouter:ActivatedRoute,private http:HttpClient, 
    public dialogRef: MatDialogRef<ViewlicsencebackComponent>,private domsanitizer:DomSanitizer,
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
    this.onerservice.getlicscenceback(this.id).subscribe(
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
