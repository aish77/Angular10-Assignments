import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NarbarModModule } from './narbar-mod/narbar-mod.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NarbarModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
