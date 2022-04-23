import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTopComponent } from './content-top/content-top.component';
import { ContentBottomComponent } from './content-bottom/content-bottom.component';
import { ColumnLeftComponent } from './column-left/column-left.component';
import { ColumnRightComponent } from './column-right/column-right.component';
import { ModulesModule } from '../modules/modules.module';


@NgModule({
  declarations: [ContentTopComponent, ContentBottomComponent, ColumnLeftComponent, ColumnRightComponent],
  imports: [
    CommonModule,
    ModulesModule
  ],
  exports:[
    ContentTopComponent, ContentBottomComponent, ColumnLeftComponent, ColumnRightComponent
  ]
})
export class LayoutsModule { }