import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { finalize } from "rxjs/operators";
import { LoadingService } from '../loading/loading.service';
import { NgxSpinnerService } from "ngx-spinner";


@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {

    constructor( private spinner: NgxSpinnerService ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();
        console.log('loadingg......');

        return next.handle(req).pipe(
            finalize(() =>   this.spinner.hide())
        );
    }
}
