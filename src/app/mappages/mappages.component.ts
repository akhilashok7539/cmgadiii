import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { MapsAPILoader} from '@agm/core';
import { google } from '@google/maps';
// import {MouseEvent} from "@agm/core";
// import { MouseEvent} from '@agm/core';
// import { MouseEvent } from '@agm/core';
declare const google: any;

@Component({
  selector: 'app-mappages',
  templateUrl: './mappages.component.html',
  styleUrls: ['./mappages.component.css']
})
export class MappagesComponent implements OnInit {
  latitude: number =9.956719437528115;
  longitude: number =76.3214111328125;
  private geoCoder;
  address;
  constructor(private router:Router,
    public dialogRef: MatDialogRef<MappagesComponent>) { }

  ngOnInit() {
  }
  markerDragEnd($event:MouseEvent){
    // console.log(event['coords']);
    console.log($event['latLng'].lat());
    console.log($event['latLng'].lng());
    this.latitude = $event['latLng'].lat();
    this.longitude= $event['latLng'].lng();
    this.getAddress();

  }
  getAddress() {
    this.geoCoder = new google.maps.Geocoder;
  
    this.geoCoder.geocode({ 'location': { lat: this.latitude, lng: this.longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          // this.zoom = 12;
         this.address = results[0].formatted_address;
          console.log(this.address);
          
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
  
    });
  }
  submit()
  {
    let req = {
      "latitude":this.latitude,
      "longitude":this.longitude,
      "address": this.address
    }
    console.log(req);
    sessionStorage.setItem("mapcordinatess",JSON.stringify(req))
    // this.router.navigate(['/add-cars']);
    this.dialogRef.close();
  }
}


