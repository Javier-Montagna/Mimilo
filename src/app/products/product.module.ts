// module imports
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

// user define imports
import { ProductListComponent } from "./product-list/product-list.component";

// user define services
import { ProductService } from "./product.service";
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild([
            { path: "products", component: ProductListComponent },
            { path: "product/:Id", component: ProductDetailComponent }
        ])
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule { }