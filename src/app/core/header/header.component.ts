import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Cart,CartTotal } from '../../shared/models/cart.model';
import { CartService } from '../../cart/cart.service';
import { User, Userdata } from 'src/app/shared/models/userdata.model';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart$: Observable<Cart>;

  cartTotal$:Observable<CartTotal>;

  currentUser$:Observable<User>;

  constructor(private cartservice:CartService,private accountService:AccountService) { }

  ngOnInit(): void {
    this.cart$=this.cartservice.cart$;
    this.cartTotal$=this.cartservice.cartTotal$;
    this.currentUser$=this.accountService.currentUser$;
  }

  logout(){
    this.accountService.logout();
  }

}
