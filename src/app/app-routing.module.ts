import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { InformationComponent } from './core/pages/information/information.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';

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
    },
    {
      path: 'checkout',
      canActivate:[AuthGuard],
      loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
    },
    {
      path: 'account',
      loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    {
      path:'not-found',
      component:NotFoundComponent
    },
    {
      path:'server-error',
      component:ServerErrorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
