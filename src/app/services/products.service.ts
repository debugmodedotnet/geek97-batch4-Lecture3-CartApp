import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../entities/product.entity';
import { CartsService } from './carts.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = [
    {
      Id: "1",
      Title:"Pen",
      Price: 200,
      Quantity: 30
    },
    {
      Id: "1",
      Title:"Pen",
      Price: 200,
      Quantity: 30
    },
    {
      Id: "2",
      Title:"Pencil",
      Price: 100,
      Quantity: 20
    },
    {
      Id: "3",
      Title:"Book",
      Price: 300,
      Quantity: 50
    },
    {
      Id: "4",
      Title:"Bat",
      Price: 200,
      Quantity: 100
    },
    {
      Id: "5",
      Title:"Color",
      Price: 20,
      Quantity: 60
    }
  ]; 
  products$? : BehaviorSubject<IProduct[]>;
  constructor() {
     this.products$ = new BehaviorSubject<IProduct[]>(this.products); 
   
   }

   updateProduct(pid:string, mode : any){
     let pIndex = this.products.findIndex(a => a.Id == pid); 
     if(pIndex != -1){
        if(mode == 'add'){
           this.products[pIndex].Quantity = this.products[pIndex].Quantity - 1; 
        }
        else if (mode =='remove') {
          this.products[pIndex].Quantity = this.products[pIndex].Quantity + 1; 
        }
        else {

        }
      this.products$?.next(this.products);
     }
   }
  
}
