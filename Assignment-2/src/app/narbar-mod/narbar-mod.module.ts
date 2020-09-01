import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule, MatToolbarModule, BrowserAnimationsModule
  ],
  exports: [NavbarComponent]
})
export class NarbarModModule { }
