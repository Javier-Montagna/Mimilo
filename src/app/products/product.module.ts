// module imports
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

// user define imports
import { ProductListComponent } from "./product-list/product-list.component";

// user define services
import { ProductService } from "./product.service";
import { MaterializeModule } from "angular2-materialize";

@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild([
            { path: "products", component: ProductListComponent }
        ]),
        MaterializeModule
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule { }