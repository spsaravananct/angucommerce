import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistingComponent } from './components/productlisting/productlisting.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SingleProductComponent } from './components/single-product/single-product.component';


@NgModule({
  declarations: [ProductlistingComponent,SingleProductComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[ 
    ProductlistingComponent,
    SingleProductComponent,
    CarouselModule
  ]
})
export class SharedModule { }
