import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, finalize, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BusyService } from "../services/busy.service";


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private busyService:BusyService) {
    }
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.busyService.busy();
      return next.handle(req).pipe(
          delay(1000),
          finalize(()=>{
            this.busyService.idle();
          })
      ); 
    }
}