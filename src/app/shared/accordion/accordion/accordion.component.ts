import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkAccordion } from '@angular/cdk/accordion';

@Component({
  selector: 'app-accordion',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent extends CdkAccordion {
}
