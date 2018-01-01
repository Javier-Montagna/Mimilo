import { IShoppingCart } from "app/shopping-cart/shopping-cart";

export interface IUser {
    userId: string;
    nombre: string;
    apellido: string;
    userName: string;
    email: string;
    shoppingCart: IShoppingCart;
}