import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {


  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let users: any[] = JSON.parse(localStorage.getItem('userdata')) || [];
      return of(null).pipe(mergeMap(() => {

          if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
              let filteredUsers = users.filter(user => {
                  return user.username === request.body.username && user.password === request.body.password;
              });

              if (filteredUsers.length) {
                  let user = filteredUsers[0];
                  console.log(user)
                  let body = {
                      Role: user.name,
                      username: user.username,
                    
                  };

                  return of(new HttpResponse({ status: 200, body: body }));
              } else {
                  // else return 400 bad request
                  return throwError({ error: { message: 'Username or password is incorrect' } });
              }
          }
          return next.handle(request);
          
      }))

      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};