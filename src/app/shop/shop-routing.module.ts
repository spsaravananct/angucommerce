import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';

import { ShopComponent } from './shop.component';


const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: ':id',
    component: ProductdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }