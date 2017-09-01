import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { IProduct } from "./product";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {
    private _productUrl: string = "http://mimilowebapi.azurewebsites.net/api/Product/";

    constructor(private _http: Http) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl + 'GetProducts')
            .map((response: Response ) => <IProduct[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.errorHandler);
    }

    getProductById(Id: string): Observable<IProduct[]> {
        return this._http.get(this._productUrl + "/" + Id)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("Product: " + JSON.stringify(data)))
            .catch(this.errorHandler);
    }

    private errorHandler(error: Response) {
        console.error("Error: " + error);
        return Observable.throw(error.json().error || "Server error");
    }
}