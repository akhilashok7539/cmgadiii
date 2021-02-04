import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css'],
  providers:[AdminService]
})
export class AdminpannelComponent implements OnInit {
 
  constructor( ) { }

  ngOnInit() {
   
  }
 
}
