import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    BannerComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[
    BannerComponent,
    CategoriesComponent,
    ProductsComponent
  ]
})
export class ModulesModule { }
