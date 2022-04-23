import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProductService } from 'src/app/shop/product.service';
import { Product,ProductData} from 'src/app/shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  imageurl=environment.imageUrl;

  product:ProductData;

  quantity =1;

  constructor(private productService: ProductService,private activateService: ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.retrieveProduct();
  }

 
  retrieveProduct(): void {   
    this.productService.getProduct(+this.activateService.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (response:ProductData) => {
         this.product = response;
        },
        error: (e) => console.error(e)
      });
  }

  addItemToCart(){
    this.cartService.addItemtoCart(this.product,this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    this.quantity--;
  }

}
