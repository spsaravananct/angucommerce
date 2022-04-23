import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { InformationComponent } from './core/pages/information/information.component';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './core/interceptors/loading.interceptors';
import { CoreModule } from './core/core.module';
import { JWTInterceptor } from './core/interceptors/jwt-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgxSpinnerModule,
    CommonModule
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
