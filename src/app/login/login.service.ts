import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASEURL:any;
  constructor(private http:HttpClient) 
  {
    this.BASEURL = environment.BASEURL;
   }

  // userLogin()
  // {
  //   return this.http.get(this.LOGIN_DETIALS);

  // }
  userLogin(formData){
    return this.http.post(this.BASEURL+'api/auth/admin/signin',formData);
  }
  register(req)
  {
    return this.http.post(this.BASEURL+'api/auth/signup',req);

  }
  userpublicregister(data)
  {
    return this.http.post(this.BASEURL+'user/addCustomer',data);

  }
}
