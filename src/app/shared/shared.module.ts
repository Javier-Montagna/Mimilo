import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterDirective } from "../directives/center.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CenterDirective
  ],
  exports: [
    CenterDirective,
    CommonModule
  ]
})
export class SharedModule { }
