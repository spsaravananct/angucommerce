import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeliveryMethodData,DeliveryMethod } from '../shared/models/deliverymethod.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDeliveryMethods(){
    return this.http
      .get<DeliveryMethod>(
        this.baseUrl+'delivery-methods').pipe(
          map((dm:DeliveryMethod)=>{
            return dm.data.sort((a,b)=>b.price-a.price);
            //return dm.data;
          })
        );
  }
}
