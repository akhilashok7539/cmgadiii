import { Injectable } from '@angular/core';

import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  token:any;
  constructor(private loginservice: LoginService)
   { 
    this.token = JSON.parse(localStorage.getItem('token'));
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Token Interceptor');
    this.token = JSON.parse(localStorage.getItem('token'));
    
    // const token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2hpbGFzaG9rQHBydmFrLmluIiwiZXhwIjoxNTgwNDU3Mjg0LCJpYXQiOjE1ODA0NTQ1ODR9.U-Og3vRa12LGn37-XieCXsSOG0SFF089kvh_sQrqEAM`;
    console.log(this.token);
    req = req.clone({
      setHeaders: {
        Authorization:`Bearer ${this.token}`,
      },
     
    });
    console.log(req);
    return next.handle(req);
  }

}