import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category } from '../shared/models/category.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category> {
    return this.http
      .get<Category>(
        `${environment.baseUrl}categories?populate=image`
      )
      .pipe(map(resp => resp));
  }
}
