import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { environment } from '../../environments/environment';
import { ProductList } from '../shared/models/productlist.model';


@Injectable({ 
  providedIn: 'root'
})
export class ProductService {

  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProducts(page?:Number,pageSize?:Number,minValue?:Number,maxValue?:Number,category?:Number,sortSelected?:String,searchValue?:String): Observable<Product> {

    let params= new HttpParams();

      params=params.append('populate[image][fields][0]','url');

      params=params.append('populate[categories][fields][1]','name');

      params=params.append('populate[categories][populate][0]','image');

      params=params.append('fields[1]','name');

      params=params.append('fields[2]','description');

      params=params.append('fields[3]','price');

      params=params.append('fields[4]','slug');

      params=params.append('populate[categories][populate][image][fields][1]','url');

    if(page){
      params=params.append('pagination[page]',page.toString());
    }
    if(pageSize){
      params=params.append('pagination[pageSize]',pageSize.toString());
    }
    if(minValue){
      params=params.append('filters[price][$gt]',minValue.toString());
    }
    if(maxValue){
      params=params.append('filters[price][$lt]',maxValue.toString());
    }
    if(category){
      params=params.append('filters[categories][id][$eq]',category.toString());
    }
    if(sortSelected){
      params=params.append('sort',sortSelected.toString());
    }
    if(searchValue){
      params=params.append('filters[name][$containsi]',searchValue.toString());
    }
    return this.http
      .get<Product>(
        this.baseUrl+'products',{params:params}
      )
      .pipe(map(resp => resp));
  }
  
  getProductlistings(type:String='custom',location:String): Observable<any> {
    return this.http
      .get<{ data: Array<ProductList> }>(
        `${environment.baseUrl}findplist?type=${type}&location=${location}`
      )
      .pipe(map(resp => resp));
  }
}
