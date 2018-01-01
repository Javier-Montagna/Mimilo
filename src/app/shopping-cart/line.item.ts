import { IProduct } from "app/products/product";

export interface ILineItem
{
    lineItemid: number;
    quantity: number;
    product: IProduct;
}