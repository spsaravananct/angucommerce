import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing-module';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutsModule } from '../core/layouts/layouts.module';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CategoriesSliderComponent,
    FeaturedProductsComponent,
    CategoriesMenuComponent,
    CategoriesSliderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    LayoutsModule
  ]
})
export class HomeModule { }
