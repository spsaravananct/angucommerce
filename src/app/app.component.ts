import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angucommerce';

  constructor(private cartservice:CartService,private accountService:AccountService){
  }

  ngOnInit(): void {
    this.loadBasket();
    this.loadUser();
  }


  loadUser() {
      const token= localStorage.getItem('token');
      this.accountService.loadCurrentUser(token!).subscribe((response: any)=>{
      }); 
  }


  loadBasket(){

    const cartId= localStorage.getItem('cart_id');
    if(cartId){

      this.cartservice.getCart(cartId).subscribe(()=>{
      },error=>{
        console.log(error);
      });
    }   
  }


}
