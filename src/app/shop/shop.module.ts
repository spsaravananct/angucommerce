import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ProductdetailComponent } from './productdetail/productdetail.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgxSliderModule
  ]
})
export class ShopModule { }
