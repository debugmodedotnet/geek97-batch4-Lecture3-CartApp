import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../entities/cart.entity';
import { IProduct } from '../entities/product.entity';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  Carts: ICart[] = [];
  Carts$: BehaviorSubject<ICart[]>;
  constructor(private productservice : ProductsService) {
    this.Carts$ = new BehaviorSubject<ICart[]>(this.Carts);
  }

  removeFromCart(Id:string){
     let cIndex = this.Carts.findIndex(c => c.Product.Id == Id); 
     if(cIndex != -1){
        if(this.Carts[cIndex].qOrder > 1){
          this.Carts[cIndex].qOrder = this.Carts[cIndex].qOrder - 1; 
          this.Carts[cIndex].Total = this.Carts[cIndex].qOrder * this.Carts[cIndex].Product.Price;
        }
        else {
          this.Carts.splice(cIndex,1);
        }
      
      this.productservice.updateProduct(Id,'remove');
      this.Carts$.next(this.Carts);

     }
  }

  addToCart(p: IProduct) {

    let c: ICart = {
      Product: p,
      qOrder: 1,
      Total: p.Price
    }

    let cIndex = this.Carts.findIndex(c => c.Product.Id == p.Id);
    if (cIndex == -1) {
      this.Carts.push(c)
    }
    else {
      this.Carts[cIndex].qOrder = this.Carts[cIndex].qOrder + 1;
      this.Carts[cIndex].Total = this.Carts[cIndex].qOrder * this.Carts[cIndex].Product.Price;
    }

    this.productservice.updateProduct(p.Id,'add');
    this.Carts$.next(this.Carts); 
  }
}
