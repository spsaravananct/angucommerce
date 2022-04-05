import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductList } from '../../models/productlist.model';
import { ProductService } from 'src/app/shop/product.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss']
})
export class ProductlistingComponent implements OnInit {

  @Input()
  location:string;

  @Input()
  type:string;

  products: ProductList[];

  imageurl=environment.imageUrl;
  
  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    items: 4,
    dots: false,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
          items: 1,
      },

      1: {
          items: 2,
      },

      2: {
          items: 3,
      },

      3: {
          items: 4,
      }
    }
  }

  customOptionsBig: OwlOptions = {
    loop: true,
    margin: 20,
    items: 3,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {

        320: {
            items: 1,
        },

        480: {
            items: 2,
        },

        768: {
            items: 3,
        },

        992: {
            items: 3,
        }
    }
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductlistings(this.type,this.location);
  }

  getProductlistings(type:String,location:String):void{
    this.productService.getProductlistings(type,location)
      .subscribe({
        next: (response) => {
          this.products=response;
         
        },
        error: (e) => console.error(e)
      });
  }

}
