import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
    constructor() {
    }
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${environment.apikey}` }
        });
        return next.handle(request);
    }
}