import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cart, ICart, CartItem, CartTotal } from '../shared/models/cart.model';
import {ProductData} from '../shared/models/product.model'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  baseUrl=environment.baseUrl;

  private cartSource=new BehaviorSubject<ICart>(null!);
  cart$=this.cartSource.asObservable();

  private cartTotalSource=new BehaviorSubject<CartTotal>(null!);
  cartTotal$=this.cartTotalSource.asObservable();
  
  constructor(private http: HttpClient) {  
    //console.log(this.getCurrentCartValue());
  }

  getCart(cartId:String): Observable<ICart> {
    return this.http.get<ICart>(this.baseUrl+'mycart?id='+cartId)
      .pipe( 
         map((cart:ICart)=>{
          this.cartSource.next(cart);
          this.calculateTotals();
          //console.log(this.getCurrentCartValue());
          return cart;
         })
       );
  }

  setCart(cart:ICart){
    let crt_items:any[]=[];
    for (let index = 0; index < cart.cart_items.length; index++) {
      crt_items.push({
        product_id:cart.cart_items[index].product_id,
        quantity:cart.cart_items[index].quantity
      });
    }
    let newcart={
      "data": {
        "cart_id": cart.cart_id,
        "cart_items":crt_items
      }
    }
    console.log(cart.cart_items.length);
    console.log(cart);
    console.log(newcart);

    return this.http.post<ICart>(this.baseUrl + 'setcart', newcart, this.httpOptions)
    .subscribe(
      (response:ICart) => {
        console.log(response);
        this.cartSource.next(response);
        this.calculateTotals();
      }
    )
  }

  deleteCart(){
    this.cartSource.next(null!);
    this.cartTotalSource.next(null!);
    localStorage.removeItem('cart_id');
  }


  getCurrentCartValue(){
    return this.cartSource.value;
  }

  addItemtoBasket(item:ProductData,quantity=1){
    //console.log(this.getCurrentCartValue());
    const itemToAdd:CartItem=this.mapProductItemToBasketItem(item,quantity);
    const cart= this.getCurrentCartValue() ?? this.createCart();
    cart.cart_items=this.addOrUpdateItem(cart.cart_items,itemToAdd,quantity); 
    this.setCart(cart);
  }

  addOrUpdateItem(items: CartItem[], itemToAdd: CartItem, quantity: number):CartItem[]{
    const index = items.findIndex(i=>i.product_id===itemToAdd.product_id);
    if(index===-1){
      itemToAdd.quantity=quantity;
      items.push(itemToAdd);
    }else{
      items[index].quantity +=quantity;
    }
    return items; 
  }

  createCart(): ICart {
    const cart= new Cart();
    localStorage.setItem('cart_id',cart.cart_id);
    return cart;
  }

  mapProductItemToBasketItem(item: ProductData, quantity: number): CartItem {  
    return {
      product_id:item.id,
      quantity,
      product:{
        id: item.id,
        name: item.attributes.name,
        price: item.attributes.price
      }
    }
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  calculateTotals(){
    const cart=this.getCurrentCartValue();
    const shipping=0;
    const subtotal=cart.cart_items.reduce((a,b)=>(b.product.price*b.quantity)+a,0);
    const total =subtotal+shipping;
    console.log(subtotal);
    this.cartTotalSource.next({shipping,subtotal,total});
  }
}
