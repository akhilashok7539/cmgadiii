import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminpannel/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  results:any = [];
  page =0;
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.getallusers();
  }
  getallusers(){
    this.adminservice.getallusers(this.page).subscribe(
      data =>{
        this.results = data;
      },
      error =>{

      }
    )
  }
}
