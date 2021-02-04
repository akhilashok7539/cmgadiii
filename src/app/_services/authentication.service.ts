import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../_models/login';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
    public currentUser: Observable<Login>;
    constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('userdata')));
      this.currentUser = this.currentUserSubject.asObservable();
      
  }
  public get currentUserValue(): Login {
    return this.currentUserSubject.value;
}
login(username: string, password: string) {
  return this.http.post<any>(`/users/authenticate`, { username, password } )
      .pipe(map(user => {
          
          if (user ) {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
          }
          return user;
      }));
}
logout() {
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}
}
