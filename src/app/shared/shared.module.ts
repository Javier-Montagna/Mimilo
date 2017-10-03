import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
