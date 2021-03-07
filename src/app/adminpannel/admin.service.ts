import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // COUNTRIES_URL = './assets/jsondata/countries.json'
  BASEURL:any;

  constructor(private http:HttpClient) {
    this.BASEURL = environment.BASEURL;
   }
  
  // getallCountries(){
  //   return this.http.get(this.COUNTRIES_URL);
  // }
  getallowners(pageIndex)
  {
    return this.http.get(this.BASEURL+'user/listUsers?page='+pageIndex+'&size=10&roleId=2');
  }
  getallusers(page){
    return this.http.get(this.BASEURL+'user/listUsers?page='+page+'&size=10&roleId=2');

  }
  getallownersforadmin(page){
    return this.http.get(this.BASEURL+'user/listUsers?page='+page+'&size=10&roleId=3');
  }
  getalllocation(){
    return this.http.get(this.BASEURL+'admin/listLocality');

  }
  addlocation(formdata)
  {
    return this.http.post(this.BASEURL+'admin/addLocality',formdata);
  }
  Editlocation(formdata)
  {
    return this.http.put(this.BASEURL+'admin/updateLocality',formdata);

  }
  getallvehicles(){
    return this.http.get(this.BASEURL+'vehicle/listBasedOnApprovalStatus?status=2&page=0&size=100');

  }
  getalldata(fday,lastday,pagesize,size){
    return this.http.get(this.BASEURL+'rating/listReview?start='+fday+'&end='+lastday+'&page='+pagesize+'&size='+size);

  }
  getallvehiclesapproved(){
    return this.http.get(this.BASEURL+'vehicle/listBasedOnApprovalStatus?status=1&page=0&size=100');

  }
  getallvehiclesRejected(){
    return this.http.get(this.BASEURL+'vehicle/listBasedOnApprovalStatus?status=3&page=0&size=100');

  }
  approve(formdata)
  {
    return this.http.post(this.BASEURL+'vehicle/setApprovalStatus',formdata);

  }
  reject(formdata)
  {
    return this.http.post(this.BASEURL+'vehicle/setApprovalStatus',formdata);

  }
  getimage(vehicleID)
  {
    let token = JSON.parse(localStorage.getItem('token'));
    const httpoptions ={headers: new HttpHeaders({'Authorization':'Bearer'+''+token})};
    return this.http.get(this.BASEURL+'vehicle/getImage2/'+vehicleID,{headers:httpoptions.headers,responseType:'blob'});
  }
  getlicencefrnt(id)
  {
    let token = JSON.parse(localStorage.getItem('token'));
    const httpoptions ={headers: new HttpHeaders({'Authorization':'Bearer'+''+token})};
    return this.http.get(this.BASEURL+'vehicle/getLicenceFront/'+id,{headers:httpoptions.headers,responseType:'blob'});

  }
  getlicscenceback(id)
  {
    let token = JSON.parse(localStorage.getItem('token'));
    const httpoptions ={headers: new HttpHeaders({'Authorization':'Bearer'+''+token})};
    return this.http.get(this.BASEURL+'vehicle/getLicenceBack/'+id,{headers:httpoptions.headers,responseType:'blob'});

  }
  getrc(id)
  {
    let token = JSON.parse(localStorage.getItem('token'));
    const httpoptions ={headers: new HttpHeaders({'Authorization':'Bearer'+''+token})};
    return this.http.get(this.BASEURL+'vehicle/getRc/'+id,{headers:httpoptions.headers,responseType:'blob'});

  }
  getVehicleDetailsbyId(id)
  {
    return this.http.get(this.BASEURL+'vehicle/get/'+id);

  }
  getbankdetails(id)
  {
    return this.http.get(this.BASEURL+'owner/getBankDetails/'+id);

  }
  resetpassword(old,password)
  {
    let req ={

    }
    return this.http.post(this.BASEURL+'updatePassword?currentPassword='+old+'&newPassword='+password,req);

  }
  getallbankdetails()
  {
    return this.http.get(this.BASEURL+'owner/listAllBankDetails?page=0&size=100')
  }
}
