import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { CartTotal } from '../../models/cart.model';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent implements OnInit {

  cartTotal$:Observable<CartTotal>;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartTotal$=this.cartservice.cartTotal$;
  }

}
