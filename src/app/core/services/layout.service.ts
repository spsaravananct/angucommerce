import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }

  getLayout(route:String): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}layouts?filters[route][$eq]=${route}`);
  }

  getLayoutModules(layout_id:Number,position:Number){
    return this.http.get<any>(`${environment.baseUrl}mylayout/${layout_id}/${position}`);
  }

}
