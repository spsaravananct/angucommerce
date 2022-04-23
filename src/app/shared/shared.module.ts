import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistingComponent } from './components/productlisting/productlisting.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { StepperComponent } from './components/stepper/stepper.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { AccordionModule } from './accordion/accordion.module';

@NgModule({
  declarations: [ProductlistingComponent,SingleProductComponent, TextInputComponent, StepperComponent, CartTotalComponent, CartSummaryComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    ReactiveFormsModule,
    CdkStepperModule,
    AccordionModule
  ],
  exports:[ 
    ProductlistingComponent,
    SingleProductComponent,
    CarouselModule,
    ReactiveFormsModule,
    TextInputComponent,
    CdkStepperModule,
    CdkAccordionModule,
    StepperComponent,
    CartTotalComponent,
    CartSummaryComponent,
    AccordionModule
  ]
})
export class SharedModule { }
