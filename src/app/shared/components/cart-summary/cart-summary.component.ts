import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { EventEmitter } from '@angular/core';
import { CartItem, ICart } from '../../models/cart.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  imageurl=environment.imageUrl;

  cart$:Observable<ICart>;

  @Output() decrement:EventEmitter<CartItem>=new EventEmitter<CartItem>();
  @Output() increment:EventEmitter<CartItem>=new EventEmitter<CartItem>();
  @Output() remove:EventEmitter<CartItem>=new EventEmitter<CartItem>();
  @Input() isCart=true;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cart$=this.cartservice.cart$;
  }

  decrementItemQuantity(item:CartItem){
    this.decrement.emit(item);
  }

  incrementItemQuantity(item:CartItem){
    this.increment.emit(item);
  }

  removeCartItem(item:CartItem){
    this.remove.emit(item);
  }

}
