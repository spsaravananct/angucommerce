import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


@NgModule({
  declarations: [HeaderComponent,FooterComponent, NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass:'toast-bottom-right',
        preventDuplicates:true
      }
    )
  ],
  exports:[
    HeaderComponent,FooterComponent
  ]
})
export class CoreModule { }