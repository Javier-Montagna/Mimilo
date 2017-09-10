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
import { LoginComponent } from './login/login.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]),
    ProductModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }