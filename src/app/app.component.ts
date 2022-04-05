import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angucommerce';

  constructor(private cartservice:CartService){
  }

  ngOnInit(): void {
    const cartId= localStorage.getItem('cart_id');
    if(cartId){

      this.cartservice.getCart(cartId).subscribe(()=>{
        console.log('initialized cart');
      },error=>{
        console.log(error);
      });
    }   
  }


}
