import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  BASEURL: any;
  url: any;
  constructor(private http: HttpClient) {
    this.BASEURL = environment.BASEURL;
  }
  getalllocality() {
    return this.http.get(this.BASEURL + 'admin/listLocality');
  }
  getallcars(id) {
    return this.http.get(this.BASEURL + 'vehicle/list?ownerId=' + id + '&page=0&size=100');

  }
  addnewvehicle(formdata) {
    return this.http.post(this.BASEURL + 'vehicle/add', formdata);

  }
  editvehicle(formdata)
  {
    return this.http.put(this.BASEURL + 'vehicle/update', formdata);

  }
  getalldrivers(id) {
    return this.http.get(this.BASEURL + 'driver/list?ownerId=' + id + '&type=1&page=0&size=50');

  }
  addnewdriver(formdata){
    return this.http.post(this.BASEURL + 'driver/add', formdata);

  }
  editdrivers(formdata)
  {
    return this.http.put(this.BASEURL + 'driver/update', formdata);

  
  }
  getDriverDetailsBydriverId(id)
  {
    return this.http.get(this.BASEURL+'driver/get/'+id)
  }
  getliscncefront(id) {
      // var headers = new Headers();
      // headers.append('Content-Type', 'image/jpeg');

    // return this.http.get(this.BASEURL + 'driver/getLicenceFront/' + id);
  //  .pipe(
  //       map( res =>{
  //         console.log(res)
  //       }));
    // let token = JSON.parse(localStorage.getItem('token'));

    // var headers_object = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //    'Authorization': "Bearer "+token
    //   });
    //   const httpOptions = {
    //     headers: headers_object
    //   };

    //   let url =this.BASEURL + 'driver/getLicenceFront/' + id;
    // //   console.log(url);
    let token = JSON.parse(localStorage.getItem('token'));
    const httpoptions ={headers: new HttpHeaders({'Authorization':'Bearer'+''+token})};
    return this.http.get(this.BASEURL+'driver/getLicenceFront/'+id,{headers:httpoptions.headers,responseType:'blob'});



    
  }
  getlicscenceback(id)
  {
    let token = JSON.parse(localStorage.getItem('token'));
    const httpoptions ={headers: new HttpHeaders({'Authorization':'Bearer'+''+token})};
    return this.http.get(this.BASEURL+'driver/getLicenceBack/'+id,{headers:httpoptions.headers,responseType:'blob'});

  }

  getvehiclesDetailsById(id)
  {
    return this.http.get(this.BASEURL+'vehicle/get/'+id);
  }
  addbanks(data)
  {
    return this.http.post(this.BASEURL+'owner/addBankDetails',data);

  }
  updateBank(id,ownerId,ahName,aNumber,ifsc,bankName)
  {
    let req =
    {

    }
    return this.http.put(this.BASEURL+'owner/updateBankDetails?id='+id+'&ownerId='+ownerId+'&accountHolderName='+ahName+'&accountNumber='+aNumber+'&ifscCode='+ifsc+'&bankName='+bankName,req);

  }
  getFilterOptionsVehicles(status,id)
  {
    return this.http.get(this.BASEURL+'vehicle/listApprovalStatusForOwner?ownerId='+id+'&status='+status+'&page=0&size=100')
  }
  getallRequestfromUserBsedonStatus(id,status)
  {
    return this.http.get(this.BASEURL+'trip/listForOwnerByApprovalStatus?ownerId='+id+'&status='+status);
  }
  getallRequestfromUserBsedonprebook(id,pagenumber){
    return this.http.get(this.BASEURL+'trip/listAllPreBooking?ownerId='+id+'&page='+pagenumber+'&size=100');

  }
  getapprovalDetaislById(id)
  {
    return this.http.get(this.BASEURL+'trip/getForOwnerByApprovalStatus/'+id);
  }
  approveRequest(req)
  {
    return this.http.post(this.BASEURL+'trip/setApproval',req);

  }
  addimages(formdata)
  {
    return this.http.post(this.BASEURL+'vehicle/addImages',formdata);

  }
  adddriverimnage(formdata)
  {
    return this.http.post(this.BASEURL+'driver/addImages',formdata);

  }
  adddrivernoc(formdata){
    return this.http.post(this.BASEURL+'driver/addnoc',formdata);
  }
  getallvechilcedetails(id)
  {
    return this.http.get(this.BASEURL+'trip/listForOwnerByApprovalStatus?ownerId='+id+'&status=2');

  }
  getallvechilcetracking(uid,page){
    return this.http.get(this.BASEURL+'trip/listForVehicleTrack?ownerId='+uid+'&page='+page+'&size=2500');

  }
  addcurrentkilometer(req)
  {
    return this.http.post(this.BASEURL+'trip/startTrip',req);

  }
}
