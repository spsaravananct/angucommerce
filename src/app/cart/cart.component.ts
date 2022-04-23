import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart,CartTotal, CartItem } from '../shared/models/cart.model';
import { CartService } from './cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  imageurl=environment.imageUrl;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
   
  }

  removeCartItem(item:CartItem){
    this.cartservice.removeItemFromCart(item);
  }

  incrementItemQuantity(item:CartItem){
    this.cartservice.incrementItemQuantity(item);
  }

  decrementItemQuantity(item:CartItem){
    this.cartservice.decrementItemQuantity(item);
  }

}
