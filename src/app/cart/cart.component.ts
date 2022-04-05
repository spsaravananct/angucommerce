import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart,CartTotal } from '../shared/models/cart.model';
import { CartService } from './cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart$:Observable<ICart>;

  cartTotal$:Observable<CartTotal>;
  
  imageurl=environment.imageUrl;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cart$=this.cartservice.cart$;

    this.cartTotal$=this.cartservice.cartTotal$;
  }

  removeCartItem(){
    this.cartservice.deleteCart();
  }

}
