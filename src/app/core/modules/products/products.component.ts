import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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

  @Input() data: any;

  imageurl=environment.imageUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
