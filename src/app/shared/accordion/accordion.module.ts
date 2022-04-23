import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    CdkAccordionModule
  ],
  exports:[
    AccordionComponent,
    AccordionItemComponent
  ]
})
export class AccordionModule { }
