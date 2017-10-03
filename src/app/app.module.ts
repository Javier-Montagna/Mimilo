/* Ng2 Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

/* External JS Imports */
import { MaterializeModule } from "angular2-materialize";
import { HomeComponent } from './home/home.component';

/* Module imports */
import { ProductModule } from './products/product.module';
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./users/user.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]),
    ProductModule,
    UserModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }