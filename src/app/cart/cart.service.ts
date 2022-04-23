import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cart, ICart, CartItem, CartTotal } from '../shared/models/cart.model';
import {ProductData} from '../shared/models/product.model'
import { DeliveryMethod, DeliveryMethodData } from '../shared/models/deliverymethod.model';
import { ToastrService } from 'ngx-toastr';
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

  shipping=0;

  private cartSource=new BehaviorSubject<ICart>(null!);
  cart$=this.cartSource.asObservable();

  private cartTotalSource=new BehaviorSubject<CartTotal>(null!);
  cartTotal$=this.cartTotalSource.asObservable();
  
  constructor(private http: HttpClient,private toastr:ToastrService) {  
  }

  setShippingPrice(deliveryMethod:DeliveryMethodData){
    this.shipping=deliveryMethod.price;
    this.calculateTotals();
  }

  getCart(cartId:String): Observable<ICart> {
    return this.http.get<ICart>(this.baseUrl+'mycart?id='+cartId)
      .pipe( 
         map((cart:ICart)=>{
          this.cartSource.next(cart);
          this.calculateTotals();
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

    return this.http.post<ICart>(this.baseUrl + 'setcart', newcart, this.httpOptions)
    .subscribe(
      (response:ICart) => {      
        this.cartSource.next(response);
        this.calculateTotals();
        return true;
      }
    )
  }

  getCurrentCartValue(){
    return this.cartSource.value;
  }

  addItemtoCart(item:ProductData,quantity=1){
    const itemToAdd:CartItem=this.mapProductItemToCartItem(item,quantity);
    const cart= this.getCurrentCartValue() ?? this.createCart();
    cart.cart_items=this.addOrUpdateItem(cart.cart_items,itemToAdd,quantity); 
    this.setCart(cart);
    this.toastr.success('Product Added To Cart');
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

  mapProductItemToCartItem(item: ProductData, quantity: number): CartItem {  
    return {
      product_id:item.id,
      quantity,
      product:{
        id: item.id,
        name: item.name,
        price: item.price,
        image:{
          url:''
        }
      }
    }
  }

  calculateTotals(){
    const cart=this.getCurrentCartValue();
    const shipping=this.shipping;
    const subtotal=cart.cart_items.reduce((a,b)=>(b.product.price*b.quantity)+a,0);
    const total =subtotal+shipping;
    this.cartTotalSource.next({shipping,subtotal,total});
  }

  incrementItemQuantity(item:CartItem){
    const cart=this.getCurrentCartValue();
    const foundItemIndex=cart.cart_items.findIndex(i=>i.product_id===item.product_id);
    cart.cart_items[foundItemIndex].quantity++;
    this.setCart(cart);
  }

  decrementItemQuantity(item:CartItem){
    const cart=this.getCurrentCartValue();
    const foundItemIndex=cart.cart_items.findIndex(i=>i.product_id===item.product_id);
    if(cart.cart_items[foundItemIndex].quantity>1){
      cart.cart_items[foundItemIndex].quantity--; 
      this.setCart(cart);
    }else{
      this.removeItemFromCart(item);
    }
  }

  removeItemFromCart(item: CartItem) {
    const cart=this.getCurrentCartValue();
    if(cart.cart_items.some(x=>x.product_id===item.product_id)){
      cart.cart_items=cart.cart_items.filter(i=>i.product_id!==item.product_id);
      if(cart.cart_items.length>0){
        this.setCart(cart);
      }else{
        this.deleteCart(cart);
      }
    }
  }

  deleteCart(cart:ICart){
    return this.http.delete<ICart>(this.baseUrl + 'deletecart?cart_id='+cart.cart_id)
    .subscribe(
      (response:ICart) => {
        this.cartSource.next(null!);
        this.cartTotalSource.next(null!);
        localStorage.removeItem('cart_id');
      },error =>{
        console.log(error);
      }
    )
  }
}
