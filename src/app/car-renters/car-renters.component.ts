import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminpannel/admin.service';

@Component({
  selector: 'app-car-renters',
  templateUrl: './car-renters.component.html',
  styleUrls: ['./car-renters.component.css']
})
export class CarRentersComponent implements OnInit {
  results:any = [];
  page =0;
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.getallusers();
  }
  getallusers(){
    this.adminservice.getallownersforadmin(this.page).subscribe(
      data =>{
        this.results = data;
      },
      error =>{

      }
    )
  }
}
