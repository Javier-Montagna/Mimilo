import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  _products: IProduct[];
  _errorMessage: string
  _isValid: boolean = false;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(products => {
        this._products = products;
        this._isValid = true;
      },
      error => this._errorMessage = <any>error);
  }
}