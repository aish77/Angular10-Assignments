import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueMouseenterComponent } from './blue-mouseenter/blue-mouseenter.component';
import {BlueParagraphDirective } from './blue-paragraph.directive';




@NgModule({
  declarations: [BlueMouseenterComponent, BlueParagraphDirective],
  imports: [
    CommonModule
  ],
  exports: [BlueMouseenterComponent, BlueParagraphDirective]
})
export class BlueMouseenterModuleModule { }
