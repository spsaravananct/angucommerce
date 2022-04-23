import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartService } from 'src/app/cart/cart.service';
import { DeliveryMethodData,DeliveryMethod } from 'src/app/shared/models/deliverymethod.model';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.css']
})
export class CheckoutDeliveryComponent implements OnInit {

  @Input() checkoutForm:FormGroup;

  deliveryMethods:DeliveryMethodData[];

  constructor(private checkoutService:CheckoutService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getDeliveryMethods();
  }

  getDeliveryMethods(){
    this.checkoutService.getDeliveryMethods().subscribe((dm:DeliveryMethodData[])=>{
      this.deliveryMethods=dm;
    },error=>{
      console.log(error);
    });
  }

  setShippingPrice(deliveryMethod:DeliveryMethodData){
    this.cartService.setShippingPrice(deliveryMethod);
  }

}
