import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxAComponent } from './box-a/box-a.component';
import { BoxBComponent } from './box-b/box-b.component';
import { BoxCComponent } from './box-c/box-c.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxAComponent,
    BoxBComponent,
    BoxCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
