import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Cart,CartTotal } from '../../shared/models/cart.model';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart$: Observable<Cart>;

  cartTotal$:Observable<CartTotal>;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cart$=this.cartservice.cart$;
    this.cartTotal$=this.cartservice.cartTotal$;
  }

}
