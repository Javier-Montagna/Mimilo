import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "shopping-cart", component: ShoppingCartComponent}
    ])
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
