import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Information } from '../../shared/models/information.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Information[]>(`${environment.baseUrl}informations`);
  }

  getSingle(id:Number): Observable<any> {
    return this.http.get<Information[]>(`${environment.baseUrl}informations/${id}`);
  }
}
