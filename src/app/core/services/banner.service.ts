import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../../shared/models/banner.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }
  getBanner(type:String): Observable<any> {
    return this.http.get<Banner[]>(`${environment.baseUrl}banners?fields=name,location&filters[location][$eq]=${type}&populate[banner_images][populate]=*`);
  }
}
