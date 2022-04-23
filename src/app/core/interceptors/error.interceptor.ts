import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router:Router,private toastr:ToastrService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(error=>{
                if(error){                       
                    if(error.status!=0){
                        if(error.error.error.status===400){
                            this.toastr.error(error.error.error.message,error.error.error.statusCode);
                        }
                        if(error.error.error.status===401){
                            this.toastr.error(error.error.error.message,error.error.error.statusCode);
                        }
                        if(error.error.error.status===403){
                            this.toastr.error(error.error.error.message,error.error.error.statusCode);
                        }
                        if(error.error.error.status===404){
                            this.router.navigateByUrl('/not-found');
                        }
                        if(error.error.error.status===500){
                            this.router.navigateByUrl('/server-error');
                        }
                    }else{
                        this.router.navigateByUrl('/server-error');
                    }
                }
                return throwError(error);
            })
        );
    }
}