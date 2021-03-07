import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { MapsAPILoader} from '@agm/core';
import { google } from '@google/maps';
// import {MouseEvent} from "@agm/core";
// import { MouseEvent} from '@agm/core';
// import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-mappages',
  templateUrl: './mappages.component.html',
  styleUrls: ['./mappages.component.css']
})
export class MappagesComponent implements OnInit {
  latitude: number =10;
  longitude: number =20;
  constructor() { }

  ngOnInit() {
  }
  markerDragEnd($event:MouseEvent){
    console.log(event['coords']);
    

  }
}


