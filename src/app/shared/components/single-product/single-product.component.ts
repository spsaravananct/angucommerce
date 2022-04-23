import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CartService } from '../../../cart/cart.service';
import { ProductData } from '../../models/product.model';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() item:ProductData; 
  imageurl=environment.imageUrl;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }

  addItemToCart(){
    this.cartservice.addItemtoCart(this.item);
  }
}
