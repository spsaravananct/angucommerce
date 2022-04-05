import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './core/pages/information/information.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    { path:'information/:id', component: InformationComponent },
    {
      path: 'shop',
      loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
    {
      path: 'shop/:category',
      loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
