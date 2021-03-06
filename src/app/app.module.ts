import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  NgxCoreModule } from '@sog/ngx-core/core'
import {  UtilModule } from '@sog/ngx-core/util'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    NgxCoreModule,
    UtilModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
