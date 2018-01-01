import { ILineItem } from "app/shopping-cart/line.item";

export interface IShoppingCart
{
    shoppingCartId: number;
    lineItems: ILineItem[];
}