import { IProduct } from "./product.entity";

export interface ICart{
    Product : IProduct; 
    qOrder : number; 
    Total : number; 
}