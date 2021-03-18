import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tracking',
  templateUrl: './view-tracking.component.html',
  styleUrls: ['./view-tracking.component.css']
})
export class ViewTrackingComponent implements OnInit {

  results:any = [];

  constructor() { }

  ngOnInit() {
    this.results = JSON.parse(sessionStorage.getItem("vehicletracking"));
  }

}
